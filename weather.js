class Weather {
    constructor() {
        this.apiKey = "UO9EYGy8TaEbQNysesc64Pr0ftPAyZYk";
        this.cityUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
        this.weatherUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    }

    getCityDetails = async (city) => {
        const queryParam = `?apikey=${this.apiKey}&q=${city}`;
    
        const response = await fetch(this.cityUrl + queryParam);
        const details = await response.json();
    
        return details[0];
    };

    getWeatherDetailsByCity = async (cityId) => {
        const queryParam = `${cityId}?apikey=${this.apiKey}`;
    
        const response = await fetch(this.weatherUrl + queryParam);
        const details = await response.json();
    
        return details[0];
    };

    getWeatherAndCityDeatils = async (city) => {
        const cityDetails = await this.getCityDetails(city);
        const weatherDetails = await this.getWeatherDetailsByCity(cityDetails.Key);
    
        return {cityDetails, weatherDetails};
    };
}