let acces_Key = "N0_4ZQ5-SEny-ZDxqosknmZyaevN30T5xRQ8bQkXNvk"
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
let moreBtn = document.getElementById("moreBtn");
let showData = document.querySelector(".showData");

let page = 1;

const getData = async (searchValue , pageNo)=>{
    let fetching= await fetch(`https://api.unsplash.com/search/photos?query=${searchValue} &per_Page=28&P=${pageNo}  age&client_id=${acces_Key}`);
    let links = await fetching.json(); 
    console.log(links.results);

    if(pageNo === 1){
        
        showData.innerHTML="";
    }
    if (searchInput.value == "") {
        showData.innerHTML=`<h1>Please Search</h1>`
    }else{
        document.querySelector(".loadMore").style.display="block";
    }

    links.results.forEach((data) => {
        console.log(data.urls.small);

        let div = document.createElement("div");
        div.classList.add("card");
        showData.appendChild(div);

        div.innerHTML = `<img src="${data.urls.small}"> <a href=${data.links.html} target="_blank">${data.alt_description}</a>`
    });
}

searchBtn.addEventListener("click", ()=>{
    let searchValue = searchInput.value ;
    getData(searchValue, 1);
});

moreBtn.addEventListener("click", ()=>{
    let searchValue = searchInput.value ;
    getData(searchValue , page++);
})