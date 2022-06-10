from django.contrib import admin

from .models import Director, Movie

class MovieInLine(admin.TabularInline):
    model = Movie


@admin.register(Director)
class DirectorAdmin(admin.ModelAdmin):
    inlines = [MovieInLine,]
    search_fields = ['name','movie__name']


admin.site.register(Movie)
