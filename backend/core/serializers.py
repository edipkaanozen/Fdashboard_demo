from rest_framework import serializers
from .models import KeyMetrics, Trade, UpcomingExpiration

class KeyMetricsSerializer(serializers.ModelSerializer):
    class Meta:
        model = KeyMetrics
        fields = '__all__'

class TradeSerializer(serializers.ModelSerializer):
    class Meta:
        model = Trade
        fields = '__all__'

class UpcomingExpirationSerializer(serializers.ModelSerializer):
    class Meta:
        model = UpcomingExpiration
        fields = '__all__'
