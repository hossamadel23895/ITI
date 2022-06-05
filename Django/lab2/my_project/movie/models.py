from django.db import models
from django.forms import IntegerField


class Movie(models.Model):
    
    DIRECTORS = (
        ('Mohamed Khan', 'Mohamed Khan'),
        ('Salah Abo Saif', 'Salah Abo Saif'),
    )

    name = models.CharField(verbose_name='Movie Name', max_length=50)
    production_year = models.PositiveIntegerField(default=1900)
    director = models.CharField(
        choices=DIRECTORS, max_length=20, default='Mohamed Khan')
    actors = models.ManyToManyField('actor.actor')
    creation_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name
