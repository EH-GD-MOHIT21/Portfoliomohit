from django.urls import path
from .import views

urlpatterns = [
    path('auth/mail',views.sendmail.as_view()),
]
