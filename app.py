# Dependencies
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from os import environ


load_dotenv()

# Create Flask Instance
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URI')

# Add Database
#app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("DATABASE_URL", "<postgresql+psycopg2://username:password@host:port/database>")

# Initialize the Database
db = SQLAlchemy(app)

# Create a Class

class imdb_movie_info(db.Model):
    title = db.Column(db.String)
    year = db.Column(db.Integer)
    genre = db.Column(db.String)
    runtime = db.Column(db.Integer)
    mpa_rating = db.Column(db.String)
    imdb_rating = db.Column(db.Float)
    imdb_gross = db.Column(db.Integer)
    director = db.Column(db.String)
    tomato_meter = db.Column(db.Integer)
    tom_aud_score = db.Column(db.Integer)
    entity = db.Column(db.String)
    universe_code = db.Column(db.Integer)
    id = db.Column(db.Integer, primary_key=True)
    star_one = db.Column(db.String)
    star_two = db.Column(db.String)
    star_three = db.Column(db.String)
    star_four = db.Column(db.String)

class dceu_box_office(db.Model):
    movie_code = db.Column(db.Integer, primary_key=True)
    county_code = db.Column(db.Integer)
    date = db.Column(db.Date)
    opening = db.Column(db.Float)
    gross = db.Column(db.Float)

class mcu_box_office(db.Model):
    movie_code = db.Column(db.Integer, primary_key=True)
    county_code = db.Column(db.String)
    date = db.Column(db.Date)
    opening = db.Column(db.Float)
    gross = db.Column(db.Float)

class mcu_dceu_combined(db.Model):
    universe_code = db.Column(db.Integer)
    universe_name = db.Column(db.String)
    movie_code = db.Column(db.Integer, primary_key=True)
    movie_name = db.Column(db.String)
    country_code = db.Column(db.Integer)
    country_name = db.Column(db.String)
    release_date = db.Column(db.Date)
    opening = db.Column(db.Integer)
    gross = db.Column(db.Integer)

# class movie_universe(db.Model):
#     universe_code = db.Column(db.Integer, primary_key=True)
#     universe_name = db.Column(db.String)

# class movie_codes(db.Model):
#     movie_name = db.Column(db.String)
#     movie_code = db.Column(db.Integer, primary_key=True)
#     universe_code = db.Column(db.Integer)

# class country_codes(db.Model):
#     country_name = db.Column(db.String)
#     country_code = db.Column(db.Float, primary_key=True)

# class summation_codes(db.Model):
#     summation_code = db.Column(db.Integer)
#     summation_name = db.Column(db.String)
#     country_code = db.Column(db.Float, primary_key=True)
#     affiliated_country_islands = db.Column(db.String)


@app.route("/")
def index():
    # return 'This is where our movie comparisons will be'
    return render_template("index.html")

@app.route("/api/imdb")
def imdb_postres():
    notes = db.session.query(imdb_movie_info)
    data=[]

    for note in notes:
        data.append({
            "title" : note.title,
            "year" : note.year,
            "genre" : note.genre,
            "runtime" : note.runtime,
            "mpa_rating" : note.mpa_rating,
            "imdb_rating" : note.imdb_rating,
            "imdb_gross" : note.imdb_gross,
            "director" : note.director,
            "tomato_meter" : note.tomato_meter,
            "tom_aud_score" : note.tom_aud_score,
            "entity" : note.entity,
            "universe_code" : note.universe_code,
            "id" : note.id,
            "star_one" : note.star_one,
            "star_two" : note.star_two,
            "star_three" : note.star_three,
            "star_four" : note.star_four
        })
    return jsonify(data)

@app.route("/api/dceu")
def dceu_postres():
    notes = db.session.query(dceu_box_office)
    data=[]

    for note in notes:
        data.append({
            "movie_code" : note.movie_code,
            "county_code" : note.county_code,
            "date" : note.date,
            "opening" : note.opening,
            "gross" : note.gross
        })
    return jsonify(data)

@app.route("/api/mcu")
def mcu_postres():
    notes = db.session.query(mcu_box_office)
    data=[]

    for note in notes:
        data.append({
            "movie_code" : note.movie_code,
            "county_code" : note.county_code,
            "date" : note.date,
            "opening" : note.opening,
            "gross" : note.gross
        })
    return jsonify(data)

@app.route("/api/combined")
def combined_postres():
    notes = db.session.query(mcu_dceu_combined)
    data=[]

    for note in notes:
        data.append({
            "universe_code" : note.universe_code,
            "universe_name" : note.universe_name,
            "movie_code" : note.movie_code,
            "movie_name" : note.movie_name,
            "country_code" : note.country_code,
            "country_name" : note.country_name,
            "release_date" : note.release_date,
            "opening" : note.opening,
            "gross" : note.gross
        })
    return jsonify(data)

@app.route("/chartjs")
def chartjs():
    return render_template("chartjs.html")

@app.route("/team")
def about():
    return render_template("team.html")

@app.route("/maps")
def generation():
    return render_template("maps.html")

@app.route("/mcu")
def team():
    return render_template("mcu.html")

@app.route("/dc")
def team():
    return render_template("dc.html")

@app.route("/api")
def type():
    return render_template("API.html")

@app.route("/machinelearning")
def type():
    return render_template("machinelearning.html")

@app.route("/methodology")
def type():
    # return render_template("mcu_machinelearning.html")
    return render_template("methodology.html")

if __name__ == "__main__":
    app.run(debug=True)