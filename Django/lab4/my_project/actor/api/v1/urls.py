from django.urls import path
from . import views

app_name = 'actor-rest-v1'

urlpatterns = [
    path('', views.actor_home, name = 'list'),
    path('<int:actor_id>', views.actor_detail, name = 'details'),
    path('generics', views.ActorHome.as_view(), name = 'generics-list'),
    path('create', views.actor_create, name = 'create'),
    path('update/<int:actor_id>', views.actor_update, name = 'update'),
    path('delete/<int:actor_id>', views.actor_delete, name = 'delete'),
]