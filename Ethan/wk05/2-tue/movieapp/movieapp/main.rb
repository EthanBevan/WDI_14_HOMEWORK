     
require 'sinatra'

require 'sinatra/reloader'

require 'httparty'

	#home
	get '/' do
	  erb :index
	end

	#about
	get '/about' do
		erb :about
	end




	# #moviedatabase
	# get '/moviedatabase_directory' do
	# 	@movieinfo = Dish.all
	# 	erb :moviedatabase_directory
	# end

	#moviedirectory
	# This is all the titles in button format.
	get '/moviedirectory' do
		@moviedirectorysearch = HTTParty.get('http://omdbapi.com/?s=' + params[:movie] + '&apikey=2f6435d9')
		erb :moviedirectory
	end


#get from database
	get '/movie' do
	  # title = params[:title]
	  # @movies = Movie.all
	  #object lookup
	  lookup_data = Movie.find_by(name_of_title_clicked: name_of_title_clicked)
	  if lookup_data != nil
	  #if title matches database title
	  #return sql data
	redirect_to '/moviedatabase_directory'

	    # @name_of_title_clicked = lookup_data[:name_of_title_clicked]
	    # @year = lookup_data[:year]
	    # @plot = lookup_data[:plot]
	    # @poster = lookup_data[:poster]

	  else
	  #else httparty
	#movie
	# This is all the information of the one title, inluding year actors plot etc. 
	# this is the one to save to database. 
	@moviesearch = HTTParty.get('http://omdbapi.com/?t='+params[:movie]+'&apikey=2f6435d9')
	erb :movie


	end


	# save to db
	    movie = Movie.create(name_of_title_clicked: @name_of_title_clickedde, year: @year, plot: @plot, poster: @poster)
	  end

	  erb :movie
	end

	end
























