

    let cards = document.querySelectorAll(".menu-item");

let ingredients = document.querySelectorAll(".ingredients");


for(let i=0;i<cards.length;i++){

    

cards[i].addEventListener("click",function(){

    if(ingredients[i].style.opacity==="1"){


ingredients[i].style.opacity = "0";
    }

   

    else{

        ingredients[i].style.opacity = "1";

    }

})
}









let language = document.querySelector("#language");

let currentLanguage = "en";

let productNames = document.querySelectorAll(".menu-item h2");

let ingredientTexts = document.querySelectorAll(".ingredients p");

let ingredientTitles = document.querySelectorAll(".ingredients h3");

let menuTitle = document.querySelector("nav h1");

let links = document.querySelectorAll("nav a");


language.addEventListener("click", function () {

    if (currentLanguage === "en") {

        currentLanguage = "ar";

        menuTitle.textContent = "المنيو";

        links[0].textContent = "إسبريسو";
        links[1].textContent = "قهوة";
        links[2].textContent = "ساخن";

        language.textContent = "English";


        // products

        productNames[0].textContent = "لاتيه مثلج";
        productNames[1].textContent = "أمريكانو مثلج";
        productNames[2].textContent = "شوكولاتة مثلجة";
        productNames[3].textContent = "قهوة مثلجة";
        productNames[4].textContent = "موكا مثلجة";
        productNames[5].textContent = "ميلك شيك شوكولاتة";
        productNames[6].textContent = "موكا قهوة مثلجة";
        productNames[7].textContent = "شاي مثلج";
        productNames[8].textContent = "لاتيه كراميل مثلج";
        productNames[9].textContent = "إسبريسو شوت واحد واثنان";

        productNames[10].textContent = "قهوة سنجل";
        productNames[11].textContent = "قهوة بالقرفة";
        productNames[12].textContent = "قهوة دبل";
        productNames[13].textContent = "قهوة فرنسية";
        productNames[14].textContent = "قهوة بالبندق";
        productNames[15].textContent = "قهوة برلين سنجل";
        productNames[16].textContent = "قهوة برلين دبل";
        productNames[17].textContent = "برلين بالقرفة";

        productNames[18].textContent = "أوركانو";
        productNames[19].textContent = "لاتيه";
        productNames[20].textContent = "كابتشينو";
        productNames[21].textContent = "أمريكانو";
        productNames[22].textContent = "موكا";
        productNames[23].textContent = "فلات وايت";
        productNames[24].textContent = "كورتادو";
        productNames[25].textContent = "لاتيه كراميل";
        productNames[26].textContent = "لاتيه بالبندق";


        // Ingredients

        for (let i = 0; i < ingredientTitles.length; i++) {
            ingredientTitles[i].textContent = "المكونات";
        }

        ingredientTexts[0].textContent = "إسبريسو - حليب - ثلج";
        ingredientTexts[1].textContent = "إسبريسو - ماء - ثلج";
        ingredientTexts[2].textContent = "شوكولاتة - حليب - ثلج";
        ingredientTexts[3].textContent = "قهوة - حليب - ثلج";
        ingredientTexts[4].textContent = "إسبريسو - حليب - ثلج - شوكولاتة";
        ingredientTexts[5].textContent = "حليب - آيس كريم - حليب";
        ingredientTexts[6].textContent = "قهوة - حليب - ثلج - شوكولاتة";
        ingredientTexts[7].textContent = "نكهة شاي - ماء - ثلج";
        ingredientTexts[8].textContent = "إسبريسو - حليب - ثلج - كراميل";
        ingredientTexts[9].textContent = "إسبريسو";

        ingredientTexts[10].textContent = "قهوة";
        ingredientTexts[11].textContent = "قهوة - قرفة";
        ingredientTexts[12].textContent = "قهوة";
        ingredientTexts[13].textContent = "قهوة - حليب";
        ingredientTexts[14].textContent = "قهوة - نكهة البندق";
        ingredientTexts[15].textContent = "قهوة برلين";
        ingredientTexts[16].textContent = "قهوة برلين";
        ingredientTexts[17].textContent = "قهوة برلين - قرفة";

        ingredientTexts[18].textContent = "إسبريسو برغوة";
        ingredientTexts[19].textContent = "إسبريسو - حليب";
        ingredientTexts[20].textContent = "دبل إسبريسو - حليب";
        ingredientTexts[21].textContent = "إسبريسو - ماء";
        ingredientTexts[22].textContent = "إسبريسو - حليب - شوكولاتة";
        ingredientTexts[23].textContent = "دبل إسبريسو - حليب";
        ingredientTexts[24].textContent = "دبل إسبريسو - شوت حليب واحد";
        ingredientTexts[25].textContent = "إسبريسو - حليب - نكهة كراميل";
        ingredientTexts[26].textContent = "إسبريسو - حليب - مكونات";

    }

    else {

        currentLanguage = "en";

        menuTitle.textContent = "menu";

        links[0].textContent = "espresso";
        links[1].textContent = "coffee";
        links[2].textContent = "hot";

        language.textContent = "arabic";


        // products

        productNames[0].textContent = "iced latte";
        productNames[1].textContent = "iced ammericano";
        productNames[2].textContent = "iced chocolate";
        productNames[3].textContent = "iced coffee";
        productNames[4].textContent = "iced mocca";
        productNames[5].textContent = "chocolate milkshake";
        productNames[6].textContent = "iced coffee mocha";
        productNames[7].textContent = "iced tea";
        productNames[8].textContent = "iced caramel latte";
        productNames[9].textContent = "single shot esspresso & double";

        productNames[10].textContent = "coffe single";
        productNames[11].textContent = "Cinnamon coffee";
        productNames[12].textContent = "coffe double";
        productNames[13].textContent = "french coffee";
        productNames[14].textContent = "hazelnut coffee";
        productNames[15].textContent = "Single Berlin Coffee";
        productNames[16].textContent = "Double Berlin Coffee";
        productNames[17].textContent = "Berlin With Cinnamon";

        productNames[18].textContent = "orucano";
        productNames[19].textContent = "latte";
        productNames[20].textContent = "cappuccino";
        productNames[21].textContent = "ammericano";
        productNames[22].textContent = "mocha";
        productNames[23].textContent = "flat white";
        productNames[24].textContent = "cortado";
        productNames[25].textContent = "latte caramel";
        productNames[26].textContent = "Hazelnut Latte";


        // Ingredients

        for (let i = 0; i < ingredientTitles.length; i++) {
            ingredientTitles[i].textContent = "Ingredients";
        }

        ingredientTexts[0].textContent = "Espresso - Milk - Ice";
        ingredientTexts[1].textContent = "Espresso - water - Ice";
        ingredientTexts[2].textContent = "chocolate - Milk - Ice";
        ingredientTexts[3].textContent = "coffee - Milk - Ice";
        ingredientTexts[4].textContent = "Espresso - Milk - Ice- chocolate";
        ingredientTexts[5].textContent = "milk -ice cream - Milk";
        ingredientTexts[6].textContent = "coffee - Milk - Ice - chocolate";
        ingredientTexts[7].textContent = "tea flavor - water - Ice";
        ingredientTexts[8].textContent = "Espresso - Milk - Ice -caramell";
        ingredientTexts[9].textContent = "Espresso";

        ingredientTexts[10].textContent = "coffee";
        ingredientTexts[11].textContent = "coffee - Cinnamon";
        ingredientTexts[12].textContent = "coffee";
        ingredientTexts[13].textContent = "coffee - milk";
        ingredientTexts[14].textContent = "coffee - hazelnut flavor";
        ingredientTexts[15].textContent = "Berlin Coffee";
        ingredientTexts[16].textContent = "Berlin Coffee";
        ingredientTexts[17].textContent = "Berlin Coffee - Cinnamon";

        ingredientTexts[18].textContent = "Espresso fomed";
        ingredientTexts[19].textContent = "Espresso - Milk";
        ingredientTexts[20].textContent = "double shot Espresso - Milk";
        ingredientTexts[21].textContent = "Espresso - water";
        ingredientTexts[22].textContent = "Espresso - Milk - chocolate";
        ingredientTexts[23].textContent = "double shot Espresso - Milk";
        ingredientTexts[24].textContent = "double shot Espresso - single shot Milk";
        ingredientTexts[25].textContent = "Espresso - Milk - caramell flavor";
        ingredientTexts[26].textContent = "Espresso - Milk - Ingredients";

    }

});