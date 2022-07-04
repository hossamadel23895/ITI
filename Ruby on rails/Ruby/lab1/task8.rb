def task8(nums, target)
  hash = {}
  nums.each_with_index { |number, index| hash[number] = index }

  nums.each_with_index do |number, index|
    difference = target - number
    if hash[difference] && hash[difference] != index
      return [index, hash[difference]]
    end
  end
end

p task8([3, 2, 4, 5, 1], 7)
