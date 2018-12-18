var behanceUserAPI = "https://www.behance.net/v2/users/rohitcg/projects?api_key=D6O8OKmcmeQpnxHguxB4HCJja4qHK7G3";

var mediumAPI = "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fmedium.com%2Ffeed%2F%40rohit_agrawal%2F";
async function get_behance_data(){
  var _reprojected_lat_lng = await $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    data: {},
    url: behanceUserAPI,
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR)
    },
    success: function (data) {
      console.log(data); // note: data is already json type, you just specify dataType: jsonp
      return data;
    }
  });
}

async function get_medium_data(){
  var _reprojected_lat_lng = await $.ajax({
    type: 'GET',
    dataType: 'jsonp',
    data: {
      rss_url: 'https://medium.com/feed/@rohit_agrawal/'
    },
    url: mediumAPI,
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR)
    },
    success: function (data) {
      console.log(data); // note: data is already json type, you just specify dataType: jsonp
      return data;
    }
  });
}

get_behance_data();
get_medium_data();

$(document).ready(function(){
  $(window).scroll(function() {
    $(".slideanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("slide");
        }
    });

    $(".opanim").each(function(){
      var pos = $(this).offset().top;

      var winTop = $(window).scrollTop();
        if (pos < winTop + 600) {
          $(this).addClass("opac");
        }
    });
  });

$("#readmore").on('click', function(event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 900, function(){

        window.location.hash = hash;
      });
    }
  });
});
