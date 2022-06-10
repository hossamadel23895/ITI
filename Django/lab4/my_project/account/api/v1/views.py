from account.api.v1.serializers import UserSerializer
from django.core.exceptions import ObjectDoesNotExist
from django.utils.translation import gettext_lazy as _
from director.models import Movie
from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.generics import RetrieveAPIView, ListAPIView


@api_view(['POST'])
@permission_classes([])
def signup(request):
    response = {'data': None, 'status': status.HTTP_400_BAD_REQUEST}
    serializer = UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        response['data'] = serializer.data
        response['status'] = status.HTTP_201_CREATED
    else:
        response['data'] = serializer.errors

    return Response(**response)


@api_view(['POST'])
@permission_classes([])
def logout(request):
    try:
        print(request.user)
        request.user.auth_token.delete()
    except (AttributeError, ObjectDoesNotExist):
        pass

    return Response({"success": _("Successfully logged out.")},
                    status=status.HTTP_200_OK)
