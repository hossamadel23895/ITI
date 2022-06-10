from django.contrib import admin
from django.db.models import Count

from .models import Actor
from datetime import date


@admin.register(Actor)
class ActorAdmin(admin.ModelAdmin):
    list_display = ['name', 'gender', 'birth_date',
                    'my_custom_function_field', 'my_custom_function_field2']
    search_fields = ['name',]
    list_filter = ('gender',)
    fieldsets = (
        ('Name Section', {'fields': ['name', ]}),
        ('Gender Section', {'fields': ['gender', ]}),
        ('Profile Picture', {'fields': ['profile_picture', ]}),
        ('Age Section', {'fields': [
         'birth_date', 'my_custom_function_field', 'my_custom_function_field2']})
    )
    readonly_fields = ['my_custom_function_field', 'my_custom_function_field2']

    def my_custom_function_field(self, obj):
        today = date.today()
        return f"{today.year - obj.birth_date} Years"

    my_custom_function_field.short_description = 'Actor Age'

    def my_custom_function_field2(self, obj):
        return obj.movies.all().count()

    my_custom_function_field2.short_description = 'Actor Movies Count'
