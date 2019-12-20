
// SCROLLING EFFECT TO LINKS
function scrollToAnchor(aid){
    var aTag = $("a[name='"+ aid +"']");
    $('html,body').animate({scrollTop: aTag.offset().top},'slow');
}

$("#contactMenu").click(function() {
   scrollToAnchor("contact");
});

$("#pricingMenu").click(function() {
   scrollToAnchor("pricing");
});

$("#downloadMenu").click(function() {
   scrollToAnchor("download");
});
