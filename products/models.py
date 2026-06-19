from django.db import models
from django.core.validators import MinValueValidator
from categories.models import Category


class Product(models.Model):
    name = models.CharField(max_length=200)
    category = models.ForeignKey(Category, on_delete=models.CASCADE, related_name='products')
    description = models.TextField(blank=True)
    price = models.DecimalField(max_digits=10, decimal_places=2, validators=[MinValueValidator(0)])
    image = models.URLField(blank=True, help_text='URL to product image')
    stock = models.PositiveIntegerField(default=0, validators=[MinValueValidator(0)])
    feature = models.BooleanField(default=False, help_text='Mark as featured product')
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        ordering = ['-created_at']

    def __str__(self):
        return self.name
