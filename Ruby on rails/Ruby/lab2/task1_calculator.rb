class Object
  def is_number?
    to_f.to_s == to_s || to_i.to_s == to_s
  end
end

class Calculator
  def calc
    puts "Welcome to calculator app"
    puts ""
    puts "Enter your first number : "
    num1 = gets.chomp
    puts "Enter an operator (+, -, *, /) : "
    operator = gets.chomp
    puts "Enter your second number : "
    num2 = gets.chomp

    if num1.is_number? || num2.is_number?
      num1 = num1.to_f
      num2 = num2.to_f
      case operator
      when "+"
        puts "#{num1} + #{num2} = #{num1 + num2}"
      when "-"
        puts "#{num1} - #{num2} = #{num1 - num2}"
      when "*"
        puts "#{num1} * #{num2} = #{num1 * num2}"
      when "/"
        if num2 == 0
          puts "you can't devide by zero"
        else
          div = num1.div(num2)
          puts "#{num1} / #{num2} = #{div.to_f}"
        end
      else
        puts "Invalid operator, Please enter a valid one from the options"
      end
    else
      puts "Only numbers are allowed, please enter numbers only"
    end
  end
end

calc = Calculator.new
puts calc.calc
