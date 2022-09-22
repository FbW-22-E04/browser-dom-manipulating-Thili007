const books = [
  {
    title: "The Design of EveryDay Things",
    author: "Don Norman",
    alreadyRead: false,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcTQEZhxiVNZAeKa1dGfEzKwLXiyY_78i08Gfhwn53k-JYin9TDO",
  },
  {
    title: "The Most Human Human",
    author: "Brian Christian",
    alreadyRead: true,
    img: "http://t2.gstatic.com/images?q=tbn:ANd9GcRqNE0qeS4ldVIC9DbGkx9MOwJ4WWKi6HVvtrtZ8XTKVodonSBy",
  },
  {
    title: "Thinking with Type",
    author: "Ellen Lupton",
    alreadyRead: true,
    img: "https://images-na.ssl-images-amazon.com/images/I/518%2BxIiELFL._SX258_BO1,204,203,200_.jpg",
  },
  {
    title: "Eloquent JavaScript",
    author: "Marijn Haverbeke",
    alreadyRead: false,
    img: "https://eloquentjavascript.net/img/cover.jpg",
  },
];

// Styles for Heading

const h1 = document.querySelector(".text-center");

h1.style.fontSize = "5rem";
h1.style.textShadow = "4px 4px 5px red";
h1.style.textDecoration = "underline wavy darkCyan 2px";

const booksSorted = books.sort((a, b) => {
  return a.author.split(" ").reverse().join(" ") <
    b.author.split(" ").reverse().join(" ")
    ? -1
    : 1;
});

// Creating list Items
const bookListOutPut = document.querySelector(".book-list");

for (let i = 0; i < books.length; i++) {
  let listItem = document.createElement("li");
  bookListOutPut.appendChild(listItem);
}
const bookItemList = document.querySelectorAll("li");

bookItemList.forEach((item) => {
  item.style.listStyle = "none";
  item.style.width = "20rem";
  item.style.height = "30rem";
  item.style.border = "2px solid lightGreen";
  item.style.margin = "20px";
  item.style.boxShadow = "2px 2px 2px 5px lightGrey";
  item.style.backgroundColor = "rgb(255,250,240)";

  let title = document.createElement("h3");
  item.appendChild(title);
  let image = document.createElement("img");
  item.appendChild(image);
  let author = document.createElement("p");
  item.appendChild(author);
  let alreadyRead = document.createElement("button");
  item.appendChild(alreadyRead);
});

const image = document.querySelectorAll("img");

image.forEach((item, i) => {
  item.src = booksSorted[i].img;
  item.style.width = "20rem";
  item.style.height = "20rem";
  item.style.border = "4px solid rgb(173,216,230)";
});

const title = document.querySelectorAll("h3");

title.forEach((item, i) => {
  item.textContent = booksSorted[i].title;
  item.style.textAlign = "center";
  item.style.color = "blue";
  item.style.textDecoration = "underline";
});

const author = document.querySelectorAll("p");

author.forEach((item, i) => {
  item.textContent = booksSorted[i].author + " ~";
  item.style.textAlign = "left";
  item.style.textDecoration = "underline";
  item.style.color = "rgb(255,150,181)";
  item.style.fontSize = "2rem";
});

const button = document.querySelectorAll("button");

button.forEach((item, i) => {
  if (booksSorted[i].alreadyRead === true) {
    item.textContent = "already Read";
    item.style.backgroundColor = "rgb(154,205,50)";
    item.style.border = "2px solid royalBlue";
  }
  if (booksSorted[i].alreadyRead === false) {
    item.textContent = "to be Read";
    item.style.color = "rgb(160,82,45)";
    item.style.backgroundColor = "rgb(250,128,114)";
    item.style.border = "2px solid royalBlue";
  }
  item.style.fontSize = "1.2rem";
  item.style.float = "right";
  item.style.padding = "5px";
  item.style.borderRadius = "20%";
});
