var tbody = document.querySelector("tbody");
var pageUl = document.querySelector(".pagination");
var itemShow = document.querySelector("#itemperpage");
var tr = tbody.querySelector("tr");
var emptyBox = [];
var index = 1;
var itemParPage = 4;

for (let i = 0; i < tr.length; i++) {
  emptyBox.push(tr[i]);
}
itemShow.onchange = giveTrPerPage;

function giveTrPerPage() {
  itemParPage = Number(this.value);
  displayPage(itemParPage);
}
function displayPage(limit) {
  tbody.innerHTML = "";
  for (let i = 0; i < limit; i++) {
    tbody.appendChild(emptyBox[i]);
  }
}
displayPage(itemParPage);
