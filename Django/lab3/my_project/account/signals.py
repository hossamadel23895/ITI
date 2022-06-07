from django.dispatch import receiver
from django.db.models.signals import post_save
from django.contrib.auth.models import User

from django.core.mail import send_mail


@receiver(post_save, sender=User)
def post_save_handler(**kwargs):
    if kwargs.get('created'):
        created_object = kwargs.get('instance')
        subject = 'Welcome New User'
        msg = 'Thank you for registering to our website!'
        sender = "hossamadel23895@gmail.com"
        receivers = ['hossamsamo95@gmail.com']
        send_mail(subject=subject, message=msg,
                  from_email=sender, recipient_list=receivers)
