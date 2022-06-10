from django.urls import path
from . import views

app_name = 'movie-rest-v1'

urlpatterns = [
    path('', views.movie_home, name = 'list'),
    path('<int:movie_id>', views.movie_detail, name = 'details'),
    path('generics', views.MovieHome.as_view(), name = 'generics-list'),
    path('create', views.movie_create, name = 'create'),
    path('update/<int:movie_id>', views.movie_update, name = 'update'),
    path('delete/<int:movie_id>', views.movie_delete, name = 'delete'),
]