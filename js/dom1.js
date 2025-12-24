// dom1.js
console.log(document.querySelectorAll("div#detail>ul>li"));
//1.element node,2.text node<li>content</li>,3.attribute node

//elementnode 생성 메소드 creatElement();
let liTag = document.createElement("li"); //<li></li>
console.log(liTag);
let text = document.createTextNode("apple"); //apple
console.log(text);
// liTag.appendChild(text); //<li>apple</li>
liTag.innerText = "apple"; //위와 동일

console.log(liTag);
document.querySelector("#detail>ul").appendChild(liTag); //<ul>....<li>apple</li></ul>
