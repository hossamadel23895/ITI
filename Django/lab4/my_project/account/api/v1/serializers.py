from rest_framework import serializers
from django.contrib.auth import get_user_model

User = get_user_model()


class UserSerializer(serializers.ModelSerializer):
    password_confirm = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = ('username', 'email',
                  'password', 'password_confirm', 'birth_date')
        extra_kwargs = {
            'password': {'write_only': True},
            'email': {'required': True},
            'birth_date': {'required': True}
        }

    def validate_email(self, value):
        if not value:
            raise serializers.ValidationError('Email is required')
        return value

    def save(self, **kwargs):
        user = User(username=self.validated_data.get('username'))
        if self.validated_data.get('password') != self.validated_data.get('password_confirm'):
            raise serializers.validationError("Password didn't match")

        user.email = self.validated_data.get("email")
        user.set_password(self.validated_data.get('password'))
        user.save()
        return user
