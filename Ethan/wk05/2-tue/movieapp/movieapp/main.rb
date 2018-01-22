     
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


#moviedatabase
get '/moviedatabase_directory' do
	@movieinfo = Dish.all
	erb :moviedatabase_directory
end

#moviedirectory
get '/moviedirectory' do
	@moviedirectorysearch = HTTParty.get('http://omdbapi.com/?s=' + params[:movie] + '&apikey=2f6435d9')
	erb :moviedirectory
end


#movie
get '/movie' do
@moviesearch = HTTParty.get('http://omdbapi.com/?t='+params[:movie]+'&apikey=2f6435d9')
erb :movie





end
