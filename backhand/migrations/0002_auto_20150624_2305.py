# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.db import models, migrations


class Migration(migrations.Migration):

    dependencies = [
        ('backhand', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='bhacls',
            old_name='type',
            new_name='acltype',
        ),
        migrations.RenameField(
            model_name='bhaclschannel',
            old_name='type',
            new_name='acltype',
        ),
    ]
