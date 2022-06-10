from rest_framework import serializers
from director.models import Movie
from actor.api.v1.serializers import ActorSerializer
 
class MovieSerializer(serializers.ModelSerializer):
    # actors = ActorSerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Movie

class MovieCreateSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Movie

# Validation on specific field
    def validate_production_year(self, value):
        if value <= 1000:
            raise serializers.ValidationError("Year can't be lower that 1000")
        return value

# Validation on all fields
    def validate(self, attrs):
        # put your logic here
        return attrs