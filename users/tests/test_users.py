__author__ = 'sparky'
from django.test import TestCase

from users import models


class TestRVUsersManager(TestCase):
    def setUp(self):
        self.manager = models.RvUsersManager()

    def tearDown(self):
        pass

    def test_new_manager(self):
        '''Can we add a new user as a manager in the RVUsers table?'''

        args = ['sparky@manager', 'sparky manager', 'sparkymanage', 'password']
        expected = 2
        new_user = self.manager.create_manager(*args)
        self.assertEqual(new_user.default_account_id, expected)

    def test_new_advertiser(self):
        '''Can we add a new user as an advertiser?'''
        args = ['sparky@advertiser', 'sparky adv', 'sparkyadv', 'password']
        expected = 3
        new_user = models.RvUsersManager.create_advertiser(*args)
        self.assertEqual(new_user.default_account_id, expected)

    def test_new_admin(self):
        args = ['sparky@admin', 'sparky admin', 'sparkyadmin', 'password']
        expected = 1
        new_user = models.RvUsersManager.create_admin(*args)
        self.assertEqual(new_user.default_account_id, expected)
