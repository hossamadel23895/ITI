from django.db import models


class Movie(models.Model):
    name = models.CharField(verbose_name='Movie Name', max_length=50)
    production_year = models.PositiveIntegerField(default=1900)
    director = models.ForeignKey('director',on_delete=models.CASCADE, null=True)
    actors = models.ManyToManyField('actor.actor',related_name='movies')
    creation_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

class Director(models.Model):
    GENDERS = (
        ('m', 'Male'),
        ('f', 'Female'),
    )

    name = models.CharField(verbose_name='Director', max_length=50)
    gender = models.CharField(choices=GENDERS, max_length=6, default='m')

    def __str__(self):
        return self.name
