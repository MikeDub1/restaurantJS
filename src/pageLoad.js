export let Module = (() =>
{

    function loadTop(top)
    {
        let introduction = document.createElement("h1");
        introduction.textContent = "¡Bienvenidos a la página ficional del restaurante Sazón de los Andes!";
        top.appendChild(introduction);

        let ceviche = document.createElement("img");
        ceviche.src = "../ceviche.jpg";
        top.appendChild(ceviche);
    }

    function loadNav(middle)
    {
        let nav_div = document.createElement("div");
        let nav = document.createElement("nav");
        let nav_ul = document.createElement("ul");
        let li1 = document.createElement("li")
        let li2 = document.createElement("li");
        let li3 = document.createElement("li");
        let a1 = document.createElement("a");
        let a2 = document.createElement("a");
        let a3 = document.createElement("a");

        nav_div.id = "navbar";

        a1.href = "#home_content";
        a2.href = "#menu";
        a3.href = "#contact_us";

        a1.textContent = "Inicio";
        a2.textContent = "La carta";
        a3.textContent = "Contacto";

        li1.appendChild(a1);
        li2.appendChild(a2);
        li3.appendChild(a3);

        nav_ul.appendChild(li1);
        nav_ul.appendChild(li2);
        nav_ul.appendChild(li3);

        nav.append(nav_ul);
        nav_div.append(nav);
        middle.append(nav_div);
    }

    function loadTables(middle)
    {
        let menu_desc = document.createElement("p");
        let div_table;
        let td;

        //create tables.
        menu_desc.textContent = "¡Esta es nuestra carta!";
        middle.appendChild(menu_desc);

        


    }

    function loadMiddle(middle)
    {
        loadNav(middle);

        let home_content = document.createElement("div");
        home_content.id = "home_content";

        let ceremony = document.createElement("img");
        ceremony.src = "../ceremony.jpg";

        let description = document.createElement("p");
        description.textContent = `En el año 1980, se fundó esta cadena de restaurantes en Huancayo, Perù. Pero a medidas que fue creciendo\,
        se expandió a otras partes del país como Lima, Iquitos, y Arequipa. Esta cadena se destaca por su maravillosos\
        platos como la Papa a la huancaina hecho con ají limo y el famoso Cuy Chactado a la leña ¡Ahora, estamos felices\
        de anuciar que el restaurante Sazón de los Andes va a abrir una nueva sede en Máncora! ¡Esperemos verle ahí para\
        la ceremonia de esta sede de nuestra cadena de cinco estrellas!`;

        home_content.appendChild(ceremony);
        home_content.appendChild(description);

        middle.appendChild(home_content);

        loadTables(middle);

    }

    function loadPage()
    {
        let contents = document.getElementById("content");

        let top = document.createElement("div");
        top.id = "top";

        let middle = document.createElement("div");
        middle.id = "middle";

        loadTop(top);
        contents.appendChild(top);
        loadMiddle(middle);
        contents.appendChild(middle);
    }

    return loadPage;
});