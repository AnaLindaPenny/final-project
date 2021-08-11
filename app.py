# Dependencies
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from os import environ


load_dotenv()

# Create Flask Instance
app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URL')

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

# class dceu_box_office(db.Model):
#     movie_code = db.Column(db.Integer, primary_key=True)
#     county_code = db.Column(db.Float)
#     date = db.Column(db.Date)
#     opening = db.Column(db.Integer)
#     gross = db.Column(db.Integer)

# class mcu_box_office(db.Model):
#     movie_code = db.Column(db.Integer, primary_key=True)
#     country_code = db.Column(db.Float)
#     release_date = db.Column(db.Date)
#     opening = db.Column(db.Integer)
#     gross = db.Column(db.Integer)

# class mcu_dceu_combined(db.Model):
#     universe_code = db.Column(db.Integer)
#     universe_name = db.Column(db.Float)
#     movie_code = db.Column(db.Integer, primary_key=True)
#     movie_name = db.Column(db.Float)
#     country_code = db.Column(db.Integer)
#     country_name = db.Column(db.Float)
#     release_date = db.Column(db.Date)
#     opening = db.Column(db.Integer)
#     gross = db.Column(db.Integer)

# class movie_universe(db.Model):
#     universe_code = db.Column(db.Integer, primary_key=True)
#     universe_name = db.Column(db.Float)

# class movie_codes(db.Model):
#     movie_name = db.Column(db.Float)
#     movie_code = db.Column(db.Integer, primary_key=True)
#     universe_code = db.Column(db.Integer)


# class country_codes(db.Model):
#     country_name = db.Column(db.Float)
#     country_code = db.Column(db.Float, primary_key=True)

# class summation_codes(db.Model):
#     summation_code = db.Column(db.Integer)
#     summation_name = db.Column(db.Float)
#     country_code = db.Column(db.Float, primary_key=True)
#     affiliated_country_islands = db.Column(db.Float)


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
# @app.route('/api/notes/postgres')
# def note_postgres():
#     notes = db.session.query(pokemon)
#     data = []

#     for note in notes:
#         data.append({
#             "against_bug" : note.against_bug,
#             "against_dark" : note.against_dark,
#             "against_dragon" : note.against_dragon,
#             "against_electric" : note.against_electric,
#             "against_fairy" : note.against_fairy,
#             "against_fight" : note.against_fight,
#             "against_fire" : note.against_fire,
#             "against_flying" : note.against_flying,
#             "against_ghost" : note.against_ghost,
#             "against_grass" : note.against_grass,
#             "against_ground" : note.against_ground,
#             "against_ice" : note.against_ice,
#             "against_normal" : note.against_normal,
#             "against_poison" : note.against_poison,
#             "against_psychic" : note.against_psychic,
#             "against_rock" : note.against_rock,
#             "against_steel" : note.against_steel,
#             "against_water" : note.against_water,
#             "attack" : note.attack,
#             "base_egg_steps" : note.base_egg_steps,
#             "base_happiness" : note.base_happiness,
#             "base_total" : note.base_total,
#             "defense" : note.defense,
#             "experience_growth" : note.experience_growth,
#             "height_m" : note.height_m,
#             "hp" : note.hp,
#             "name" : note.name,
#             "percentage_male" : note.percentage_male,
#             "pokedex_number" : note.pokedex_number,
#             "sp_attack" : note.sp_attack,
#             "sp_defense" : note.sp_defense,
#             "speed" : note.speed,
#             "type1" : note.type1,
#             "type2" : note.type2,
#             "weight_kg" : note.weight_kg,
#             "generation" : note.generation,
#             "is_legendary" : note.is_legendary
#         })
#     return jsonify(data)

@ap.route("/chartjs")
def chartjs():
    return render_template("chartjs.html")

@app.route("/about")
def about():
    return render_template("about.html")

# @app.route("/generation")
# def generation():
#     return render_template("gen.html")

# @app.route("/team")
# def team():
#     return render_template("team.html")

# @app.route("/type")
# def type():
#     return render_template("type.html")

if __name__ == "__main__":
    app.run(debug=True)