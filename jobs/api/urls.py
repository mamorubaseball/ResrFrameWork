from django.urls import path
from jobs.api import views

# from rest_framework import routers
# router = routers.DefaultRouter()
# router.register(r'jobs/',views.ListView)
# router.register(r'jobs/<int:pk>',views.DetailView)

urlpatterns = [
    path('jobs/', views.ListView.as_view(),name='list'),
    path('jobs/<int:pk>', views.DetailView.as_view(),name='detail'),
]