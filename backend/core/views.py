from rest_framework import generics
from .models import KeyMetrics, Trade, UpcomingExpiration
from .serializers import KeyMetricsSerializer, TradeSerializer, UpcomingExpirationSerializer
from django.shortcuts import render
from . import dash_apps

def index(request):
    return render(request, 'index.html')

def analytics(request):
    return render(request, 'analytics.html')

class KeyMetricsList(generics.ListCreateAPIView):
    queryset = KeyMetrics.objects.all()
    serializer_class = KeyMetricsSerializer

class TradeList(generics.ListCreateAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer

class UpcomingExpirationList(generics.ListCreateAPIView):
    queryset = UpcomingExpiration.objects.all()
    serializer_class = UpcomingExpirationSerializer
