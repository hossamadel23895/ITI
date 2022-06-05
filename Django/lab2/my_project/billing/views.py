from django.shortcuts import render, HttpResponse, redirect, reverse
from django.http.response import JsonResponse
from django.contrib import messages
from .models import Billing

billings = Billing.objects.all()


def billing_list(request):
    return render(request, 'billing/list.html', context={'billings': billings})


def billing_add(request):
    if request.method == 'GET':
        return render(request, 'billing/add.html')
    elif request.method == 'POST':
        new_task_index = list(billings)[-1]+1
        new_task_name = request.POST.get('task_name')
        new_task_notes = request.POST.get('task_notes')
        billings[new_task_index] = {"name": new_task_name,
                                    "notes": new_task_notes, "done": False}
        return redirect(reverse('billing:list'))


def billing_detail(request, **kwargs):
    billing_index = kwargs.get('billing_index')
    billing = billings[billing_index]
    return render(request, 'billing/details.html', context={'billing': billing, 'billing_index': billing_index})


def billing_edit(request, **kwargs):
    if request.method == 'GET':
        billing_index = kwargs.get('billing_index')
        billing = billings[billing_index]
        return render(request, 'billing/edit.html', context={'billing': billing, 'billing_index': billing_index})
    elif request.method == 'POST':
        edited_task_index = int(request.POST.get('task_index'))
        edited_task_name = request.POST.get('task_name')
        edited_task_notes = request.POST.get('task_notes')
        billings[edited_task_index] = {"name": edited_task_name,
                                       "notes": edited_task_notes, "done": False}
        return redirect(reverse('billing:list'))


def billing_delete(request, **kwargs):
    billing_index = kwargs.get('billing_index')
    for index, billing in billings.items():
        if index == billing_index:
            if billing['done'] == True:
                billings.pop(billing_index)
            else:
                messages.error(
                    request, "Can't delete a task that is not marked done!")
            break

    return redirect(reverse('billing:list'))


def billing_done(request, **kwargs):
    billing_index = kwargs.get('billing_index')
    billing = billings[billing_index]
    billing['done'] = True if billing['done'] == False else False
    return redirect(reverse('billing:list'))
