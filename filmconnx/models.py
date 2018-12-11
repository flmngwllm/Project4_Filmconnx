from django.db import models

class User(models.Model):
    name = models.CharField(max_length=255)
    photo = models.CharField(max_length=400)
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


    def __str__(self):
        return self.name



class Poster(models.Model):
    image = models.CharField(max_length=255)
    company = models.CharField(max_length=400)

    def __str__(self):
        return self.name


class Jobs(models.Model):
    location = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description = models.CharField(max_length=400)
    date = models.CharField(max_length=255)
    compensation = models.CharField(max_length=400)
    poster = models.ForeignKey(Poster, on_delete=models.CASCADE, related_name='posters')


    def __str__(self):
        return self.name



