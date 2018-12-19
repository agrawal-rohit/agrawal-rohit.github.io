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
      height = $('.blog .row').find('#art1_link blogposts').height();
      console.log(height);

      $('.blog .row').find('#art1_img').css("background-image", 'url(' + data.items[0].thumbnail + ')');
      $('.blog .row').find('#art1_link').attr("href", data.items[0].link);
      $('.blog .row').find('#art1_title').text(data.items[0].title);
      description = data.items[0].description
      description_sub = description.substring(description.indexOf("<p>") + 3, description.indexOf("</p>"));
      $('.blog .row').find('#art1_desc').text(description_sub);

      $('.blog .row').find('#art2_img').css("background-image", 'url(' + data.items[1].thumbnail + ')');
      $('.blog .row').find('#art2_link').attr("href", data.items[1].link);
      $('.blog .row').find('#art2_title').text(data.items[1].title);
      description = data.items[1].description
      description_sub = description.substring(description.indexOf("<p>") + 3, description.indexOf("</p>"));
      $('.blog .row').find('#art2_desc').text(description_sub);

      $('.blog .row').find('#art3_img').css("background-image", 'url(' + data.items[2].thumbnail + ')');
      $('.blog .row').find('#art3_link').attr("href", data.items[2].link);
      $('.blog .row').find('#art3_title').text(data.items[2].title);
      description = data.items[2].description
      description_sub = description.substring(description.indexOf("<p>") + 3, description.indexOf("</p>"));
      $('.blog .row').find('#art3_desc').text(description_sub);
    }
  });
}

$(document).ready(function(){
  $(window).scroll(function() {
    height = $('.blog .row').find('#art1_link').height();
    console.log(height);

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

    get_behance_data();
    get_medium_data();
});
