const container = document.querySelector("#container");
const loaderContainer = document.querySelector("#loaderContainer");
const loader = document.querySelector("#loader");
const reception = document.querySelector("#reception");
const form = document.querySelector("#form");
const img = document.querySelector("#img");
const companyName = document.querySelector("#companyName");
const checbox = document.querySelector("#checbox");
const newEl = document.querySelector("#new");
const featured = document.querySelector("#featured");
const level = document.querySelector("#level");
const time = document.querySelector("#time");
const work = document.querySelector("#work");
const addres = document.querySelector("#addres");
const labels = document.querySelector("#labels");
const fullstack = document.querySelector("#fullstack");
const phyton = document.querySelector("#phyton");
const midweight = document.querySelector("#midweight");
const react = document.querySelector("#react");
const button = document.querySelector("#button");
const cards = document.querySelector("#cards");

loader.setAttribute('alt', 'loading');
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(() => {
        loaderContainer.remove()
    }, 2000)
});

function createCard(data) {
    return `
        <div class="card">
            <img src="${data.img}" alt="">
            <div class="left-card">
                <div class="companys">
                    <span class="first">${data.name}</span>
                    <span class="news">${data.new}</span>
                    <span class="second">${data.featured}</span>
                </div>

                <h3 class="levels">${data.level}</h3>

                <div class="times">
                    <span>${data.time}</span>
                    <span class="point">.</span>
                    <span>${data.typeWork}</span>
                    <span class="point">.</span>
                    <span>${data.place}</span>
                </div>
            </div>

            <div class="right-card">
                <h4>${data.fullstack}</h4>
                <h4>${data.midweight}</h4>
                <h4>${data.javaScript}</h4>
                <h4>${data.sass}</h4>
            </div>
        </div>
    `
}

function validate() {
    if (!img.value) {
        alert("Logotip URL Manzilini to'g'ri kiritishingiz zarur!");
        img.focus();
        img.style.outlineColor = 'red';
        return false
    }

    if (companyName.value.length < 5) {
        alert("Kompaniya nomi eng kamida 5ta belgidan iborat bo'lishi kerak!");
        companyName.focus();
        companyName.style.outlineColor = 'red';
        return false
    }

    if (!img.value) {
        alert("Logotip URL Manzilini to'g'ri kiritishingiz zarur!");
        img.focus();
        img.style.outlineColor = 'red';
        return false
    }

    if (checbox.value) {
        alert("Chexboxlarni tanlashingiz kerak!");
        return false
    }


    return true
}



button && button.addEventListener('click', function(event) {
    event.preventDefault()

    let isValid = validate();
    if(!isValid) {
        return
    }


    const job = {
        id: Date.now(),
        logo: img.value,
        companyName: companyName.value,
        new: newEl.checked,
        featured: featured.checked,
        level: level.value,
        time: time.value,
        work: work.value,
        addres: addres.value,
        fullstack: fullstack.checked,
        phyton: phyton.checked,
        midweight: midweight.checked,
        react: react.checked
    }

    form.reset()
    let card = createCard(job);
    cards.innerHTML += card;
})