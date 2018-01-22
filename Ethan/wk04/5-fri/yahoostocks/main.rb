require 'stock_quote'
require 'sinatra'
require 'sinatra/reloader'

require 'pry'



get '/' do
stock = StockQuote::Stock.quote("#{params[:stock_code]}")
# binding.pry

 @symb = stock.symbol
 @price = stock.l

	erb :index
end


# city = params['city']

# 	@res = Weather.lookup_by_location('#{city}, Australia', Weather::Units::CELSIUS)
# 	# @temperature = response.condition.temp
# 	erb(:index)
# end


#do not call a variable @response


