from django.urls import path
from . import views

app_name = 'director'

urlpatterns = [
    path('add', views.director_add, name='add'),
    path('details/<int:director_index>', views.director_detail, name='details'),
    path('edit/<int:director_index>', views.director_edit, name='edit'),
    path('delete/<int:director_index>', views.director_delete, name='delete'),
    path('', views.director_list, name='list'),
]
