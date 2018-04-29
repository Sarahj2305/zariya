$(document).foundation();


function updateSymbol(e){
  var selected = $(".currency-selector option:selected");
  $(".currency-symbol").text(selected.data("symbol"))
  $(".currency-amount").prop("placeholder", selected.data("placeholder"))
  $('.currency-addon-fixed').text(selected.text())
}

$(".currency-selector").on("change", updateSymbol)

updateSymbol()


$("#request-update").click(function(){
    $(".pre-click").hide();
    $(".spinner-click").show();
    setTimeout(function(){
      $(".spinner-click").hide();
      $(".post-click").show();
    }, 2000);
});



$(function() {
  $('.button-like')
    .bind('click', function(event) {
      $(".button-like").toggleClass("liked");
      $(".bluehand").toggle();
      $(".whitehand").toggle();
      $(".appreciate").toggle();
      $(".thankyou").toggle();
    })
});


$(function() {
    function count($this){
        var current = parseInt($this.html(), 10);
        $this.html(++current);
        if(current !== $this.data('count')){
            setTimeout(function(){count($this)}, 50);
        }
    }        
  $(".count").each(function() {
      $(this).data('count', parseInt($(this).html(), 10));
      $(this).html('0');
      count($(this));
  });
});