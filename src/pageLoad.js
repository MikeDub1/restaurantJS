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
        let menu = document.createElement("div");
        let menu_desc = document.createElement("p");
        let items = document.createElement("div");
        let div_table;
        let td;
        
        items.id = "items";
        menu.id = "menu";
        menu_desc.textContent = "¡Esta es nuestra carta!";
        menu_desc.id = "menu_description";
        menu.appendChild(menu_desc);

        for(let i = 0; i < 3; i++)
        {
            let table_list;
            let table = document.createElement("table");
            div_table = document.createElement("div");
            div_table.className += "list";
            

            if(i == 0) table_list = ["Aperitivos", "Papa a la huancaina(ají limo o amarillo)..........9 S/.","Anticuchos...................8 S/.", "Ceviche de Paiche............6 S/.",
            "Cuy chactado a la leña.......15 S/."];
            else if(i == 1) table_list = ["Platos", "Rocoto relleno................30 S/.", "Lomo saltado..................30 S/.", "Carapulcra con sopa seca......40 S/."];
            else if(i == 2) table_list = ["Postres","Suspiro Limeño.................20 S/.", "Picarones......................20 S/.", "Chocolate serrano..............30 S/.", "Mazamorra morada...............10 S/."];

            for(let table_itr = 0; table_itr < table_list.length; table_itr++)
            {
                let table_row = document.createElement("tr");
                if(table_itr == 0)
                {
                    let header = document.createElement("th");
                    header.textContent = table_list[table_itr];
                    table_row.appendChild(header);
                }
                else
                {
                    let td = document.createElement("td");
                    
                    td.textContent = table_list[table_itr];
                    table_row.appendChild(td);
                }
                table.appendChild(table_row);
            }

            div_table.appendChild(table);
            items.appendChild(div_table);
        }
        menu.appendChild(items);
        middle.appendChild(menu);
    }

    function loadMiddle(middle)
    {
        loadNav(middle);

        let home_content = document.createElement("div");
        let ceremony = document.createElement("img");
        let description = document.createElement("p");
        let contact_us = document.createElement("div");
        let contact_us_content = document.createElement("p");
        let link = document.createElement("a");

        home_content.id = "home_content";
        ceremony.src = "../ceremony.jpg";
        description.textContent = `En el año 1980, se fundó esta cadena de restaurantes en Huancayo, Perù. Pero a medidas que fue creciendo\,
        se expandió a otras partes del país como Lima, Iquitos, y Arequipa. Esta cadena se destaca por su maravillosos\
        platos como la Papa a la huancaina hecho con ají limo y el famoso Cuy Chactado a la leña ¡Ahora, estamos felices\
        de anuciar que el restaurante Sazón de los Andes va a abrir una nueva sede en Máncora! ¡Esperemos verle ahí para\
        la ceremonia de esta sede de nuestra cadena de cinco estrellas!`;

        home_content.appendChild(ceremony);
        home_content.appendChild(description);

        middle.appendChild(home_content);

        loadTables(middle);

        link.href = "https://www.theodinproject.com/";
        link.textContent = "TheOdinProject";

        contact_us_content.textContent = `Si usted desea hacer una reservación, procure llamarnos lo más pronto posible ya que las entradas se están llenando.
        Nuestro teléfono es: 555-555-555 y nuestro correo electrónico es: uwuwuwu@sazondelosandes.com. Esta página de internet
        de mentira fue creada por Michael Duboc como parte de TheOdinProject. Si deseas apoyarlos anda a `;

        contact_us_content.appendChild(link);
        contact_us_content.id = "contact_us_content";
        contact_us.appendChild(contact_us_content);
        contact_us.id = "contact_us";
        middle.appendChild(contact_us);

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
        if (document.location.hash == "" || document.location.hash == "#")
    document.location.hash = "#home_content";
    }

    return loadPage;
});