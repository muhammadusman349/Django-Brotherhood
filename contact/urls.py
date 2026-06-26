from django.urls import path
from .views import (
    ContactCreateView,
    PrivacyPolicyListView,
    PrivacyPolicyDetailView,
    TermsOfServiceListView,
    TermsOfServiceDetailView,
    ShipmentListView,
    ShipmentDetailView
)

urlpatterns = [
    path('contact/', ContactCreateView.as_view(), name='contact-create'),
    path('privacy-policy/', PrivacyPolicyListView.as_view(), name='privacy-policy-list'),
    path('privacy-policy/<int:pk>/', PrivacyPolicyDetailView.as_view(), name='privacy-policy-detail'),
    path('terms-of-service/', TermsOfServiceListView.as_view(), name='terms-of-service-list'),
    path('terms-of-service/<int:pk>/', TermsOfServiceDetailView.as_view(), name='terms-of-service-detail'),
    path('shipments/', ShipmentListView.as_view(), name='shipment-list'),
    path('shipments/<int:pk>/', ShipmentDetailView.as_view(), name='shipment-detail'),
]
