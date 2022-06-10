from operator import truediv
from rest_framework.permissions import BasePermission


class DeveloperPermission(BasePermission):
    def has_permissions(self, request, view):
        print('inside custom permission')
        for grp in request.user.groups.all():
            if request.user.groups.filter(name='developer').exists():
                return True
        return False
