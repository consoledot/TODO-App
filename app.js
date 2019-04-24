let items = [];
const list = document.getElementById("list");
const submit = document.getElementById("submit");
let item = document.getElementById("item");
const paras = document.getElementsByTagName("p");
let para;

const addItemtoArray = () => {
  if (item.value != "") {
    items.push(item.value);
    item.value = "";
  }
};
const deleteItem = function() {
  const index = items.findIndex(
    item => this.textContent.replace("⚡", "") == item
  );
  items.splice(index, 1);
  addItemtoView();
};

const addItemtoView = () => {
  addItemtoArray();
  const elements = items.map(element => `<p>${element}<span>⚡</span></p>`);
  list.innerHTML = elements.join(" ");
  para = [...paras];
  para.forEach(key => key.addEventListener("click", deleteItem));
};

submit.addEventListener("click", addItemtoView);

item.addEventListener("keypress", e =>
  e.keyCode == 13 || e.which == 13 ? addItemtoView() : false
);
