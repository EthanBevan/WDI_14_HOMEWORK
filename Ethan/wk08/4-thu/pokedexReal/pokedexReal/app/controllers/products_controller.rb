class ProductsController < ApplicationController

	def new

	end

	def show
		@product = Product.find(params[:id])
	end

	def create
		product = Product.new
		product.species = params[:species]
		product.nickname = params[:nickname]
		product.level = params[:level]
		product.image = params[:image]



		if product.save
			redirect_to '/'
		else 
			render :new
		end
	end

end
