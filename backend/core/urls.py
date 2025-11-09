from django.urls import path
from . import views

urlpatterns = [
    path('api/key-metrics/', views.KeyMetricsList.as_view()),
    path('api/trades/', views.TradeList.as_view()),
    path('api/upcoming-expirations/', views.UpcomingExpirationList.as_view()),
    path('analytics/', views.analytics, name='analytics'),
    path('', views.index),
]
