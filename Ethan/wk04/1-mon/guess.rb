require 'pry'
#binding.pry

puts('What is your number guess?')
number = gets.to_i

random_num = rand(10) + 1

while number != random_num 
	puts('What is your number guess?')
	number = gets.to_i
	if number == random_num
		puts('Congratulations!!!!!!!!!')
		break
	end 
end
