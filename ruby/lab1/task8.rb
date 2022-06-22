def task8(nums, target)
    for i in 0..nums.length-2
        for j in i+1..nums.length-1
            if ((nums[i]+nums[j]) == target)
                return [i,j]
            end
        end
    end
    return -1
end
p task8([3,2,4],7)