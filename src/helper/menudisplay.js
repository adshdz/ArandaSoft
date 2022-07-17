const tarjets2 = [];
tarjets2.push({ idnormal: "tarhead1", imgMenu: "./assets/icons/ic_vegetarian.svg", food: "Vegetarianos", referecia:"/vegetarianos" });
tarjets2.push({ idnormal: "tarhead2", imgMenu: "./assets/icons/ic_main.svg", food: "Principales", referecia:"/principales" });
tarjets2.push({ idnormal: "tarhead3", imgMenu: "./assets/icons/ic_cake.svg", food: "Tortas", referecia:"/tortas" });
tarjets2.push({ idnormal: "tarhead4", imgMenu: "./assets/icons/ic_fast-food.svg", food: "R&aacute;pida", referecia:"/comidas" });
tarjets2.push({ idnormal: "tarhead5", imgMenu: "./assets/icons/ic_kids.svg", food: "Men&uacute; Ni&ntilde;os", referecia:"/menus" });
tarjets2.push({ idnormal: "tarhead6", imgMenu: "./assets/icons/ic_soup.svg", food: "Sopas", referecia:"/sopas" });
/**Alimenta menu Head2 */
function displayHead2() {
    const head2 = document.getElementById("menuHead2");
    tarjets2.forEach(element => {
        head2.insertAdjacentHTML('beforeend', `<div class="tarjetMenu"> <a href = `+ element.referecia + ` >
        <img class="imgMenu" src=`+ element.imgMenu + `> </a>
        <span class="foodMenu">`+ element.food + `</span> 
    </div>`)
    });
}

export default displayHead2;