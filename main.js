let met = document.getElementById("more-info");
let text = document.getElementById("hidden");
let contactBtn = document.getElementById("contact-btn");
let contactInfo = document.getElementById("contact-info");

met.addEventListener("click", function () {
   

    if (text.classList.contains("show")) {
        text.classList.remove("show");
        met.innerHTML = "Узнать больше";
    } else {
        text.classList.add("show");
        met.innerHTML = "Скрыть информацию";
    }
});

contactBtn.addEventListener("click", function () { 
    if (contactInfo.classList.contains("slow")) 
       { 
          contactInfo.classList.remove("slow"); 
          contactBtn.innerHTML = "Связаться со мной";
         } else {
          contactInfo.classList.add("slow"); 
          contactBtn.innerHTML = "Скрыть контактные данные"; 
            } 
});

let searchInput = document.getElementById("search-input");
let searchResults = document.getElementById("search-results");

searchInput.addEventListener("input", function () {
    if (searchInput.value.trim() === "") {
        searchResults.innerHTML = "Привет, введите ваше имя";
    } else {
        searchResults.innerHTML = "Привет, " + searchInput.value + "!";
    }
});