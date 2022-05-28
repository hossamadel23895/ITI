from collections import Counter

with open('problem4.txt', 'r') as fileObj:
    fileWordsList = fileObj.read().replace('\n', '').split()

top20Words = Counter(fileWordsList).most_common(20)

print(top20Words)