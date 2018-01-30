class DishesController < ApplicationController

	def new
		@dishes = Dish.all
	end

	def index
			@dishes = Dish.all
		end


		def show 
			@dish = Dish.find_by(id: "#{params[:id]}")
		end

	def destroy
		@dish = Dish.find_by(id: "#{params[:id]}")
		if @dish.destroy
			redirect_to '/dishes'
		else
			render :show
		end

		def create 
			dish = Dish.new
			dish.name = params[:name]
			dish.save
			redirect_to '/dishes'
		end

	def edit
		@dish = Dish.find_by(id: "#{params[:id]}")
	end

end



end

