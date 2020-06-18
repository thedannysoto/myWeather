class SearchesController < ApplicationController
    def index
        searches = Search.all
        if searches.length < 5
            @searches = searches.slice(0, searches.length)
        else  
            @searches = searches.slice(-5, 5)
        end
        render json: @searches, status: 200
    end

    def create 
        search = Search.new 
        search.city = params[:city]
        search.zip = params[:zip]
        search.save

        @searches = Search.all
        if @searches.length < 5
            @searches = @searches.slice(0, @searches.length)
        else  
            @searches = @searches.slice(-5, 5).reverse
        end
        render json: @searches, status: 200
    end


    private 
        def search_params 
            params.require(:search).permit(:city, :zip)
        end

    
end
