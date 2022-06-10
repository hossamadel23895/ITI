from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http.response import JsonResponse
from django.contrib import messages

todos = {1: {"name": "Eat Breakfast",
         "notes": "Eat yesterday prepared meal", "done": False},
         2: {"name": "Have your coffee",
         "notes": "Preferably after breakfast", "done": False},
         3: {"name": "Dress up",
         "notes": "Use the outfit prepared from yesterday", "done": False}}


def todo_list(request):
    print(request)
    return render(request, 'todo/list.html', context={'todos': todos})


def todo_add(request):
    if request.method == 'GET':
        return render(request, 'todo/add.html')
    elif request.method == 'POST':
        new_task_index = list(todos)[-1]+1
        new_task_name = request.POST.get('task_name')
        new_task_notes = request.POST.get('task_notes')
        todos[new_task_index] = {"name": new_task_name,
                                 "notes": new_task_notes, "done": False}
        return redirect(reverse('todo:list'))


def todo_detail(request, **kwargs):
    todo_index = kwargs.get('todo_index')
    todo = todos[todo_index]
    return render(request, 'todo/details.html', context={'todo': todo, 'todo_index': todo_index})


def todo_edit(request, **kwargs):
    if request.method == 'GET':
        todo_index = kwargs.get('todo_index')
        todo = todos[todo_index]
        return render(request, 'todo/edit.html', context={'todo': todo, 'todo_index': todo_index})
    elif request.method == 'POST':
        edited_task_index = int(request.POST.get('task_index'))
        edited_task_name = request.POST.get('task_name')
        edited_task_notes = request.POST.get('task_notes')
        todos[edited_task_index] = {"name": edited_task_name,
                                    "notes": edited_task_notes, "done": False}
        return redirect(reverse('todo:list'))


def todo_delete(request, **kwargs):
    todo_index = kwargs.get('todo_index')
    for index, todo in todos.items():
        if index == todo_index:
            if todo['done'] == True:
                todos.pop(todo_index)
            else:
                messages.error(
                    request, "Can't delete a task that is not marked done!")
            break

    return redirect(reverse('todo:list'))


def todo_done(request, **kwargs):
    todo_index = kwargs.get('todo_index')
    todo = todos[todo_index]
    todo['done'] = True if todo['done'] == False else False
    return redirect(reverse('todo:list'))
