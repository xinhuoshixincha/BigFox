from flask import Blueprint

api = Blueprint('api', __name__)

from .v1 import *
