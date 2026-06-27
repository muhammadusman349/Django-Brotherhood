from django.contrib import admin
from .models import Product, ProductImage, Banner, Catalog


class ProductImageInline(admin.TabularInline):
    model = ProductImage
    extra = 3
    fields = ['image', 'alt_text', 'is_primary']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['name', 'category', 'price', 'size', 'feature', 'created_at']
    search_fields = ['name', 'description']
    list_filter = ['category', 'size', 'feature', 'created_at']
    readonly_fields = ['created_at', 'updated_at']
    inlines = [ProductImageInline]


@admin.register(ProductImage)
class ProductImageAdmin(admin.ModelAdmin):
    list_display = ['product', 'image', 'is_primary', 'created_at']
    list_filter = ['is_primary', 'created_at']
    search_fields = ['product__name', 'alt_text']


@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ['title', 'is_active', 'position', 'created_at', 'updated_at']
    list_filter = ['is_active', 'created_at']
    search_fields = ['title', 'description']
    list_editable = ['is_active', 'position']
    readonly_fields = ['created_at', 'updated_at']


@admin.register(Catalog)
class CatalogAdmin(admin.ModelAdmin):
    list_display = ['title', 'category', 'year', 'download_count', 'upload_date', 'update_date']
    list_filter = ['category', 'year', 'upload_date']
    search_fields = ['title']
    readonly_fields = ['download_count', 'upload_date', 'update_date']
    list_editable = ['year']
