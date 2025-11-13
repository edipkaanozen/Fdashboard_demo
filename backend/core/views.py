from rest_framework import generics
from .models import KeyMetrics, Trade, UpcomingExpiration
from .serializers import KeyMetricsSerializer, TradeSerializer, UpcomingExpirationSerializer
from django.shortcuts import render
from . import dash_apps
from rest_framework.views import APIView
from rest_framework.response import Response

def index(request):
    return render(request, 'index.html')

def analytics(request):
    return render(request, 'analytics.html')

class DashboardData(APIView):
    def get(self, request, format=None):
        key_metrics = KeyMetrics.objects.all()
        trades = Trade.objects.all()
        upcoming_expirations = UpcomingExpiration.objects.all()

        key_metrics_serializer = KeyMetricsSerializer(key_metrics, many=True)
        trades_serializer = TradeSerializer(trades, many=True)
        upcoming_expirations_serializer = UpcomingExpirationSerializer(upcoming_expirations, many=True)

        data = {
            'key_metrics': key_metrics_serializer.data,
            'trades': trades_serializer.data,
            'upcoming_expirations': upcoming_expirations_serializer.data,
        }
        return Response(data)

class KeyMetricsList(generics.ListCreateAPIView):
    queryset = KeyMetrics.objects.all()
    serializer_class = KeyMetricsSerializer

class TradeList(generics.ListCreateAPIView):
    queryset = Trade.objects.all()
    serializer_class = TradeSerializer

class UpcomingExpirationList(generics.ListCreateAPIView):
    queryset = UpcomingExpiration.objects.all()
    serializer_class = UpcomingExpirationSerializer
