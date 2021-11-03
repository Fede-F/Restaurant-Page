import penne_rigate from './penne_rigate.jpg';
import penne_rigate_pesto from './penne_rigate_pesto.jpg';
import lasaña from './lasaña.jpg';
import farfalle from './farfalle.jpg';

const menu_creator = () => {
    const content_container = document.getElementById('content');
    let last_div = content_container;
    let newElement


    const div_creator = (idDiv) => {
        //Se crea el div
        let newDiv = document.createElement("div");
        newDiv.setAttribute("id", idDiv);
        newDiv.setAttribute("class", "element_div");

        //Se agrega el nuevo div al ultimo div creado
        content_container.appendChild(newDiv);
        //Se asignaa la variable el ultimo div creado
        last_div = document.getElementById(idDiv);

    };

    //Menu
    div_creator('menues_div');
    //Titulo
    newElement = document.createElement('h2');
    newElement.setAttribute("id", 'menu_h2');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Menu\r\n";
    last_div.appendChild(newElement);

    //Platos
    //Penne Rigate
    div_creator('menu_div');
    last_div.setAttribute("class", "menu_div");
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'menu_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Penne Rigate, deliciosas pastas con salsa pomodoro.\r\n";
    newElement.textContent += "Fideos al dente con pollo cocido a punto, salsa pomodoro y albaca.\r\n";
    last_div.appendChild(newElement);
    //Imagen
    newElement = document.createElement('img');
    newElement.setAttribute("id", 'menu_img');
    newElement.setAttribute("class", 'img');
    newElement.src = penne_rigate;
    last_div.appendChild(newElement);

    //Platos
    //Penne Rigate Pesto
    div_creator('menu_div1');
    last_div.setAttribute("class", "menu_div");
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'menu_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Penne Rigate, deliciosas pastas con salsa pesto.\r\n";
    newElement.textContent += "Penne pasta con salsa de pesto, calabacín, \r\n";
    newElement.textContent += "guisantes y albahaca.\r\n";
    last_div.appendChild(newElement);
    //Imagen
    newElement = document.createElement('img');
    newElement.setAttribute("id", 'menu_img');
    newElement.setAttribute("class", 'img');
    newElement.src = penne_rigate_pesto;
    last_div.appendChild(newElement);

    //Platos
    //Lasaña
    div_creator('menu_div2');
    last_div.setAttribute("class", "menu_div");
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'menu_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Lasaña con salsa boloñesa.\r\n";
    newElement.textContent += "Pasta en capas con carne cortado a cuchillo,queso,\r\n";
    newElement.textContent += "salsa blanca y salsa boloñesa.\r\n";
    last_div.appendChild(newElement);
    //Imagen
    newElement = document.createElement('img');
    newElement.setAttribute("id", 'menu_img');
    newElement.setAttribute("class", 'img');
    newElement.src = lasaña;
    last_div.appendChild(newElement);

    //Platos
    //Farfalle
    div_creator('menu_div3');
    last_div.setAttribute("class", "menu_div");
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'menu_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Fideos Farfalle.\r\n";
    newElement.textContent += "Pasta vegana farfalle en salsa de albaca,\r\n";
    newElement.textContent += "y espinaca con ajo.\r\n";
    last_div.appendChild(newElement);
    //Imagen
    newElement = document.createElement('img');
    newElement.setAttribute("id", 'menu_img');
    newElement.setAttribute("class", 'img');
    newElement.src = farfalle;
    last_div.appendChild(newElement);


};

export default menu_creator;