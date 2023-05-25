# Import the dependencies.
import numpy as np

import sqlalchemy
from sqlalchemy.ext.automap import automap_base
from sqlalchemy.orm import Session
from sqlalchemy import create_engine, func

from flask import Flask, jsonify
from flask_cors import CORS

#################################################
# Database Setup
#################################################
engine = create_engine("sqlite:///flight_cancellations.sqlite")

# reflect an existing database into a new model
#Base = automap_base()
# reflect the tables
#Base.prepare(autoload_with=engine)


# Create our session (link) from Python to the DB
session = Session(engine)

#################################################
# Flask Setup
#################################################
app = Flask(__name__)
CORS(app)


#################################################
# Flask Routes
#################################################
@app.route("/")
def home():
    return (
        f"Available Routes:<br/>"
        f"api/airline_delay_cause.json<br/>"
    )

@app.route("/api/airline_delay_cause.json")
def airline_delay_cause():
    results = engine.execute("SELECT * FROM airline_delay_cause")
    return jsonify ([dict(_) for _ in results])


if __name__ == '__main__':
    app.run(debug=True)