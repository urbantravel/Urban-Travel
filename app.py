#----------------------------------------------------------------------------#
# Imports
#----------------------------------------------------------------------------#

import json
# import dateutil.parser
# import babel
from flask import Flask, render_template, request, Response, flash, redirect, url_for
from flask_moment import Moment
from flask_sqlalchemy import SQLAlchemy
# import logging
# from logging import Formatter, FileHandler
# from flask_wtf import Form
# from forms import *
from sqlalchemy import func
from flask_migrate import Migrate
import sys
#----------------------------------------------------------------------------#
# App Config.
#----------------------------------------------------------------------------#

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://postgres@localhost:5432/travelopedia'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)
migrate = Migrate(app, db)


#----------------------------------------------------------------------------#
# Models.
#----------------------------------------------------------------------------#


class Customer(db.Model):
    __tablename__ = 'customer'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    dob = db.Column(db.String(120))
    state = db.Column(db.String(120))
    gender = db.Column(db.String(120))
    address = db.Column(db.String(120))
    phone = db.Column(db.String(500))
    state = db.Column(db.String(120))
    postal_code = db.Column(db.String(120))

class Company(db.Model):
    __tablename__ = 'company'
    
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120))
    logo_link = db.Column(db.String(500))
    bus = db.relationship('Bus', backref='company', lazy=True)
    description = db.Column(db.String())
    company_type = db.Column(db.ARRAY(db.String))

class Billing(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    customer_id = db.Column(db.Integer, db.ForeignKey('Customer.id'))
    billing_cost = db.Column(db.Float(10, 2))

class Booking(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    billing_id = db.Column(db.Integer, db.ForeignKey(
        'Billing.id'))
    
class Bus(db.Model):
    __tablename__ = 'bus'

    id = db.Column(db.Integer, primary_key=True)
    company_id = db.Column(db.Integer, db.ForeignKey(
        'Company.id'), nullable=False)
    seats =  db.Column(db.Integer)
    boarding_location = db.Column(db.String(120))
    stop_location = db.Column(db.String(120))
    departure_time = db.Column(db.String(120))
    seat_cost = db.Column(db.Float(10, 2))
    status = db.Column(db.Boolean, nullable=False)

class Location(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    location = db.Column(db.String(120))
    location_title = db.Column(db.String())
    description = db.Column(db.Column(db.String()))




@app.route('/')
def index():
    return render_template('pages/home.html')




#----------------------------------------------------------------------------#
# Launch.
#----------------------------------------------------------------------------#

if __name__ == '__main__':
    app.run()

# Or specify port manually:
'''
if __name__ == '__main__':
    port = int(os.environ.get('PORT', 5000))
    app.run(host='0.0.0.0', port=port)
'''
