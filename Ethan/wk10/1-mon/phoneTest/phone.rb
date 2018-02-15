	class Phone

	end

	def intitialize (number)
		# @numb = number
	end


#split through ("(123) 456-7890") remove brackets and return "123456789" so that it equals true
	def number 
		@number = @number.split("")
		if 
			# @numb.map{|element| element[/\d+/]}

			@numb = number.cut(0,1);
			@numb = number.cut(3,5);
	end

end 

	# def initialize (number)
	# 	@numb = number
	# end


	# def number
	# end


	# def test_string_conversion
	#   assert_equal 1, "1".to_i
	# end