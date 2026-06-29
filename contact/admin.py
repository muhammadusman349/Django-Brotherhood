from django.contrib import admin
from .models import Contact, Shipment

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'is_replied', 'submitted_at', 'replied_at']
    search_fields = ['name', 'email', 'subject']
    list_filter = ['submitted_at', 'is_replied']
    readonly_fields = ['submitted_at', 'replied_at']
    
    def save_model(self, request, obj, form, change):
        if obj.reply and not obj.is_replied:
            obj.is_replied = True
            from django.utils import timezone
            obj.replied_at = timezone.now()
        super().save_model(request, obj, form, change)


@admin.register(Shipment)
class ShipmentAdmin(admin.ModelAdmin):
    list_display = ['name', 'delivery_time', 'cost', 'created_at']
    search_fields = ['name']
    list_filter = ['created_at']