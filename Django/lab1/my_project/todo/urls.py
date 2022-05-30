from django.urls import path
from . import views

app_name = 'todo'

urlpatterns = [
    path('add', views.todo_add, name='add'),
    path('details/<int:todo_index>', views.todo_detail, name='details'),
    path('edit/<int:todo_index>', views.todo_edit, name='edit'),
    path('done/<int:todo_index>', views.todo_done, name='done'),
    path('delete/<int:todo_index>', views.todo_delete, name='delete'),
    path('', views.todo_list, name='list'),
]
