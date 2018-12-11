from django.contrib import admin
from .models import User, Poster, Jobs

# Register your models here.
admin.site.register([User, Poster, Jobs])
