from django.contrib import admin
from .models import Contact, PrivacyPolicy, TermsOfService, Shipment

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'submitted_at']
    search_fields = ['name', 'email', 'subject']
    list_filter = ['submitted_at']


@admin.register(PrivacyPolicy)
class PrivacyPolicyAdmin(admin.ModelAdmin):
    list_display = ['title', 'last_updated']
    search_fields = ['title']


@admin.register(TermsOfService)
class TermsOfServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'last_updated']
    search_fields = ['title']


@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'delivery_time', 'cost', 'created_at']
    search_fields = ['name']
    list_filter = ['created_at']