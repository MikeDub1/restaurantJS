export var Module = (() =>
{

    function loadTop(top)
    {
        var introduction = document.createElement("h1");
        introduction.textContent = "¡Bienvenidos a la página ficional del restaurante Sazón de los Andes!";
        top.appendChild(introduction);

        var ceviche = document.createElement("img");
        ceviche.src = "../ceviche.jpg";
        top.appendChild(ceviche);
    }

    function loadPage()
    {
        var contents = document.getElementById("content");

        var top = document.createElement("div");
        top.id = "top";

        var middle = document.createElement("div");
        middle.id = "middle";

        loadTop(top);
        contents.appendChild(top);
        //loadMiddle(middle);
    }

    return loadPage;
});