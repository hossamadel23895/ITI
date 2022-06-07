from django.urls import path
from . import views

app_name = 'billing'

urlpatterns = [
    path('add', views.billing_add, name='add'),
    path('details/<int:billing_index>', views.billing_detail, name='details'),
    path('edit/<int:billing_index>', views.billing_edit, name='edit'),
    path('done/<int:billing_index>', views.billing_done, name='done'),
    path('delete/<int:billing_index>', views.billing_delete, name='delete'),
    path('', views.billing_list, name='list'),
]
