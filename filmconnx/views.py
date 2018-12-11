from rest_framework import viewsets

from .serializers import JobsSerializer, UserSerializer, PosterSerializer
from .models import Jobs, User, Poster


class UserView(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class PosterView(viewsets.ModelViewSet):
    queryset = Poster.objects.all()
    serializer_class = PosterSerializer

class JobsView(viewsets.ModelViewSet):
    queryset = Jobs.objects.all()
    serializer_class = JobsSerializer
# Create your views here.
