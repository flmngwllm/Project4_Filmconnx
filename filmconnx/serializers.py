from rest_framework import serializers

from .models import Jobs, Poster, User

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('id', 'name', 'email','password', 'photo', 'location', 'projects', 'zipcode', 'bio', 'job_title', 'union',
                  'imbd', 'availability', 'resume', 'department', 'afiliated_groups')

class JobsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Jobs
        fields = ('id', 'location', 'company', 'description', 'date', 'compensation', 'poster')

class PosterSerializer(serializers.ModelSerializer):
    jobs = JobsSerializer(many=True, read_only=True)
    class Meta:
        model = Poster
        fields = ('id', 'email','password', 'name', 'company', 'image', 'jobs', )

