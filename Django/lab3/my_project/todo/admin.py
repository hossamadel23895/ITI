from django.contrib import admin
from .models import Todo, Task

class TaskInLine(admin.TabularInline):
    model = Task
    extra = 1
    
@admin.register(Todo)
class TodoAdmin(admin.ModelAdmin):
    list_display = ['name', 'priority',
                    'is_done', 'creation_time', 'update_time', 'my_custom_function_field']
    search_fields = ['name', 'notes']
    list_filter = ('priority',)
    fieldsets = (
        ('Main Section', {'fields': ['name', 'priority', 'is_done']}),
        ('Dates Section', {'fields': ['creation_time', 'update_time']}),
        ('Notes', {'fields': ['notes', 'my_custom_function_field']})
    )
    readonly_fields = ['creation_time', 'update_time', 'my_custom_function_field']
    inlines = [TaskInLine]

    def my_custom_function_field(self, obj):
        task_names = ','.join([t_obj.name for t_obj in obj.task_set.all()])
        return f"Tasks Names: {task_names}"

    my_custom_function_field.short_description='My Function'

    def has_delete_permission(self, request, obj=None):
        if request.user.is_superuser:
            return True
        else:
            return False

class TaskAdmin(admin.ModelAdmin):
    list_filter = ('todo__is_done','todo__priority')

admin.site.register(Task, TaskAdmin)


