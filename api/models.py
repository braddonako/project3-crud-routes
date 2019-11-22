from peewee import *
from flask_login import UserMixin

DATABASE = SqliteDatabase('fish3.sqlite')

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
    user = ForeignKeyField(User, backref='posts')

    class Meta:
        db_table ='posts'
        database = DATABASE

    def __str__(self):
        return '<Post {}: {} : {}>'.format(self.id, self.nameOfFish, self.description)

# class River(Model):
#     nameOfRiver = CharField()
#     location = CharField()



def initialize():
    DATABASE.connect()
    DATABASE.create_tables([User, Post], safe=True)
    print('Tables created')
    DATABASE.close()