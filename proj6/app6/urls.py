from django.urls import path
from django.conf.urls.static import static
from django.conf import settings
from . import views

urlpatterns = [
    path('', views.index, name='index'),
    path('about/', views.about, name='about'),
    path('features/', views.features, name='features'),
    path('pricing/', views.pricing, name='pricing'),
]