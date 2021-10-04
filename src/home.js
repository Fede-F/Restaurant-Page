const home_creator = (() => {
    const content_container = document.getElementById('content');
    let last_div = content_container;

    const div_creator = (idDiv, idElement, elementType, text) => {
        //Se crea el div
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", idDiv);
        //Se crea el elemento
        let newElement = document.createElement(elementType);
        if (idElement !== '')
            newElement.setAttribute("id", idElement);
        if (text !== '' )
            //Se le asigna el texto
            newElement.textContent = text;

        //Se agrega el nuevo div al ultimo div creado
        last_div.appendChild(newDiv);
        //Se agrega el elemento al nuevo div
        newDiv.appendChild(newElement); 
        //Se asignaa la variable el ultimo div creado
        last_div = document.getElementById(idDiv);


    };

    div_creator('header_div', 'header', 'h1', 'Tienda de comidas');
    div_creator('img_div', 'img', 'img', '');
    img.src ="https://media.cntraveler.com/photos/5f5fad3e987090832029b137/master/w_1600%2Cc_limit/50States50Cuisines-2020-AmberDay-Indiana.jpg";
    //img.src = "https://i.pinimg.com/originals/8c/06/9a/8c069a79b5dfb9ba03918d2f687bb6cb.gif";
    div_creator('text_div', 'text', 'p', 'El mejor lugar para saborear aquellos platos donde no se consiguen en otro restaurant comun y corriente.');
    div_creator('text_div2', 'text2', 'p', 'Elaborados con amor y dedicacion por nuestros mejores cocineros para nuestros mas queridos comensales.');



})();

export default home_creator;