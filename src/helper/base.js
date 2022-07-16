const tarjets = [];
tarjets.push({ idnormal: "normal1", idhover: "hover1", imgPlate: "./assets/Ojingeo-muchim-5.png", food: "Ojingeo", foodDesc: "Muchim", calification: "5.0" });
tarjets.push({ idnormal: "normal2", idhover: "hover2", imgPlate: "./assets/Ojingeo-muchim.png", food: "Cola", foodDesc: "Chicken", calification: "5.0" });
tarjets.push({ idnormal: "normal3", idhover: "hover3", imgPlate: "./assets/Ojingeo-muchim-1.png", food: "Roasted", foodDesc: "Carrot", calification: "4.5" });
tarjets.push({ idnormal: "normal4", idhover: "hover4", imgPlate: "./assets/cherry.png", food: "Sweet", foodDesc: "Cherries", calification: "4.0" });
const tarjets2 = [];
tarjets2.push({ idnormal: "tarhead1", imgMenu: "./assets/icons/ic_vegetarian.svg", food: "Vegetarianos" });
tarjets2.push({ idnormal: "tarhead2", imgMenu: "./assets/icons/ic_main.svg", food: "Principales" });
tarjets2.push({ idnormal: "tarhead3", imgMenu: "./assets/icons/ic_cake.svg", food: "Tortas" });
tarjets2.push({ idnormal: "tarhead4", imgMenu: "./assets/icons/ic_fast-food.svg", food: "R&aacute;pida" });
tarjets2.push({ idnormal: "tarhead5", imgMenu: "./assets/icons/ic_kids.svg", food: "Men&uacute; Ni&ntilde;os" });
tarjets2.push({ idnormal: "tarhead6", imgMenu: "./assets/icons/ic_soup.svg", food: "Sopas" });
/**muestra panel hover */
function showHover(idNormal, idHover) {
    document.getElementById(idNormal).setAttribute("hidden", true);
    document.getElementById(idHover).removeAttribute("hidden");
}
/**muestra panel normal */
function showNormal(idNormal, idHover) {
    document.getElementById(idNormal).removeAttribute("hidden");
    document.getElementById(idHover).setAttribute("hidden", true);
}

/**Alimenta menu Head2 */
function displayHead2() {
    const head2 = document.getElementById("menuHead2");
    tarjets2.forEach(element => {
        head2.insertAdjacentHTML('beforeend', `<div class="tarjetMenu"> 
        <img class="imgMenu" src=`+ element.imgMenu + `>
        <span class="foodMenu">`+ element.food + `</span>
    </div>`)
    });
}
/**alimenta menu principal */
function displayMenuhead() {
    const carrusel = document.getElementById("carruselini");
    tarjets.forEach(element => {
        carrusel.insertAdjacentHTML('beforeend', `<li class="tarjet" onmouseover="showHover('` + element.idnormal + `','` + element.idhover + `')" onmouseout="showNormal('` + element.idnormal + `','` + element.idhover + `')">
    <div class="plate" style="background-image:url(`+ element.imgPlate + `)"></div>
    <div id=`+ element.idnormal + ` class="normalTarjet">
        <div class="textFood">
            <span class="food">`+ element.food + `</span>
            <span class="foodDesc">`+ element.foodDesc + `</span>
        </div>
        <div class="score">
            <img class="star" src="./assets/icons/ic_star.svg">
            <span>`+ element.calification + `</span>
            <img class="heart" src="./assets/icons/ic-favorite.svg">
        </div>
    </div>
    <div id=`+ element.idhover + ` class="divhover" hidden>
        <div class="hoverTarjet">
            <div class="descriptionHover">
                <img class="imgHover" src="assets/icons/ic_portion.svg">
                <span class="titTextHover">Tama&ntilde;o de la porci&oacute;n</span>
                <span class="textHover">4 raciones</span>
            </div>
            <div class="descriptionHover">
                <img class="imgHover" src="assets/icons/ic_time.svg">
                <span class="titTextHover">Tiempo de preparaci&oacute;n</span>
                <span class="textHover">10 minutos</span>
            </div>
            <div class="descriptionHover">
                <img class="imgHover" src="assets/icons/ic_chef.svg">
                <span class="titTextHover">Dificultad</span>
                <span class="textHover">f&aacute;cil</span>
            </div>
        </div>
    </div>
</li>`)
    });
}
/**alimenta menu principal */
function displayMenuheadfin() {
    const carrusel = document.getElementById("carruselfin");
    tarjets.forEach(element => {
        carrusel.insertAdjacentHTML('beforeend', `<li class="tarjet">
    <div class="plate" style="background-image:url(`+ element.imgPlate + `)"></div>
    <div id=`+ element.idnormal + ` class="normalTarjet">
        <div class="textFood">
            <span class="food">`+ element.food + `</span>
            <span class="foodDesc">`+ element.foodDesc + `</span>
        </div>
        <div class="score">
            <img class="star" src="./assets/icons/ic_star.svg">
            <span>`+ element.calification + `</span>
            <img class="heart" src="./assets/icons/ic-favorite.svg">
        </div>
    </div>
</li>`)
    });
}

/**renderiza tarjetas */
function createTarjets(){
    displayMenuhead();
    displayHead2();
    displayMenuheadfin();
}

export default createTarjets;