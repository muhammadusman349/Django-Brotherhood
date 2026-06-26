from django.db import models


class Contact(models.Model):
    name = models.CharField(max_length=100)
    email = models.EmailField()
    subject = models.CharField(max_length=200)
    message = models.TextField()
    submitted_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-submitted_at']

    def __str__(self):
        return f"{self.name} - {self.subject}"


class PrivacyPolicy(models.Model):
    title = models.CharField(max_length=200, default="Privacy Policy")
    content = models.TextField()
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Privacy Policies"

    def __str__(self):
        return self.title


class TermsOfService(models.Model):
    title = models.CharField(max_length=200, default="Terms of Service")
    content = models.TextField()
    last_updated = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = "Terms of Service"

    def __str__(self):
        return self.title


class Shipment(models.Model):
    name = models.CharField(max_length=100)
    icon = models.ImageField(upload_to='shipment/icons/', blank=True, null=True)
    description = models.TextField()
    delivery_time = models.CharField(max_length=100)
    cost = models.CharField(max_length=100)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name
