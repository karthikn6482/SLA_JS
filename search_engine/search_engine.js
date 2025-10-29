const form = document.getElementById("searchForm");
const input = document.getElementById("actorInput");
const result = document.getElementById("result");

const actors = {
  vijay: "assets/vijay.jpg",
  ajith: "assets/ajith.jpg",
  suriya: "assets/suriya.jpg",
  dhanush: "assets/dhanush.jpg",
  rajini: "assets/rajini.jpg"
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const query = input.value.trim().toLowerCase();
  result.innerHTML = "";

  if (actors[query]) {
    const img = document.createElement("img");
    img.src = actors[query];
    img.alt = query;
    result.appendChild(img);
  } else {
    result.innerHTML = `<p>❌ Actor not found in database.</p>`;
  }

  input.value = "";
});
