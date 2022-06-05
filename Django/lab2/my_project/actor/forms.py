from django.forms import ModelForm
from .models import Actor


class ActorForm(ModelForm):
    class Meta:
        model = Actor
        fields = '__all__'

    def my_custom_style():
        pass