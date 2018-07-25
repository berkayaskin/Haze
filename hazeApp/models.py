from django.db import models
from django.db.models import ForeignKey
from django.contrib.auth.models import User,Permission
from django.contrib.postgres.fields import ArrayField
from django.utils.encoding import python_2_unicode_compatible



@python_2_unicode_compatible
class User(models.Model):
    user_id = models.CharField(max_length = 200, primary_key=True)
    user_name = models.CharField(max_length = 200,null=True, blank=True)
    email = models.CharField(max_length=200, null=True, blank=True)
    user_image = models.CharField(max_length=200, null=True, blank=True)
    country = models.CharField(max_length=200, null=True, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return unicode(self.user_id)

@python_2_unicode_compatible
class Post(models.Model):
    post_url = models.CharField(max_length=200)
    post_image = models.CharField(max_length=200)
    post_name = models.CharField(max_length=200)
    post_artist = models.CharField(max_length=200)
    post_comment = models.CharField(max_length=200)
    created_at = models.DateTimeField(auto_now_add=True)
    post_user = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return unicode(self.post_name)
