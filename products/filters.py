import django_filters
from .models import Product


class ProductFilter(django_filters.FilterSet):
    category_slug = django_filters.CharFilter(field_name='category__slug', method='filter_by_category_slug')

    class Meta:
        model = Product
        fields = ['category', 'feature']

    def filter_by_category_slug(self, queryset, name, value):
        if value:
            return queryset.filter(category__slug=value)
        return queryset
