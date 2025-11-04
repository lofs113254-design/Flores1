window.onload = () => {
  document.body.classList.remove("container");

  setTimeout(() => {
    const flowers = document.querySelectorAll(".flower");

    flowers.forEach((flower, index) => {
      flower.style.cursor = "pointer";

      flower.addEventListener("click", (e) => {
        e.stopPropagation();

        if (document.body.classList.contains("flower-isolated")) return;

        document.body.classList.add("flower-isolated");

        flowers.forEach((f) => {
          if (f !== flower) {
            f.style.display = "none";
          } else {
            f.style.transform = "scale(1.2)";
            f.style.zIndex = "999";
          }
        });

        const toHide = document.querySelectorAll(
          ".flower__grass, .growing-grass, .long-g, .grow-ans, .flower__g-front, .flower__g-right, .flower__g-fr"
        );
        toHide.forEach((el) => (el.style.display = "none"));

        // Define mensagem diferente para cada flor
        const messages = ["Incrível", "Linda", "Maravilhosa"];
        const note = document.createElement("div");
        note.classList.add("note-paper");
        note.innerText = messages[index] || "oi";

        const stem = flower.querySelector(".flower__line");
        if (stem) {
          stem.appendChild(note);
        }
      });
    });

    document.body.addEventListener("click", () => {
      if (!document.body.classList.contains("flower-isolated")) return;

      
      document.body.classList.remove("flower-isolated");

      
      document.querySelectorAll(".flower").forEach((flower) => {
        flower.style.display = "block";
        flower.style.transform = "";
        flower.style.zIndex = "";
      });

      const toShow = document.querySelectorAll(
        ".flower__grass, .growing-grass, .long-g, .grow-ans, .flower__g-front, .flower__g-right, .flower__g-fr"
      );
      toShow.forEach((el) => (el.style.display = ""));

      document.querySelectorAll(".note-paper").forEach((el) => el.remove());
    });
  }, 5000);
};
