document
  .querySelector(".search-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    var query = document.querySelector(".search-bar").value;
    if (query) {
      window.location.href = "/search?query=" + encodeURIComponent(query);
    }
  });

