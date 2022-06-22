def capsulate_string(str)
    last_ch= str.length()-1 
    print  str.split('')[last_ch] + str + str.split('')[last_ch], "\n"
end 
capsulate_string('abc')
