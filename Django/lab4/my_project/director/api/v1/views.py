from rest_framework import status
from rest_framework.response import Response
from rest_framework.decorators import api_view, authentication_classes, permission_classes, action
from rest_framework.permissions import IsAuthenticated, AllowAny, IsAuthenticatedOrReadOnly, IsAdminUser
from rest_framework.authentication import TokenAuthentication
from rest_framework.generics import ListAPIView, UpdateAPIView, ListCreateAPIView
from director.api.v1.serializers import MovieSerializer, MovieCreateSerializer
from director.models import Movie
from .permissions import DeveloperPermission
from django.contrib.auth.decorators import permission_required


@api_view(['GET'])
def movie_home(request):
    movie_objects = Movie.objects.all()
    serializer = MovieSerializer(movie_objects, many=True)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


class MovieHome(ListAPIView):
    queryset = Movie.objects.all()
    serializer_class = MovieSerializer


@api_view(['GET'])
def movie_detail(request, movie_id):
    movie_object = Movie.objects.get(pk=movie_id)
    serializer = MovieSerializer(movie_object)
    return Response(data=serializer.data, status=status.HTTP_200_OK)


def movie_create(request):
    response = {'data': {}, 'status': status.HTTP_400_BAD_REQUEST}
    serializer = MovieCreateSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        response['data'] = serializer.data
        response['status'] = status.HTTP_201_CREATED

    else:
        response['data'] = serializer.errors
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)


@api_view(['PUT','PATCH'])
@authentication_classes([TokenAuthentication])
@permission_classes([DeveloperPermission])
def movie_update(request, movie_id):
    response = {'data': {}, 'status': status.HTTP_400_BAD_REQUEST}
    movie_instance = Movie.objects.get(pk=movie_id)
    if request.method == 'PUT':
        serializer = MovieSerializer(
            instance=movie_instance, data=request.data)
    else:
        serializer = MovieSerializer(
            instance=movie_instance, data=request.data, partial=True)

    if serializer.is_valid():
        serializer.save()
        response['data'] = serializer.data
        response['status'] = status.HTTP_201_CREATED

    else:
        response['data'] = serializer.errors
        response['status'] = status.HTTP_400_BAD_REQUEST

    return Response(**response)


@api_view(['DELETE'])
def movie_delete(request, movie_id):
    Movie.objects.get(pk=movie_id).delete()
    return Response(data={'details': 'Movie deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
