//productpage.js
//product 구조
// productCode: "상품코드",
// productName: "상품명",
// category: "전자기기(E)/주변기기(P)/사무용품(O)/모바일기기(M)/음향기기(A)/액세서리(X)",
// stockQty: 갯수,
// supplier: "제작사",
// purchasePrice: 가격,
// rating: 평점
// console.log(products);
const listTarget = document.querySelector("#list");
const categorys = [];
const categoryTarget = document.querySelector(".categories");
for (let i = 0; i < products.length; i++) {
  if (categorys.indexOf(products[i].category) == -1) {
    categorys.push(products[i].category);
  }
}
categorys.forEach((val) => {
  const option = document.createElement("option");
  option.value = val;
  option.innerText = val;
  categoryTarget.appendChild(option);
});

showList(products, 1);

//이벤트
categoryTarget.addEventListener("change", (e) => {
  const setValue = e.target.value;
  let filterProducts = category_Filter(setValue);

  showList(filterProducts);
});

document.querySelector("button").addEventListener("click", (e) => {
  const search = document.querySelector("input").value;
  const category = document.querySelector("select").value;
  let filterProducts = [];
  filterProducts = category_Filter(category);
  filterProducts = filterProducts.filter((elem) => {
    return elem.productName.includes(search);
  });
  showList(filterProducts);
});
//함수
function showList(products = [], page = 1) {
  listTarget.innerHTML = "";
  let num = products.length;

  if (num <= 10) {
    products.forEach((product) => {
      const tr = document.createElement("tr");
      ["productCode", "productName", "purchasePrice", "category"].forEach(
        (field) => {
          const td = document.createElement("td");
          const val = product[field];
          td.innerText = val;
          tr.appendChild(td);
        }
      );
      listTarget.appendChild(tr);
    });
  } else {
    let pagenum = num / 10 + 1;

    for (let i = (page - 1) * 10; i < page * 10; i++) {
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
    for (let i = 1; i <= pagenum; i++) {
      let a = document.createElement("a");
      a.innerText = i;
      a.addEventListener("click", (e) => {
        search(e.target.innerText);
        // showList(filterd, e.target.innerText);

        console.log(e.target.innerText);
      });
      document.querySelector(".pagination").appendChild(a);
    }
  }
}
function search(n) {
  const search = document.querySelector("input").value;
  const category = document.querySelector("select").value;
  let filterProducts = [];
  filterProducts = category_Filter(category);
  filterProducts = filterProducts.filter((elem) => {
    return elem.productName.includes(search);
  });
  showList(filterProducts, n);
}
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
