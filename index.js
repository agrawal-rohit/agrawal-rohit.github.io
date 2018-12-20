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
      $('.designs .tz-gallery').find('#gall_img1').attr('src', data.projects[0].covers.max_808);
      $('.designs .tz-gallery').find('#gall_img2').attr('src', data.projects[1].covers.max_808);
      $('.designs .tz-gallery').find('#gall_img3').attr('src', data.projects[2].covers.max_808);
      $('.designs .tz-gallery').find('#gall_img4').attr('src', data.projects[3].covers.max_808);
      $('.designs .tz-gallery').find('#gall_img5').attr('src', data.projects[4].covers.max_808);
      $('.designs .tz-gallery').find('#gall_img6').attr('src', data.projects[5].covers.max_808);

      $('.designs .tz-gallery').find('#gall_link1').attr("href", data.projects[0].url);
      $('.designs .tz-gallery').find('#gall_link2').attr("href", data.projects[1].url);
      $('.designs .tz-gallery').find('#gall_link3').attr("href", data.projects[2].url);
      $('.designs .tz-gallery').find('#gall_link4').attr("href", data.projects[3].url);
      $('.designs .tz-gallery').find('#gall_link5').attr("href", data.projects[4].url);
      $('.designs .tz-gallery').find('#gall_link6').attr("href", data.projects[5].url);
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
      description_sub = description.substring(description.indexOf("<blockquote>") + 12, description.indexOf("</blockquote>"));
      $('.blog .row').find('#art3_desc').text(description_sub);
    }
  });
}

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

    get_behance_data();
    get_medium_data();
});
