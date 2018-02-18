class Phone

	def initialize (number)
		@numb = number
	end

# 1.
	def number 
		newNumber = @numb.delete "()"

		newNumberTwo = newNumber.delete "-"

		newNumberThree = newNumberTwo.delete " "
	end

# 2.
	def number
	newNumber = @numb.delete "."
	end

#3.
	def number
	@numb[1..-1]
	end

#4
	def number
	@numb[0] = '0000000000'
	end

#5 
	def number
	@numb[0] = '0000000000'
	end

#6 
	def area_code 
	@numb[0..2]
	end

#7 
	def to_s
	newNumber = @numb.insert(0, '(')

	newNumberTwo = newNumber.insert(4, ')')

	newNumberThree = newNumberTwo.insert(8, '-')

	newNumberFour = newNumberThree.insert(5, ' ')

	end

end 

