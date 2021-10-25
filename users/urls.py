from django.contrib.auth import login
from django.urls import path

urlpatterns = [
    path("login", login, {"template_name": "users/login.html"}, name="login"),
]
