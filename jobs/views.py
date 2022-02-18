from django.shortcuts import render
from rest_framework import generics
from django.views.generic import TemplateView
from jobs.models import JobOffer
from jobs.api.serializers import JobOfferSerializer

class IndexView(TemplateView):
    template_name = 'jobs/index.html'