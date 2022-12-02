const h1Node = document.querySelector("#heading_id");
// const h1Node = document.querySelector("[data-tag='heading']");

console.log(h1Node); // <h1 id="heading_id">Bye</h1>

const h1NodeList = document.querySelectorAll(".heading-class");

h1NodeList.forEach((node) => {
  node.innerHTML = "Hello";
});

const aNode = document.querySelector("#link");
aNode.href = "https://www.youtube.com";

h1Node.style.backgroundColor = "red";

const divNode = document.querySelector("#list_container");

// Slightly this won't be parsed as a HTML
// divNode.innerText = `
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//     </ul>
// `;

// Inefficient way to add HTML
// divNode.innerHTML = `
//     <ul>
//         <li>Item 1</li>
//         <li>Item 2</li>
//         <li>Item 3</li>
//     </ul>
// `;

// Slightly efficient way to add HTML
const ulNode = document.createElement("ul");

const liNode1 = document.createElement("li");
liNode1.innerText = "Item 1";

const liNode2 = document.createElement("li");
liNode2.innerText = "Item 1";

const liNode3 = document.createElement("li");
liNode3.innerText = "Item 1";

ulNode.appendChild(liNode1);
ulNode.appendChild(liNode2);
ulNode.appendChild(liNode3);

divNode.appendChild(ulNode);

function logger() {
  console.log("Hello");
}

const buttonNode = document.querySelector("#click_me_button");
buttonNode.onclick = logger;
