def balance_brackets(s)
    n=-1
    while s.length != n
        n=s.length
        s=s.sub('()','')
        s=s.sub('[]','')
        s=s.sub('{}','')
        if s.length==0
            return 'Yes'
        end
    end
    return 'NO'
end
puts balance_brackets("{[()]}")
puts balance_brackets("{[(])}")
puts balance_brackets("{{[[(())]]}}")