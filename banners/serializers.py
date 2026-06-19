from rest_framework import serializers
from .models import Banner


class BannerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Banner
        fields = ['id', 'title', 'image', 'link', 'description', 'is_active', 'position', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']
