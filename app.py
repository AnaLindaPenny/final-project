# Dependencies
from flask import Flask, jsonify, render_template
from flask_sqlalchemy import SQLAlchemy
from dotenv import load_dotenv
from os import environ


load_dotenv()

# Create Flask Instance
app = Flask(__name__)
# app.config['SQLALCHEMY_DATABASE_URI'] = environ.get('DATABASE_URI')

# Add Database
#app.config["SQLALCHEMY_DATABASE_URI"] = environ.get("DATABASE_URL", "<postgresql+psycopg2://username:password@host:port/database>")

# Initialize the Database
# db = SQLAlchemy(app)

# Create a Class
# class pokemon(db.Model):
#     against_bug = db.Column(db.Float)
#     against_dark = db.Column(db.Float)
#     against_dragon = db.Column(db.Float)
#     against_electric = db.Column(db.Float)
#     against_fairy = db.Column(db.Float)
#     against_fight = db.Column(db.Float)
#     against_fire = db.Column(db.Float)
#     against_flying = db.Column(db.Float)
#     against_ghost = db.Column(db.Float)
#     against_grass = db.Column(db.Float)
#     against_ground = db.Column(db.Float)
#     against_ice = db.Column(db.Float)
#     against_normal = db.Column(db.Float)
#     against_poison = db.Column(db.Float)
#     against_psychic = db.Column(db.Float)
#     against_rock = db.Column(db.Float)
#     against_steel = db.Column(db.Float)
#     against_water = db.Column(db.Float)
#     attack = db.Column(db.Integer)
#     base_egg_steps = db.Column(db.Integer)
#     base_happiness = db.Column(db.Integer)
#     base_total = db.Column(db.Integer)
#     defense = db.Column(db.Integer)
#     experience_growth = db.Column(db.Integer)
#     height_m = db.Column(db.Float)
#     hp = db.Column(db.Integer)
#     name = db.Column(db.String)
#     percentage_male = db.Column(db.Float)
#     pokedex_number = db.Column(db.Integer, primary_key=True)
#     sp_attack = db.Column(db.Integer)
#     sp_defense = db.Column(db.Integer)
#     speed = db.Column(db.Integer)
#     type1 = db.Column(db.String)
#     type2 = db.Column(db.String)
#     weight_kg = db.Column(db.Float)
#     generation = db.Column(db.Integer)
#     is_legendary = db.Column(db.Boolean)



@app.route("/")
def index():
    return 'This is where our movie comparisons will be'
    # return render_template("home.html")

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

# @app.route("/about")
# def about():
#     return render_template("about.html")

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