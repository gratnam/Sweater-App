
    //array of city coordinates
    var cities = {
      "chicago" : {coords: {latitude: 41.879003, longitude: -87.63675}},
      "new york" : {coords: {latitude:40.672060, longitude:-73.983898}},
      "los angeles" : {coords: {latitude:34.101422, longitude:-118.341224}},
      "san francisco" : {coords: {latitude:37.788531, longitude:-122.407237}},
      "miami" : {coords: {latitude:25.790176, longitude:-80.140133}}

    }

    //function for ajax request
    var loadWeather = function(cityCoords){

      var latlng = cityCoords.coords.latitude + "," + cityCoords.coords.longitude;
      var apiURL = "https://api.forecast.io/forecast/9123b58e7fc6aa24b65630193e1153a9/" + latlng ;

      $.ajax({
        url: apiURL,
        jsonpCallback: "jsonCallback",
        contenType: "application/json",
        dataType: "jsonp",
        success: function(json){
          console.log(json.currently.temperature);

          $("#current_temp").html(json.currently.temperature + " &#176; F");
          $("#summary").html(json.currently.summary);

        },
        error: function(err){
          console.log(err.message);
        }
      });

    };

    //
    function loadCity(city){
      $("#location").html(city);
      loadWeather(cities[city.toLowerCase()]);
    };

    $(document).ready(function(){
      loadCity("San Francisco");

      $("a.city").bind("click", function(){
        loadCity($(this).html());
      });
    });


