from rest_framework import generics, status
from rest_framework.response import Response
from rest_framework.decorators import api_view
from django.utils import timezone
from .models import Contact, PrivacyPolicy, TermsOfService, Shipment
from .serializers import ContactSerializer, PrivacyPolicySerializer, TermsOfServiceSerializer, ShipmentSerializer


class ContactCreateView(generics.CreateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactListView(generics.ListAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer


class ContactDetailView(generics.RetrieveUpdateAPIView):
    queryset = Contact.objects.all()
    serializer_class = ContactSerializer

    def update(self, request, *args, **kwargs):
        partial = kwargs.pop('partial', False)
        instance = self.get_object()
        
        # Check if reply is being added
        reply = request.data.get('reply')
        if reply:
            instance.is_replied = True
            instance.replied_at = timezone.now()
            instance.save()
        
        serializer = self.get_serializer(instance, data=request.data, partial=partial)
        serializer.is_valid(raise_exception=True)
        self.perform_update(serializer)
        
        return Response(serializer.data)


class PrivacyPolicyListView(generics.ListAPIView):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer


class PrivacyPolicyDetailView(generics.RetrieveAPIView):
    queryset = PrivacyPolicy.objects.all()
    serializer_class = PrivacyPolicySerializer


class TermsOfServiceListView(generics.ListAPIView):
    queryset = TermsOfService.objects.all()
    serializer_class = TermsOfServiceSerializer


class TermsOfServiceDetailView(generics.RetrieveAPIView):
    queryset = TermsOfService.objects.all()
    serializer_class = TermsOfServiceSerializer


class ShipmentListView(generics.ListAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer


class ShipmentDetailView(generics.RetrieveAPIView):
    queryset = Shipment.objects.all()
    serializer_class = ShipmentSerializer
