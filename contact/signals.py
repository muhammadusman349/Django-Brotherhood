from django.db.models.signals import post_save
from django.dispatch import receiver
from django.core.mail import send_mail
from django.conf import settings
from .models import Contact


@receiver(post_save, sender=Contact)
def send_contact_notification(sender, instance, created, **kwargs):
    """
    Send email notification to company email when a new contact message is received
    """
    if created:
        subject = f"New Contact Message: {instance.subject}"
        message = f"""
You have received a new contact message from your website.

Name: {instance.name}
Email: {instance.email}
Subject: {instance.subject}
Message:
{instance.message}

Submitted at: {instance.submitted_at}
"""
        
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.COMPANY_EMAIL],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send email notification: {e}")


@receiver(post_save, sender=Contact)
def send_reply_notification(sender, instance, created, **kwargs):
    """
    Send email notification to the contact person when a reply is sent
    """
    if not created and instance.reply and instance.is_replied:
        subject = f"Re: {instance.subject}"
        message = f"""
Dear {instance.name},

Thank you for contacting us. Here is our response to your message:

{instance.reply}

Original message:
{instance.message}

Best regards,
Brotherhood Sports Team
"""
        
        try:
            send_mail(
                subject,
                message,
                settings.DEFAULT_FROM_EMAIL,
                [instance.email],
                fail_silently=False,
            )
        except Exception as e:
            print(f"Failed to send reply email: {e}")
