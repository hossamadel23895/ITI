from django.dispatch import receiver
from django.db.models.signals import post_save, post_delete, pre_save, pre_delete

from .models import Todo

from django.core.mail import send_mail


@receiver(post_save, sender=Todo)
def post_save_handler(**kwargs):
    if kwargs.get('created'):
        created_object = kwargs.get('instance')
        subject = 'New Todo Created'
        msg = created_object.notes
        sender = "hossamadel23895@gmail.com"
        receivers = ['hossamsamo95@gmail.com']
        send_mail(subject=subject, message=msg,
                  from_email=sender, recipient_list=receivers)
