from django.urls import path
from rest_framework.authtoken.views import obtain_auth_token

from . import views

app_name = 'account-rest-v1'

urlpatterns = [
    path('login', obtain_auth_token),
    path('logout', views.logout),
    path('signup', views.signup, name='signup'),
]