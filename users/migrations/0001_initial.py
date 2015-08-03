from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):
    dependencies = []
    operations = [
        migrations.CreateModel(
            name='RvUsers',
            fields=[
                ('user_id', models.AutoField(primary_key=True, serialize=False)),
                ('contact_name', models.CharField(max_length=255)),
                ('email_address', models.CharField(max_length=255)),
                ('password', models.CharField(max_length=255)),
                ('username', models.CharField(unique=True, max_length=64, blank=True, null=True)),
                ('language', models.CharField(max_length=5, blank=True, null=True)),
                ('default_account_id', models.IntegerField(blank=True, null=True)),
                ('comments', models.TextField(blank=True, null=True)),
                ('active', models.SmallIntegerField(null=True)),
                ('sso_user_id', models.IntegerField(unique=True, blank=True, null=True)),
                ('created', models.DateTimeField(blank=True, null=True)),
                ('last_login', models.DateTimeField(blank=True, null=True)),
                ('email_updated', models.DateTimeField(blank=True, null=True)),
            ],
            options={
                'db_table': 'rv_users',
            }
        )
    ]
