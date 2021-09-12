// const js = document.createElement("script").setAttribute('src',"../../scripts/index.js");
// document.querySelector("head").appendChild(js);

const buttonList = document.querySelector('section>.lead-actions>button:nth-child(1)');

buttonList.addEventListener('click',(_)=>{
    const list = document.querySelector('section.list-products');
    list.classList.toggle('list');
    buttonList.classList.toggle('grid');
});