import re
from classes.Person import Person

from classes.Person import Person


class Employee(Person):
    id = None
    fullName = None
    email = None
    salary = None
    isManager = None
    money = None
    workHours = None
    sleepHours = None
    mealsAmount = None
    workMood = None

    emailNo = 1
    regex = re.compile(
        r'([A-Za-z0-9]+[.-_])*[A-Za-z0-9]+@[A-Za-z0-9-]+(\.[A-Z|a-z]{2,})+')

    def __init__(self, id, fullName, email, salary, isManager, money, workHours, sleepHours, mealsAmount):
        super().__init__(fullName, money, sleepHours, mealsAmount)
        self.id = id
        self.email = email
        self.workHours = workHours
        self.sleepHours = sleepHours
        self.mealsAmount = mealsAmount

        if not re.fullmatch(self.regex, email):
            raise ValueError("Email is not valid email format!")
        self.setWorkMood(workHours)
        self.salary = salary
        if salary < 1000:
            raise ValueError("Salary must be higher than 1000!")
        self.isManager = isManager

    def setWorkMood(self, hours):
        if hours == 8:
            self.workMood = "Happy"
        elif hours > 8:
            self.workMood = "Tired"
        elif hours < 8:
            self.workMood = "Lazy"

    def sendEmail(self, to, subject, body, receiverName):
        f = open(f"email{self.emailNo}.txt", "w")
        f.write(f"From : {self.fullName}\n")
        f.write(f"To : {to}\n")
        f.write(f"Subject : {subject}\n")
        f.write(f"Body : {body}\n")
        f.write(f"Receiver Name : {receiverName}\n")
        f.close()
        self.emailNo += 1
