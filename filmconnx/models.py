from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    photo_url = models.CharField(max_length=400)
    location = models.CharField(max_length=255)
    projects = models.CharField(max_length=255)
    zipcode = models.CharField(max_length=400)
    bio = models.CharField(max_length=255)
    job_title = models.CharField(max_length=255)
    union = models.CharField(max_length=255)
    imbd = models.CharField(max_length=400)
    availabilty = models.CharField(max_length=255)
    resume = models.CharField(max_length=255)
    department = models.CharField(max_length=400)
    afiliated_groups = models.CharField(max_length=400)



class Jobs(models.Model):
    title = models.CharField(max_length=255)
    album = models.CharField(max_length=255)
    preview_url = models.CharField(max_length=400)
    artist = models.ForeignKey(Artist, on_delete=models.CASCADE, related_name='songs')


class Poster(models.Model):
        name = models.CharField(max_length=255)
        photo_url = models.CharField(max_length=400)
        nationality = models.CharField(max_length=255)