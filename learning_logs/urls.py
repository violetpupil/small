from django.urls import path

from learning_logs import views

app_name = "learning_logs"
urlpatterns = [
    path('', views.index, name='index'),
    path("topics", views.topics, name="topics"),
]
