$(function() {
  var handleWeatherResponse = function(data) {
    console.log(data);

    // Put your code here to change the "markup" variable.
    // Don't change any other code in this file. You will be sad.

    var markup = "The 3-day forecast is: " + data.daily.summary;

      var temp = "The current conditions today are " + data.currently.temperature + " and " + data.currently.icon;

      var coord = "longitude:" + data.longitude + "      " + "latitude:" + data.latitude






    // End of your code

    $('.weather-report').html(markup);
    $('.weather-temp').html(temp);
    $('.weather-coord').html(coord);

  }
  $('a.get-the-weather').on('click', function(event) {
    event.preventDefault();
    $.ajax({
      type: 'GET',
      url: 'https://api.forecast.io/forecast/6dbe98374cc5b8f9ea63d5ec73de9c04/42.056459,-87.675267?callback=?',
      dataType: 'jsonp',
      contentType: "application/json",
      success: handleWeatherResponse
    });
  });
});
