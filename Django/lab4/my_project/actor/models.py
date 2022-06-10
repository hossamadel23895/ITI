from django.db import models


class Actor(models.Model):
    GENDERS = (
        ('m', 'Male'),
        ('f', 'Female'),
    )

    name = models.CharField(verbose_name='Actor', max_length=50)
    birth_date = models.PositiveIntegerField(default=1950)
    gender = models.CharField(choices=GENDERS, max_length=6, default='m')
    profile_picture = models.ImageField(upload_to='actor')

    def __str__(self):
        return self.name