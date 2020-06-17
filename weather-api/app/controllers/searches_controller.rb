class SearchesController < ApplicationController
    def index
        @searches = Search.all

        render json: @searches, status: 200
    end

    def show 
        @search = Search.find(params[:id])

        render json: @search, status: 200
    end

    def create 
        @search = Search.create(search_params)
        
        render json: @search, status: 200
    end

    def update 
        @search = Search.find(params[:id])
        @search.update(search_params)

        render json: @search, status: 200

    end


    private 
        def search_params 
            params.require(:search).permit(:city, :zip)
        end

    
end
