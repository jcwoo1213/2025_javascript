// paging.js

const pagingarea = document.querySelector(".pagination");
const listTarget = document.querySelector("#list");
const categorys = [];
const categoryTarget = document.querySelector(".categories");
for (let i = 0; i < products.length; i++) {
  if (categorys.indexOf(products[i].category) == -1) {
    categorys.push(products[i].category);
  }
}
let page_num;
categorys.forEach((val) => {
  const option = document.createElement("option");
  option.value = val;
  option.innerText = val;
  categoryTarget.appendChild(option);
});
let filterProducts = products;
page_num = Math.ceil(filterProducts.length / 5);

printPageNum(1);
showList(1);

document.querySelector("button").addEventListener("click", (e) => {
  const search = document.querySelector("input").value;
  const category = document.querySelector("select").value;

  filterProducts = category_Filter(category);
  filterProducts = filterProducts.filter((elem) => {
    return elem.productName.includes(search);
  });
  page_num = Math.ceil(filterProducts.length / 5);
  printPageNum(1);
  showList(1);
});
//함수
function showList(page = 1) {
  listTarget.innerHTML = "";



  for (let i = (page - 1) * 5; i < Math.min(page * 5, filterProducts.length); i++) {
    const tr = document.createElement("tr");
    ["productCode", "productName", "purchasePrice", "category"].forEach(
      (field) => {
        const td = document.createElement("td");
        const val = products[i][field];
        td.innerText = val;
        tr.appendChild(td);
      }
    );
    listTarget.appendChild(tr);
  }


}

function printPageNum(now_page = 1) {
  pagingarea.innerHTML = "";
  now_page = Number(now_page);
  let button;
  button = document.createElement("button");
  button.innerText = 1;
  button.addEventListener("click", (e) => {
    showList(e.target.innerText);
    printPageNum(e.target.innerText);
    console.log(page_num);
    console.log(e.target.innerText);
  });
  pagingarea.appendChild(button);
  console.log(now_page + 2);
  for (let i = Math.max(2, (now_page - 2)); i <= Math.min(page_num - 1, now_page + 2); i++) {
    button = document.createElement("button");
    button.innerText = i;
    button.addEventListener("click", (e) => {
      showList(e.target.innerText);
      printPageNum(e.target.innerText);
      console.log(page_num);

      console.log(e.target.innerText);
    });
    pagingarea.appendChild(button);
  }
  button = document.createElement("button");
  button.innerText = page_num;
  button.addEventListener("click", (e) => {
    showList(e.target.innerText);
    printPageNum(e.target.innerText);
    console.log(page_num);
    console.log(e.target.innerText);
  });
  pagingarea.appendChild(button);

}
// function search(n) {
//   const search = document.querySelector("input").value;
//   const category = document.querySelector("select").value;
//   let filterProducts = [];
//   filterProducts = category_Filter(category);
//   filterProducts = filterProducts.filter((elem) => {
//     return elem.productName.includes(search);
//   });
//   showList(filterProducts, n);
// }
function category_Filter(category) {
  let filterProducts = [];
  if (category == "All") {
    filterProducts = products;
  } else {
    filterProducts = products.filter((elem) => {
      return elem.category == category;
    });
  }
  return filterProducts;
}