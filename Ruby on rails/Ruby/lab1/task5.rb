def find_leap_year(year)
    if((year%4)==0)
        if((year%100 !=0))
            return "#{year} is leap year"
        elsif((year%400) ==0)
            return "#{year} is leap year"
        end
    end
    return "#{year} is not leap year" 
end
puts find_leap_year(2012) 
puts find_leap_year(2022) 
puts find_leap_year(2000) 
puts find_leap_year(2008)
