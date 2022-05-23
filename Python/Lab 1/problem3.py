def splitWords(word1, word2):
    word1_1st_half = word1[0:round(len(word1)/2)]
    word1_2nd_half = word1[round(len(word1)/2):len(word1)]
    word2_1st_half = word2[0:round(len(word2)/2)]
    word2_2nd_half = word2[round(len(word2)/2):len(word2)]
    return (f"({word1_1st_half}{word2_1st_half}) + ({word1_2nd_half}{word2_2nd_half})")


user_word1 = input("Please Enter Your first word : ")
user_word2 = input("Please Enter Your second word : ")

print(f"Your New Splitted String is : {splitWords(user_word1,user_word2)}")
