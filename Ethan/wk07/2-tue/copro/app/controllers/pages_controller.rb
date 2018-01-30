class PagesController < ApplicationController
	def home
		@project = Project.all
	end

	def details
		@project = Project.all
	end
end