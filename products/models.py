from django.db import models
from django.core.validators import MinValueValidator
from categories.models import Category


class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    size = models.CharField(max_length=50, blank=True, help_text='Product size (e.g., S, M, L, XL, 42, 44)')
    feature = models.BooleanField(default=False, help_text='Mark as featured product')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name


class ProductImage(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE, related_name='images')
    image = models.ImageField(upload_to='products/', help_text='Upload product image')
    alt_text = models.CharField(max_length=200, blank=True, help_text='Alternative text for image')
    is_primary = models.BooleanField(default=False, help_text='Mark as primary image')
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ['-is_primary', 'created_at']

    def __str__(self):
        return f"{self.product.name} - {self.image.name}"


class Banner(models.Model):
    title = models.CharField(max_length=200)
    image = models.ImageField(upload_to='banners/')
    link = models.URLField(blank=True, null=True)
    description = models.TextField(blank=True, null=True)
    is_active = models.BooleanField(default=True)
    position = models.IntegerField(default=0, help_text='Lower numbers appear first')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['position', '-created_at']

    def __str__(self):
        return self.title


class Catalog(models.Model):
    CATEGORY_CHOICES = [
        ('football', 'Football'),
        ('gloves', 'Gloves'),
        ('hosiery', 'Hosiery'),
    ]

    title = models.CharField(max_length=200)
    cover_image = models.ImageField(upload_to='catalog/covers/')
    catalog_file = models.FileField(upload_to='catalog/pdfs/')
    category = models.CharField(max_length=50, choices=CATEGORY_CHOICES)
    year = models.PositiveIntegerField()
    download_count = models.PositiveIntegerField(default=0)

    # password for protected access
    password = models.CharField(max_length=100, blank=True)

    upload_date = models.DateTimeField(auto_now_add=True)
    update_date = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-year', '-upload_date']

    def __str__(self):
        return f"{self.title} ({self.year})"

    def increase_download(self):
        self.download_count += 1
        self.save(update_fields=['download_count'])
