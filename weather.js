const apiKey = "7Ggx1BxQZWMsGZKBhypUrlLcvFbXAc6j";

const getCityDetails = async (city) => {
    const baseUrl = "http://dataservice.accuweather.com/locations/v1/cities/search";
    const queryParam = `?apikey=${apiKey}&q=${city}`;

    const response = await fetch(baseUrl + queryParam);
    const details = await response.json();

    return details[0];
};

const getWeatherDetailsByCity = async (cityId) => {
    const baseUrl = "http://dataservice.accuweather.com/currentconditions/v1/";
    const query = `${cityId}?apikey=${apiKey}`;

    const response = await fetch(baseUrl + query);
    const details = await response.json();

    return details[0];
};