$('.counter').each(function () {
  var $this = $(this),
    countTo = $this.attr('data-count');

  $({
    countNum: $this.text()
  }).animate({
      countNum: countTo
    },

    {

      duration: 3000,
      easing: '',
      step: function () {
        $this.text(Math.floor(this.countNum));
      },
      complete: function () {
        $this.text(this.countNum);
        //alert('finished');
      }

    });



});


document.getElementById("mySidenav").addEventListener('mouseup', () => {
  closeNav();
})




//서브메뉴
function openNav() {
  document.getElementById("mySidenav").style.transform = `translateX(0%)`;
}

function closeNav() {

  document.getElementById("mySidenav").style.transform = `translateX(100%)`;

}



//한 페이지씩 이동
window.addEventListener("wheel", function (e) {
  e.preventDefault();
}, {
  passive: false
});

var $html = $("html");
var page = 1;
var lastPage = $(".content").length;

$html.animate({
  scrollTop: 0
}, 10);

$(window).on("wheel", function (e) {

  if ($html.is(":animated")) return;

  if (e.originalEvent.deltaY > 0) {
    if (page === lastPage) return;

    page++;
  } else if (e.originalEvent.deltaY < 0) {
    if (page === 1) return;

    page--;
  }
  var posTop = (page - 1) * $(window).height();

  $html.animate({
    scrollTop: posTop
  });

});