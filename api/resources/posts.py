import models

from flask import Blueprint, jsonify, request
from flask_login import current_user, login_required
from playhouse.shortcuts import model_to_dict


post = Blueprint('posts', 'post')

## show all posts
@post.route('/', methods=["GET"])
def get_all_posts():
    print('current user: ', current_user)

    all_posts = [model_to_dict(post, max_depth=0) for post in models.Post.select()]
    return jsonify(data=all_posts, status={'code': 200, 'message': 'Success'})


# create route
@post.route('/', methods=["POST"])
# @login_required
def create_posts():
    ## see request payload anagolous to req.body in express
    payload = request.get_json()
    print(type(payload), 'payload')
    payload['user'] = current_user.id
    post = models.Post.create(**payload) # this could be a session to get the user id -> use current_user
    ## see the object
    print(post.__dict__)
    ## Look at all the methods
    print(dir(post))
    # Change the model to a dict
    print(model_to_dict(post), 'model to dict')
    post_dict = model_to_dict(post)
    return jsonify(data=post_dict, status={"code": 201, "message": "Success"})

## show route
@post.route('/<id>', methods=["GET"])
def get_one_post(id):
    print(id, 'yeeet')
    post = models.Post.get_by_id(id)
    print(post.__dict__)
    return jsonify(data=model_to_dict(post), status={"code": 200, "message": "Success"})

## update route
@post.route('/<id>', methods=["PUT"])
# @login_required
def update_post(id):
    payload = request.get_json()
    query = models.Post.update(**payload).where(models.Post.id==id)
    query.execute()
    return jsonify(data=model_to_dict(models.Post.get_by_id(id)), status={"code": 200, "message": "resource updated successfully"})

@post.route('/<id>', methods=["Delete"])
# @login_required
def delete_post(id):
    query = models.Post.delete().where(models.Post.id==id)
    print(models.Post.id)
    query.execute()
    return jsonify(data='resource successfully deleted', status={"code": 200, "message": "resource deleted successfully"})


    # try:
    #     posts = [model_to_dict(post) for post in models.Post.select()]
    #     print(posts)
    #     return jsonify(data=posts, status={"code": 200, "message": "Success"})
    # except models.DoesNotExist:
    #     return jsonify(data={}, status={"code": 401, "message": "Error getting the resources"})


##################################### THIS IS MY NEW TEST ROUTES######################################

## show route
# @post.route('/<post_id>/', methods=['GET'])
# def get_posts(post_id):
#     try:
#         post = model_to_dict(models.Post.get(id=post_id, max_depth=0))
#         return jsonify(post)
#     except models.DoesNotExist:
#         return jsonify(data={}, status={'code': 404, 'message': 'Post not found'})

# ## create a new post
# @post.route('/', methods=['POST'])
# def create_post():
#     payload = request.get_json()
#     if not current_user.is_authenticated:
#         print(current_user)
#         return jsonify(data={}, status={'code': 401, 'message': 'You must be logged in to create a post'})

#     payload['user'] = current_user.id
#     created_post = models.Post.create(**payload)
#     create_post_dict = model_to_dict(created_post)
#     return jsonify(status={'code': 201, 'msg': 'success'}, data=create_post_dict)

# ## delete route
# @post.route('/<id>/', methods=["DELETE"])
# def delete_post(id):
#     post_to_delete = models.Post.get(id=id)

#     if not current_user.is_authenticated:
#         return jsonify(data={}, status={'code': 401, 'message': 'You must be logged in to create a post'})
#     if post_to_delete.owner.id is not current_user.id:

#         return jsonify(data={}, status={'code': 401, 'message': 'You can only delete your post'})

#     # Delete the post and send success response back to user
#     post_to_delete.delete()
#     return jsonify(data='resource successfully deleted', status={"code": 200, "message": "resource deleted successfully"})

# ## update route
# @post.route('/<id>/', methods=['PUT'])
# def update_post(id):
#     payload = request.get_json()

#     # Get the post we are trying to update. Could put in try -> except because
#     # if we try to get an id that doesn't exist a 500 error will occur. Would
#     # send back a 404 error because the 'post' resource wasn't found.
#     post_to_update = models.Post.get(id=id)

#     if not current_user.is_authenticated:  # Checks if user is logged in
#         return jsonify(data={}, status={'code': 401, 'message': 'You must be logged in to edit a post'})

#     if post_to_update.owner.id is not current_user.id:
#         # Checks if owner (User) of post has the same id as the logged in User.
#         # If the ids don't match send 401 - unauthorized back to user
#         return jsonify(data={}, status={'code': 401, 'message': 'You can only update post you own'})


#     post_to_update.update(
#         nameOfFish=payload['nameOfFish'],
#         description=payload['description'],
#         gear=payload['gear']
#     ).execute()

#     update_post_dict = model_to_dict(post_to_update, max_depth=0)
#     return jsonify(status={'code': 200, 'msg': 'success'}, data=update_post_dict)


#########################################################################################################
