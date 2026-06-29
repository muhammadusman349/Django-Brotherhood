from rest_framework import serializers
from django.conf import settings
from .models import Contact, Shipment


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'subject', 'message', 'reply', 'is_replied', 'replied_at', 'submitted_at']
        read_only_fields = ['submitted_at', 'replied_at']


class ShipmentSerializer(serializers.ModelSerializer):
    icon_url = serializers.SerializerMethodField()

    class Meta:
        model = Shipment
        fields = ['id', 'name', 'icon', 'icon_url', 'description', 'delivery_time', 'cost', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def get_icon_url(self, obj):
        if obj.icon:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.icon.url)
            return f"{settings.MEDIA_URL}{obj.icon}"
        return None
