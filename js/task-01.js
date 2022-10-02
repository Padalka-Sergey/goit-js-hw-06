
// const item = document.querySelectorAll(".item");
// function countItem(value) {
//     console.log(`Number of categories:  ${value}`);
// }
// countItem(item.length);

const itemsRef = document.querySelectorAll(".item");
console.log(`Number of categories:  ${itemsRef.length}`);



itemsRef.forEach(itemRef => {
    const titleRef = itemRef.querySelector("h2");
    const itemLiRef = itemRef.querySelectorAll(".item>ul>li")
    console.log(`Category: ${titleRef.textContent}`);
    console.log(`Elements: ${itemLiRef.length}`);
});

    


