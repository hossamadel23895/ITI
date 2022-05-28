
userList = input('Please Enter your list elements: ').split()


def eliminateDuplications(duplicatedList):
    newList = list(set(duplicatedList))
    return newList


print(
    f"Your list after duplication filtration : {eliminateDuplications(userList)}")
