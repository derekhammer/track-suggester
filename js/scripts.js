$(document).ready(function(){
  $("#quiz").submit(function(event){
    var team = parseInt($("input:radio[name=teamChoice]:checked").val());
    var boss = parseInt($("input:radio[name=bossChoice]:checked").val());
    var life = parseInt($("input:radio[name=lifeChoice]:checked").val());
    var room = parseInt($("input:radio[name=roomChoice]:checked").val());
    var city = parseInt($("input:radio[name=cityChoice]:checked").val());
    var res = team + boss + life + room + city;

    if(res <=8) {
      $("#rrShow").show()
    } else if (res <= 11) {
      $("#cssShow").show()
    } else {
      $("#csharpShow").show()
    }

  var nameInput = $("input#name").val();
  $(".name").text(nameInput);

    event.preventDefault();
  });
});
