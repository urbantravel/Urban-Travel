from flask_login import UserMixin
from . import db


class User(UserMixin, db.Model):
    __tablename__ = 'user'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String)
    dob = db.Column(db.Integer)
    state = db.Column(db.String(20))
    gender = db.Column(db.String(12))
    address = db.Column(db.String(500))
    phone = db.Column(db.Integer)
    postal_code = db.Column(db.Integer)
    email = db.Column(db.String(120), unique=True)
    password = db.Column(db.String(120))

# class Company(db.Model):
#     __tablename__ = 'company'
    
#     id = db.Column(db.Integer, primary_key=True)
#     name = db.Column(db.String(120))
#     logo_link = db.Column(db.String(500))
#     bus = db.relationship('Bus', backref='company', lazy=True)
#     description = db.Column(db.String())
#     company_type = db.Column(db.ARRAY(db.String))

# class Billing(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     customer_id = db.Column(db.Integer, db.ForeignKey('Customer.id'))
#     billing_cost = db.Column(db.Float(10, 2))

# class Booking(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     billing_id = db.Column(db.Integer, db.ForeignKey(
#         'Billing.id'))
    
# class Bus(db.Model):
#     __tablename__ = 'bus'

#     id = db.Column(db.Integer, primary_key=True)
#     company_id = db.Column(db.Integer, db.ForeignKey(
#         'Company.id'), nullable=False)
#     seats =  db.Column(db.Integer)
#     boarding_location = db.Column(db.String(120))
#     stop_location = db.Column(db.String(120))
#     departure_time = db.Column(db.String(120))
#     seat_cost = db.Column(db.Float(10, 2))
#     status = db.Column(db.Boolean, nullable=False)

# class Location(db.Model):
#     id = db.Column(db.Integer, primary_key=True)
#     location = db.Column(db.String(120))
#     location_title = db.Column(db.String())
#     description = db.Column(db.Column(db.String()))
