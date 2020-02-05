var behanceUserAPI = "https://www.behance.net/v2/users/agrawal-rohit/projects?api_key=D6O8OKmcmeQpnxHguxB4HCJja4qHK7G3";
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
       // note: data is already json type, you just specify dataType: jsonp
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

async function get_github_data(){
  var _reprojected_lat_lng = await $.ajax({
    type: 'GET',
    dataType: 'json',
    headers: {
      "Authorization": "token e819398a6737298cc2f148f70d886da21495deea"
    },
    url: "https://api.github.com/users/agrawal-rohit/repos",
    error: function (jqXHR, textStatus, errorThrown) {
      console.log(jqXHR)
    },
    success: function (repos) {
        var repo_list = [];
        $.each(repos, function(index, repo){
            repo_list.push(repo);
        });
        
        var counter = 0
        $.each(repo_list, function(index, repo){
            var description = repo_list[repo_list.length - counter - 1].description
            var subtitle = description.substring(0, description.indexOf('.'));
            var img = description.substring(description.indexOf('.') + 1, description.length);
            var url = repo_list[repo_list.length - counter - 1].html_url
            var name = repo_list[repo_list.length - counter - 1].name.replace(/-/g, " ");
            
           if(counter%2 == 0){
                if(counter == 0){
                    var new_card = "<a class='projectlink' href='' target='_blank'><div class='col-xs-12 col-md-6'><div class='card slideanim' id='rightcard'><div class='cardimg'></div><div style='margin-left: 20px;margin-top: 15px;'><div class='entry-title'><h4 class='card-title'>" + name + "</h4> <br><h5 class='card-subtitle'>" + subtitle + "</h5></div></div></div></div></a><br><br><br><br>";
                $("#repos").append(new_card);
                    $("#repos a.projectlink").attr("href", url);
                $("#repos a.projectlink div.cardimg").css("background-image","url('" + img +"')");
                }
                else{
                    var new_card = '<a class="projectlink" href="" target="_blank"><div class="col-xs-12 col-md-6" id="probcard" style="margin-left: 0px;">            <div class="card slideanim" id="card3"><div class="cardimg"></div><div style="margin-left: 20px;margin-top: 15px;"><div class="entry-title"><h4 class="card-title">' + name + '</h4><br><h5 class="card-subtitle">' + subtitle + '</h5></div></div></div></div></a';
                $("#repos").append(new_card);
                    $("#repos a:last-child").attr("href", url);
                $("#repos a:last-child div.cardimg").css("background-image","url('" + img + "')");
                }
            }
            
            else{
                if(counter == 1){
                    var new_card = '<a class="projectlink" target="_blank"><div class="col-xs-12 col-md-6"><div class="card slideanim" id="rightcard">            <div class="cardimg" style="background-image: url("projects/icons/captioning.gif"); background-position: 0px 40%;"></div><div style="margin-left: 20px;margin-top: 15px;"><div class="entry-title"><h4 class="card-title" style="font-family: "Montserrat Light"; font-size: 21px;">'+ name + '</h4> <br><h5 class="card-subtitle">' + subtitle + '</h5></div></div></div></div></a>';
                $("#repos").append(new_card);
                    $("#repos a:last-child").attr("href",url);
                $("#repos a:last-child div.cardimg").css("background-image","url('" + img + "')");
                }
                
                else{
                var new_card = '<a class="projectlink" target="_blank"><div class="col-xs-12 col-md-6"><div class="card slideanim">            <div class="cardimg" style="background-image: url("projects/icons/captioning.gif"); background-position: 0px 40%;"></div><div style="margin-left: 20px;margin-top: 15px;"><div class="entry-title"><h4 class="card-title" style="font-family: "Montserrat Light"; font-size: 21px;">'+ name + '</h4> <br><h5 class="card-subtitle">' + subtitle + '</h5></div></div></div></div></a>';
                $("#repos").append(new_card);    
                    $("#repos a:last-child").attr("href",url);
                $("#repos a:last-child div.cardimg").css("background-image","url('" + img + "')");
                }
                
                
            }
            
            counter++;
            
            if(counter == 5){
                return false;
            } 
        });
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
      description_sub = description.substring(description.indexOf("<p>") + 3, description.indexOf("</p>"));
      $('.blog .row').find('#art3_desc').text(description_sub);
    }
  });
}

$(document).ready(function(){
  
  (function ($) {
        		//  TESTIMONIALS CAROUSEL HOOK
		        $('#customers-testimonials').owlCarousel({
		            loop: true,
		            center: true,
		            items: 3,
		            margin: 0,
		            autoplay: true,
		            dots:true,
		            autoplayTimeout: 8500,
		            smartSpeed: 450,
		            responsive: {
		              0: {
		                items: 1
		              },
		              768: {
		                items: 2
		              },
		              1170: {
		                items: 3
		              }
		            }
		        });
  })(jQuery);

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

    $("#hire").on('click', function(event) {
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
    get_github_data()
    get_medium_data();
});
