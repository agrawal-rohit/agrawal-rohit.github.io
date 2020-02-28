async function get_github_data(){
  var _reprojected_lat_lng = await $.ajax({
    type: 'GET',
    dataType: 'json',
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
            
            if(repo_list[repo_list.length - counter - 1].name != "agrawal-rohit.github.io"){
            var name = repo_list[repo_list.length - counter - 1].name.replace(/-/g, " ");
            }
            else{
                var name = "Personal Website";
            }
            
            console.log(counter);
            
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
        });
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

    get_github_data()
});
