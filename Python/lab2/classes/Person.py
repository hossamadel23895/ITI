
class Person:
    sleepMood = "Unknown"
    healthRate = 0

    def __init__(self, fullName, money, sleepHours, mealsAmount):
        self.fullName = fullName
        self.money = money
        self.setSleepMood(sleepHours)
        if mealsAmount not in range(1, 4):
            raise ValueError("Meals amount must be from 1 to 3 meals!")
        self.setHealthRate(mealsAmount)

    def setSleepMood(self, hours):
        if hours == 7:
            self.sleepMood = "Happy"
        elif hours > 7:
            self.sleepMood = "Lazy"
        elif hours < 7:
            self.sleepMood = "Tired"

    def setHealthRate(self, mealsAmount):
        if mealsAmount == 3:
            self.healthRate = 100
        elif mealsAmount == 2:
            self.healthRate = 75
        elif mealsAmount == 1:
            self.healthRate = 50

    def buy(self, itemsAmount):
        self.money -= itemsAmount*10
