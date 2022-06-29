
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
from flask import Blueprint, render_template
from flask_login import login_required, current_user

app = Blueprint('app', __name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/profile')
@login_required
def profile():
    return render_template('profile.html', name=current_user.name)