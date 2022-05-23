import math


def absoluteDistance(a1, b1, a2, b2):
    return math.sqrt((a2-a1)**2+(b2-b1)**2)


x1 = int(input('Please Enter X-coordinate of your first point: '))
y1 = int(input('Please Enter Y-coordinate of your second point: '))
x2 = int(input('Please Enter X-coordinate of your first point: '))
y2 = int(input('Please Enter Y-coordinate of your second point: '))

result = round(absoluteDistance(x1, y1, x2, y2), 2)

print(
    f"The Absolute Distance Between those 2 points is : {result}")
