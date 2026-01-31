// Sidebar navigation scroll
document.querySelectorAll("#nav li").forEach(item => {
  item.addEventListener("click", () => {
    document.getElementById(item.dataset.target)
      .scrollIntoView({ behavior: "smooth" });
  });
});

// Simple search (Wikipedia-style highlight)
const search = document.getElementById("search");
search.addEventListener("input", () => {
  const term = search.value.toLowerCase();
  document.querySelectorAll(".content section").forEach(sec => {
    sec.style.display = sec.innerText.toLowerCase().includes(term)
      ? "block"
      : "none";
  });
});
