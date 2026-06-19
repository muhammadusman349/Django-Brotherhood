from django.contrib import admin
from .models import Contact

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['name', 'email', 'subject', 'submitted_at']
    search_fields = ['name', 'email', 'subject']
    list_filter = ['submitted_at']
    readonly_fields = ['submitted_at']
