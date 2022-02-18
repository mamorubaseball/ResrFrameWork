from rest_framework import serializers
from jobs.models import JobOffer

#Json形式のフォーマットに変換してくれる。
class JobOfferSerializer(serializers.ModelSerializer):
    class Meta:
        model=JobOffer
        fields='__all__'
