from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http.response import JsonResponse
from django.contrib import messages
from .models import Director
from .forms import DirectorForm


def director_list(request):
    directors = Director.objects.all()
    return render(request, 'director/list.html', context={'directors': directors})


def director_add(request):
    if request.method == 'GET':
        form = DirectorForm()
        return render(request, template_name='director/add.html', context={'form': form})
    elif request.method == 'POST':
        form = DirectorForm(request.POST or None, files=request.FILES)
        if form.is_valid():
            form.save()
            return redirect(reverse('director:list'))


def director_detail(request, **kwargs):
    director_index = kwargs.get('director_index')
    director = Director.objects.get(id=director_index)
    return render(request, 'director/details.html', context={'director': director, 'director_index': director_index})


def director_edit(request, **kwargs):
    director_index = kwargs.get('director_index')
    director = Director.objects.get(id=director_index)
    if request.method == 'GET':
        form = DirectorForm(instance=director)
        return render(request, template_name='director/edit.html', context={'form': form, 'director': director})
    elif request.method == 'POST':
        form = DirectorForm(request.POST or None,
                         files=request.FILES, instance=director)
        if form.is_valid():
            form.save()
            return redirect(reverse('director:list'))


def director_delete(request, **kwargs):
    director_index = kwargs.get('director_index')
    director = Director.objects.get(id=director_index)
    director.delete()
    return redirect(reverse('director:list'))
