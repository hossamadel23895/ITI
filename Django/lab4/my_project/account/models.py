from django.db import models
from django.contrib.auth.models import AbstractUser


class User(AbstractUser):
    birth_date = models.fields.DateField(
        verbose_name="Date of Birth", default='2010-10-10')
    profile_picture = models.ImageField(upload_to='account', null=True, blank=True)
