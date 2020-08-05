console.log('decoded');
$(document).ready(function() {

    $(".whatwedo p").hide();
  
    $('.whatwedo img.one').click(function() {
        $(".whatwedo img.one").toggle();
      $(".whatwedo p.one").toggle();
    });
    $('.whatwedo p.one').click(function() {
      $(".whatwedo img.one").toggle();
      $(".whatwedo p.one").toggle();
    });
    $('.whatwedo img.two').click(function() {
      $(".whatwedo img.two").toggle();
      $(".whatwedo p.two").toggle();
    });
    $('.whatwedo p.two').click(function() {
      $(".whatwedo img.two").toggle();
      $(".whatwedo p.two").toggle();
    });
    $('.whatwedo img.three').click(function() {
      $(".whatwedo img.three").toggle();
      $(".whatwedo p.three").toggle();
    });
    $('.whatwedo p.three').click(function() {
      $(".whatwedo img.three").toggle();
      $(".whatwedo p.three").toggle();
    });
  
    $('.whatwedo h3').click(function() {
      $(".whatwedo img.one").toggle();
      $(".whatwedo p.one").toggle();
    });
    $('.whatwedo h3').click(function() {
      $(".whatwedo img.one").toggle();
      $(".whatwedo p.one").toggle();
    });
  
    $("table").hide();
    $(".additional-buttons").hide();
    $(".additional-info").hide();
    $(".btn.yes").hide();
    $(".btn.no").hide();
    $(".additional-info h4").hide();
  
    $('.btn.order').click(function() {
      var dress = $(".dress option:selected").val();
      var heels = $(".heels option:selected").val();
      var accessories = $(".accessories option:selected").val();
      var total = parseInt(dress) + parseInt(heels) + parseInt(accessories);
      var order = 1;
      var grandTotal = 0;
  
      $("table").show();
      $(".additional-buttons").show();
      $(".btn.order").hide();
  
      $("#dress").html($(".dress option:selected").text() + " - " + dress);
      $("#heels").html($(".heels option:selected").text() + " - " + heels);
      $("#accessories").html($(".accessories option:selected").text() + " - " + accessories);
      $("#total").html(total);
  
        class Outfit {
            constructor(dress, heels, accessories, total, orderNo) {
                this.dress = dress;
                this.heels = heels;
                this.accessories = accessories;
                this.total = total;
                this.orderNo = orderNo;
            }
        }

    });

    $('.btn.add-outfit').click(function() {
        var dress = $(".dress option:selected").val();
        var heels = $(".heels option:selected").val();
        var accessories = $(".accessories option:selected").val();
        var total = parseInt(dress) + parseInt(heels) + parseInt(accessories);
        order = order + 1;
        grandTotal = grandTotal + total;
  
  
        var newOutfit = new Outfit(dress, heels, accessories, total, order);
  
        var newRow = '<tr><th scope="row">' + newOutfit.orderNo + '</th><td id="dress">' + $(".dress option:selected").text() + " - " + newOutfit.size + '</td><td id="heels>' + $(".heels option:selected").text() + " - " + newOutfit.heels + '</td><td id="accessories">' + $(".accessories option:selected").text() + " - " + newOutfit.accessories + '</td><td id="total">' + newOutfit.total + '</td></tr>'
  
        $("#outfit").append(newRow);

});
});