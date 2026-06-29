from rest_framework import serializers
from django.conf import settings
from .models import Contact, PrivacyPolicy, TermsOfService, Shipment


class ContactSerializer(serializers.ModelSerializer):
    class Meta:
        model = Contact
        fields = ['id', 'name', 'email', 'subject', 'message', 'reply', 'is_replied', 'replied_at', 'submitted_at']
        read_only_fields = ['submitted_at', 'replied_at']


class PrivacyPolicySerializer(serializers.ModelSerializer):
    class Meta:
        model = PrivacyPolicy
        fields = ['id', 'title', 'content', 'last_updated']
        read_only_fields = ['last_updated']


class TermsOfServiceSerializer(serializers.ModelSerializer):
    class Meta:
        model = TermsOfService
        fields = ['id', 'title', 'content', 'last_updated']
        read_only_fields = ['last_updated']


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
