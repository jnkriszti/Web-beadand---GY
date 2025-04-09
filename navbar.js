const currentPage = window.location.pathname.split("/").pop();

document.querySelectorAll('.navbar-nav .nav-link').forEach(link => {
  const linkPage = link.getAttribute('href');
  if (linkPage === currentPage) {
    link.classList.add('active');
  } else {
    link.classList.remove('active');
  }
});
