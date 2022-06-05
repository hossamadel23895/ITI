from django.urls import path
from . import views

app_name = 'movie'

urlpatterns = [
    path('add', views.movie_add, name='add'),
    path('details/<int:movie_index>', views.movie_detail, name='details'),
    path('edit/<int:movie_index>', views.movie_edit, name='edit'),
    path('delete/<int:movie_index>', views.movie_delete, name='delete'),
    path('', views.movie_list, name='list'),
]
