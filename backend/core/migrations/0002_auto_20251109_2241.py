from django.db import migrations

def seed_data(apps, schema_editor):
    KeyMetrics = apps.get_model('core', 'KeyMetrics')
    Trade = apps.get_model('core', 'Trade')
    UpcomingExpiration = apps.get_model('core', 'UpcomingExpiration')

    if not KeyMetrics.objects.exists():
        KeyMetrics.objects.create(
            p_l_unrealized=1250.75,
            p_l_realized=3500.20,
            win_rate=75,
            risk_reward_ratio="1:2.5",
            r_multiples=3.2
        )

    if not Trade.objects.exists():
        Trade.objects.create(symbol="XYZ", type="Call", entry=150, exit=180, p_l=30)
        Trade.objects.create(symbol="ABC", type="Put", entry=200, exit=170, p_l=-30)
        Trade.objects.create(symbol="DEF", type="Call", entry=100, exit=140, p_l=40)
        Trade.objects.create(symbol="GHI", type="Put", entry=250, exit=220, p_l=-30)
        Trade.objects.create(symbol="JKL", type="Call", entry=120, exit=160, p_l=40)

    if not UpcomingExpiration.objects.exists():
        UpcomingExpiration.objects.create(symbol="XYZ", type="Call", strike=160, expiry="2024-04-15", days_left=7)
        UpcomingExpiration.objects.create(symbol="ABC", type="Put", strike=180, expiry="2024-04-22", days_left=14)
        UpcomingExpiration.objects.create(symbol="DEF", type="Call", strike=120, expiry="2024-04-29", days_left=21)

class Migration(migrations.Migration):

    dependencies = [
        ('core', '0001_initial'),
    ]

    operations = [
        migrations.RunPython(seed_data),
    ]
