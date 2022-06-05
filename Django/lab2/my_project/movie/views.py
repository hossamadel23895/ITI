from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http.response import JsonResponse
from django.contrib import messages
from .models import Movie
from .forms import MovieForm


def movie_list(request):
    movies = Movie.objects.all()
    for movie in movies:
        print(movie.actors.all())
    return render(request, 'movie/list.html', context={'movies': movies})


def movie_add(request):
    if request.method == 'GET':
        form = MovieForm()
        return render(request, template_name='movie/add.html', context={'form': form})
    elif request.method == 'POST':
        form = MovieForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect(reverse('movie:list'))


def movie_detail(request, **kwargs):
    movie_index = kwargs.get('movie_index')
    movie = Movie.objects.get(id=movie_index)
    return render(request, 'movie/details.html', context={'movie': movie, 'movie_index': movie_index})


def movie_edit(request, **kwargs):
    movie_index = kwargs.get('movie_index')
    movie = Movie.objects.get(id=movie_index)
    if request.method == 'GET':
        form = MovieForm(instance=movie)
        return render(request, template_name='movie/edit.html', context={'form': form, 'movie': movie})
    elif request.method == 'POST':
        form = MovieForm(request.POST, instance=movie)
        if form.is_valid():
            form.save()
            return redirect(reverse('movie:list'))


def movie_delete(request, **kwargs):
    movie_index = kwargs.get('movie_index')
    movie = Movie.objects.get(id=movie_index)
    movie.delete()
    return redirect(reverse('movie:list'))
