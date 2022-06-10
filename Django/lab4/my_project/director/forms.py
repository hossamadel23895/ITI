from django.forms import ModelForm
from .models import Director


class DirectorForm(ModelForm):
    class Meta:
        model = Director
        fields = '__all__'

    def my_custom_style():
        pass