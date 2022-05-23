def removeVowels(string):
    vowels = ["a", "e", "i", "o", "u"]
    newString = ""
    for char in string:
        if char not in vowels:
            newString += char
    return newString

userString = input("Pleas Enter your word to clear from vowels : ")

print(removeVowels(userString))