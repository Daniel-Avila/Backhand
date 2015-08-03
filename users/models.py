from django.db import models
from django.contrib.auth.models import (
    BaseUserManager, AbstractBaseUser
)
from django.conf import settings


class RvUsersManager(BaseUserManager):
    def create_manager(self, email, username, contact_name, password):
        new_manager = self._create_user(email, username, contact_name,
                                        settings.USER_TYPES['manager'])
        new_manager.set_password(password)
        new_manager.save()
        return new_manager

    def create_advertiser(self, email, username, contact_name, password):
        new_advertiser = self._create_user(email, username, contact_name,
                                           settings.USER_TYPES['advertiser'])
        new_advertiser.set_password(password)
        new_advertiser.save()
        return new_advertiser

    def create_admin(self, email, username, contact_name, password):
        new_admin = self._create_user(email, username, contact_name,
                                      settings.USER_TYPES['admin'])
        new_admin.set_password(password)
        new_admin.save()
        return new_admin

    def _create_user(self, email, username, contact_name, type):
        user = RvUsers(email_address=email, username=username,
                       contact_name=contact_name, default_account_id=type)
        user.save()
        return user


class RvUsers(AbstractBaseUser):
    '''Represents a revive user account.'''
    user_id = models.AutoField(primary_key=True)
    contact_name = models.CharField(max_length=255)
    email_address = models.CharField(max_length=64)
    username = models.CharField(unique=True, max_length=64, blank=True, null=True)
    language = models.CharField(max_length=5, blank=True, null=True)
    default_account_id = models.IntegerField(blank=True, null=True)
    comments = models.TextField(blank=True, null=True)
    active = models.SmallIntegerField(null=True)
    sso_user_id = models.IntegerField(unique=True, blank=True, null=True)
    email_updated = models.DateTimeField(blank=True, null=True)

    objects = RvUsersManager()

    class Meta:
        app_label = 'backhand_users'
        db_table = 'rv_users'
