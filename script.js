// // Get all the anchor elements
// const links = document.querySelectorAll('a');

// // Add event listeners to each anchor element
// links.forEach(link => {
//   link.addEventListener('click', function() {
//     // Remove active class from all links
//     links.forEach(otherLink => {
//       otherLink.classList.remove('active');
//     });
    
//     // Add active class to the clicked link
//     this.classList.add('active');
//   });
// });
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("scrollToTopBtn").classList.add("show");
    document.getElementById("scrollToTopBtn").classList.remove("hide");
  } else {
    document.getElementById("scrollToTopBtn").classList.add("hide");
    document.getElementById("scrollToTopBtn").classList.remove("show");
  }
}

function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}
