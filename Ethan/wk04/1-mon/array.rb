require 'pry'


days_of_the_week = ['Monday' 'Tuesday' 'Wednesday' 'Thursday' 'Friday' 'Saturday' 'Sunday']


days_of_the_week.unshift(days_of_the_week.pop)

days_of_the_week = [ 
	
	['Monday' 'Tuesday' 'Wednesday', 'Thursday' 'Friday'],

	['Saturday' 'Sunday'],

]

days_of_the_week[1].pop

days_of_the_week.sort()




binding.pry









