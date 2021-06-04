/** @format */
AOS.init();

window.onscroll = function () {
  scrollFunction();
  // parallax();
};

function scrollFunction() {
  if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
    document.getElementById("nav").style.background = "#141414";
    document.getElementById("nav").style.boxShadow =
      "(1px 1px 10px rgba(0,0,0,0.5))";
    document.getElementById("brand").style.color = "#fff";
  } else {
    document.getElementById("nav").style.background =
      " linear-gradient(to top, rgba(20, 20, 20, 0), rgba(0,0,0,0.5))";
    document.getElementById("brand").style.color = "#fff";
  }
}

// function parallax() {
//   var wScroll = document.documentElement.scrollTop;

//   if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
//     document.querySelector(".text-para").style.transform =
//       "translate(0px," + wScroll / 30 + "%)";
//     console.log(wScroll);
//   } else {
//   }
// }
