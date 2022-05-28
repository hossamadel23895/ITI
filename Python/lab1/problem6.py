def characterLocator(string, searchChar):
    indexesArray = []
    for index, char in enumerate(string):
        if char == searchChar:
            indexesArray.append(index)
    return indexesArray


userString = input("Enter Your word : ")
userSearchChar = input("Enter The Character you want to search for : ")

print(
    f"The Character you searched for was found in indexes : {characterLocator(userString, userSearchChar)}")
