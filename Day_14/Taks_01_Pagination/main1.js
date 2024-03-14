var tbody = document.querySelector("tbody");
var pageUl = document.querySelector(".pagination");
var itemShow = document.querySelector("#itemperpage");
var tr = document.querySelectorAll("tbody tr");
var emptyBox = [];
var index = 1;
var itemPerPage = 4;

for (let i = 0; i < tr.length; i++) {
  emptyBox.push(tr[i]);
}

itemShow.addEventListener("change", giveTrPerPage);

function giveTrPerPage() {
  itemPerPage = Number(this.value);
  displayPage(itemPerPage, index);
}

function displayPage(limit, page) {
  tbody.innerHTML = "";
  for (
    let i = (page - 1) * limit;
    i < page * limit && i < emptyBox.length;
    i++
  ) {
    tbody.appendChild(emptyBox[i]);
  }
  renderPagination();
}

function renderPagination() {
  pageUl.innerHTML = "";
  const totalPages = Math.ceil(emptyBox.length / itemPerPage);
  for (let i = 1; i <= totalPages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.href = "#";
    a.textContent = i;
    a.onclick = function () {
      index = i;
      displayPage(itemPerPage, index);
    };
    li.appendChild(a);
    pageUl.appendChild(li);
  }
}

displayPage(itemPerPage, index);
