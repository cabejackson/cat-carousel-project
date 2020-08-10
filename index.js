$('.thumbnail').on('click', e => {
  console.log(e.target);
  //console.log(this);
$("div.hero img").attr("src", $(e.target).attr("src"));
$("div.hero img").attr("alt", $(e.target).attr("alt"));


  

});

//$(".thumbnail").click(function() { $("#mainImage").attr("src", $(this).attr("src")); })
