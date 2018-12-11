from django.urls import path, include
from rest_framework import routers

from . import views

router = routers.DefaultRouter()
router.register('users', views.UserViewView)
router.register('jobs', views.JobsViewView)
router.register('poster', views.PosterView)


urlpatterns = [
    path('', include(router.urls))
]