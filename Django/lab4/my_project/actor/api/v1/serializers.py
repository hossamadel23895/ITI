from rest_framework import serializers
from actor.models import Actor
 
class ActorSerializer(serializers.ModelSerializer):
    # actors = ActorSerializer(many=True)
    class Meta:
        fields = '__all__'
        model = Actor

class ActorCreateSerializer(serializers.ModelSerializer):
    class Meta:
        fields = '__all__'
        model = Actor

# Validation on specific field
    def validate_birth_year(self, value):
        if value <= 1900:
            raise serializers.ValidationError("Year can't be lower that 1900")
        return value

# Validation on all fields
    def validate(self, attrs):
        # put your logic here
        return attrs