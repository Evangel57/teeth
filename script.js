// Get all the anchor elements
const links = document.querySelectorAll('a');

// Add event listeners to each anchor element
links.forEach(link => {
  link.addEventListener('click', function() {
    // Remove active class from all links
    links.forEach(otherLink => {
      otherLink.classList.remove('active');
    });
    
    // Add active class to the clicked link
    this.classList.add('active');
  });
});
