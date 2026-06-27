from rest_framework import serializers
from django.conf import settings
from .models import Product, ProductImage, Banner, Catalog


class ProductImageSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = ProductImage
        fields = ['id', 'image', 'image_url', 'alt_text', 'is_primary', 'created_at']
        read_only_fields = ['created_at']

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return f"{settings.MEDIA_URL}{obj.image}"
        return None


class ProductSerializer(serializers.ModelSerializer):
    category_name = serializers.CharField(source='category.name', read_only=True)
    images = ProductImageSerializer(many=True, read_only=True)
    primary_image = serializers.SerializerMethodField()

    class Meta:
        model = Product
        fields = ['id', 'name', 'category', 'category_name', 'description', 'price', 'size', 'feature', 'images', 'primary_image', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def get_primary_image(self, obj):
        primary_image = obj.images.filter(is_primary=True).first()
        if primary_image:
            return ProductImageSerializer(primary_image, context=self.context).data
        # Return first image if no primary image is set
        first_image = obj.images.first()
        if first_image:
            return ProductImageSerializer(first_image, context=self.context).data
        return None


class BannerSerializer(serializers.ModelSerializer):
    image_url = serializers.SerializerMethodField()

    class Meta:
        model = Banner
        fields = ['id', 'title', 'image', 'image_url', 'link', 'description', 'is_active', 'position', 'created_at', 'updated_at']
        read_only_fields = ['created_at', 'updated_at']

    def get_image_url(self, obj):
        if obj.image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.image.url)
            return f"{settings.MEDIA_URL}{obj.image}"
        return None


class CatalogSerializer(serializers.ModelSerializer):
    cover_image_url = serializers.SerializerMethodField()
    catalog_file_url = serializers.SerializerMethodField()
    category_display = serializers.CharField(source='get_category_display', read_only=True)
    is_protected = serializers.SerializerMethodField()

    class Meta:
        model = Catalog
        fields = ['id', 'title', 'cover_image', 'cover_image_url', 'catalog_file', 'catalog_file_url', 'category', 'category_display', 'year', 'download_count', 'is_protected', 'upload_date', 'update_date']
        read_only_fields = ['download_count', 'upload_date', 'update_date']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def get_is_protected(self, obj):
        return bool(obj.password)

    def get_cover_image_url(self, obj):
        if obj.cover_image:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.cover_image.url)
            return f"{settings.MEDIA_URL}{obj.cover_image.url}"
        return None

    def get_catalog_file_url(self, obj):
        if obj.catalog_file:
            request = self.context.get('request')
            if request:
                return request.build_absolute_uri(obj.catalog_file.url)
            return f"{settings.MEDIA_URL}{obj.catalog_file.url}"
        return None
