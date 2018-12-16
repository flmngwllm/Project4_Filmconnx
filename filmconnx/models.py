from django.db import models

class User(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=50)
    photo = models.CharField(max_length=400)
    location = models.CharField(max_length=255)
    projects = models.CharField(max_length=255)
    zipcode = models.IntegerField()
    bio = models.CharField(max_length=255)
    job_title = models.CharField(max_length=50)
    union = models.CharField(max_length=100)
    imbd = models.CharField(max_length=400)
    availability = models.CharField(max_length=255)
    resume = models.CharField(max_length=255)
    department = models.CharField(max_length=400)
    afiliated_groups = models.CharField(max_length=400)


    def __str__(self):
        return self.name




class Poster(models.Model):
    email = models.EmailField()
    password = models.CharField(max_length=100, blank=True)
    name = models.CharField(max_length=255)
    image = models.CharField(max_length=255)
    company = models.CharField(max_length=400)
    website = models.CharField(max_length=400,null=True, blank=True)
    
    def __str__(self):
        return self.name


class Jobs(models.Model):
    location = models.CharField(max_length=255)
    company = models.CharField(max_length=255)
    description = models.CharField(max_length=400)
    time = models.DateTimeField(null=True, blank=True)
    compensation = models.CharField(max_length=400)
    poster = models.ForeignKey(Poster, on_delete=models.CASCADE, related_name='posters')


    def __str__(self):
        return self.name



