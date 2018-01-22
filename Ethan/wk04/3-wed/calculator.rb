#Calculator

require 'pry'

loop do

puts('Enter First Number?')
number1 = gets.chomp.to_i

puts('Enter operations?')
operations = gets.chomp

puts('Enter Second Number?')
number2 = gets.chomp.to_i


if operations == '+'
resultsPlus = number1 + number2
puts "Answer = #{resultsPlus}"

elsif (operations == '-')
resultsMinus = (number1 - number2)
puts "Answer = #{resultsMinus}"

elsif (operations == '*')
resultsTimes = (number1 * number2)
puts "Answer = #{resultsTimes}"

elsif (operations == '/')
resultsDivide = (number1 / number2)
puts "Answer = #{resultsDivide}"


end

end


binding.pry

