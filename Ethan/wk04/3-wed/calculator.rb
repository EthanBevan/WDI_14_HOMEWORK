#Calculator

require 'pry'

number1 = []
number2 = []
operations = []



puts('Enter First Number?')
number1 = gets.chomp

puts('Enter operations?')
operations = gets.chomp

puts('Enter Second Number?')
number2 = gets.chomp


if operations == '+'
resultsPlus = number1 + number2
return resultsPlus
elsif (operations == '-')
resultsMinus = (number1 - number2)
return resultsMinus
elsif (operations == '*')
resultsTimes = (number1 * number2)
return resultsTimes
elsif (operations == '/')
resultsDivide = (number1 / number2)
return resultsDivide


end



binding.pry

