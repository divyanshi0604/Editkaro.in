
    function filterVideos(category) {
      const cards = document.querySelectorAll(".video-card");
      const buttons = document.querySelectorAll(".filter-buttons button");

      buttons.forEach(btn => btn.classList.remove("active"));
      event.target.classList.add("active");

      cards.forEach(card => {
        if (category === "all" || card.getAttribute("data-category") === category) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      });
    }
 