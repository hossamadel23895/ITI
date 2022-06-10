from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView, UpdateAPIView, ListCreateAPIView
from actor.api.v1.serializers import ActorSerializer, ActorCreateSerializer
from actor.models import Actor

from .permissions import DeveloperPermission


@api_view(['GET'])
def actor_home(request):
    actor_objects = Actor.objects.all()
    serializer = ActorSerializer(actor_objects, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


class ActorHome(ListAPIView):
    queryset = Actor.objects.all()
    serializer_class = ActorSerializer


@api_view(['GET'])
def actor_detail(request, actor_id):
    actor_object = Actor.objects.get(pk=actor_id)
    serializer = ActorSerializer(actor_object)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def actor_create(request):
    response = {'data': {}, 'status': status.HTTP_400_BAD_REQUEST}
    serializer = ActorCreateSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        response['data'] = serializer.data
        response['status'] = status.HTTP_201_CREATED

    else:
        response['data'] = serializer.errors
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)


@api_view(['PUT', 'PATCH'])
@authentication_classes([TokenAuthentication])
@permission_classes([IsAuthenticated, DeveloperPermission])
def actor_update(request, actor_id):
    response = {'data': {}, 'status': status.HTTP_400_BAD_REQUEST}
    actor_instance = Actor.objects.get(pk=actor_id)
    if request.method == 'PUT':
        serializer = ActorSerializer(
            instance=actor_instance, data=request.data)
    else:
        serializer = ActorSerializer(
            instance=actor_instance, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        response['data'] = serializer.data
        response['status'] = status.HTTP_201_CREATED

    else:
        response['data'] = serializer.errors
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)


@api_view(['DELETE'])
def actor_delete(request, actor_id):
    Actor.objects.get(pk=actor_id).delete()
    return Response(data={'details': 'Actor deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
