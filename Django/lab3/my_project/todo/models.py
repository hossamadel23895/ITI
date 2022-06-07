from django.db import models


class Todo(models.Model):
    name = models.CharField(verbose_name="Todo Name", max_length=100, unique=True)
    priority = models.IntegerField(verbose_name="Todo Priority", default=1)
    todo_date = models.DateField(verbose_name="Date", default='2022-01-01')
    is_done = models.BooleanField(default=False)
    notes = models.TextField(default='')
    creation_time = models.DateTimeField(auto_now_add=True)
    update_time = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = 'Todo'
        verbose_name_plural = 'Todos'
        ordering = ('-id',)

class Task(models.Model):
    name = models.CharField(verbose_name="Task Name", max_length=100)
    todo = models.ForeignKey('todo',on_delete=models.CASCADE, null=True)

    def __str__(self):
        return f"Task {self.id} For Todo : {self.todo.name}"