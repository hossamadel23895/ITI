from django.urls import path
from . import views

app_name = 'actor'

urlpatterns = [
    path('add', views.actor_add, name='add'),
    path('details/<int:actor_index>', views.actor_detail, name='details'),
    path('edit/<int:actor_index>', views.actor_edit, name='edit'),
    path('delete/<int:actor_index>', views.actor_delete, name='delete'),
    path('', views.actor_list, name='list'),
]
