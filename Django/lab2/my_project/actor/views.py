from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http.response import JsonResponse
from django.contrib import messages
from .models import Actor
from .forms import ActorForm


def actor_list(request):
    actors = Actor.objects.all()
    return render(request, 'actor/list.html', context={'actors': actors})


def actor_add(request):
    if request.method == 'GET':
        form = ActorForm()
        return render(request, template_name='actor/add.html', context={'form': form})
    elif request.method == 'POST':
        form = ActorForm(request.POST or None, files=request.FILES)
        if form.is_valid():
            form.save()
            return redirect(reverse('actor:list'))


def actor_detail(request, **kwargs):
    actor_index = kwargs.get('actor_index')
    actor = Actor.objects.get(id=actor_index)
    return render(request, 'actor/details.html', context={'actor': actor, 'actor_index': actor_index})


def actor_edit(request, **kwargs):
    actor_index = kwargs.get('actor_index')
    actor = Actor.objects.get(id=actor_index)
    if request.method == 'GET':
        form = ActorForm(instance=actor)
        return render(request, template_name='actor/edit.html', context={'form': form, 'actor': actor})
    elif request.method == 'POST':
        form = ActorForm(request.POST or None,
                         files=request.FILES, instance=actor)
        if form.is_valid():
            form.save()
            return redirect(reverse('actor:list'))


def actor_delete(request, **kwargs):
    actor_index = kwargs.get('actor_index')
    actor = Actor.objects.get(id=actor_index)
    actor.delete()
    return redirect(reverse('actor:list'))
