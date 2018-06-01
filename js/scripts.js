$(document).ready(function(){
  $("#quiz").submit(function(event){
    var team = parsInt($("input:radio[name=teamChoice]:checked").val());
    var boss = parsInt($("input:radio[name=bossChoice]:checked").val());
    var life = parsInt($("input:radio[name=lifeChoice]:checked").val());
    var room = parsInt($("input:radio[name=roomChoice]:checked").val());
    var city = parsInt($("input:radio[name=cityChoice]:checked").val());
    var res = team + boss + life + room + city;

    if(res <=8) {
      $("Show").show()
    } else if (res <= 11){
      $("Show").show()
    } else {
      $("Show").show()
    }

    event.preventDefault();
  });
});
