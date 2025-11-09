from django.db import models

class KeyMetrics(models.Model):
    p_l_unrealized = models.DecimalField(max_digits=10, decimal_places=2)
    p_l_realized = models.DecimalField(max_digits=10, decimal_places=2)
    win_rate = models.DecimalField(max_digits=5, decimal_places=2)
    risk_reward_ratio = models.CharField(max_length=10)
    r_multiples = models.DecimalField(max_digits=5, decimal_places=2)

class Trade(models.Model):
    symbol = models.CharField(max_length=10)
    type = models.CharField(max_length=10)
    entry = models.DecimalField(max_digits=10, decimal_places=2)
    exit = models.DecimalField(max_digits=10, decimal_places=2)
    p_l = models.DecimalField(max_digits=10, decimal_places=2)

class UpcomingExpiration(models.Model):
    symbol = models.CharField(max_length=10)
    type = models.CharField(max_length=10)
    strike = models.DecimalField(max_digits=10, decimal_places=2)
    expiry = models.DateField()
    days_left = models.IntegerField()
