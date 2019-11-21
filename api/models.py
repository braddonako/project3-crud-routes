import datetime
from peewee import *
from flask_login import UserMixin

DATABASE = SqliteDatabase('fish1.sqlite')

class User(Model, UserMixin):
    email = CharField(unique=True)
    password = CharField()
    nickname = CharField()

    class Meta: 
        db_table = 'users'
        database = DATABASE

class Post(Model):
    img = CharField(null=True)
    nameOfFish = CharField()
    description = CharField()
    gear = CharField()
    # created_at = DateTimeField(default=datetime.datetime.now)

    class Meta:
        db_table ='posts'
        database = DATABASE

# class River(Model):
#     nameOfRiver = CharField()
#     location = CharField()



def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Post], safe=True)
    print('Tables created')
    DATABASE.close()