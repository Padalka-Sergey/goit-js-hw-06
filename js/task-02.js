const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];



const makeList = items => {
  return items.map((element) => {
    const itemRef = document.createElement("li");
    itemRef.textContent = element;
    itemRef.classList.add("item");
    return itemRef;
  });
}


const listRef = document.querySelector("#ingredients");
const arrRef = makeList(ingredients);
listRef.append(...arrRef);


  

 
  
