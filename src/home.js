const home_creator = () => {
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

    //Descripcion
    div_creator('desc_div');
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'text_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "El mejor lugar para saborear aquellos platos donde no se consiguen en otro restaurant común y corriente. \r\n Elaborados con amor y dedicación por nuestros mejores cocineros para nuestros mas queridos comensales.\r\n";
    newElement.textContent += "FF";
    last_div.appendChild(newElement);

    //Horarios
    div_creator('horario_div');
    //Titulo
    newElement = document.createElement('h2');
    newElement.setAttribute("id", 'horario_h2');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Horarios\r\n";
    last_div.appendChild(newElement);
    //Cuerpo
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'horario_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Lunes a Viernes: 9 am - 21 pm \r\n";
    newElement.textContent += "Sabados: 10 am - 24 pm\r\n";
    newElement.textContent += "Domingos: 10 am - 20 pm\r\n";
    newElement.textContent += "Feriados: 9 am - 20 pm\r\n";
    last_div.appendChild(newElement);

    //Ubicacion
    div_creator('ubicacion_div');
    //Titulo
    newElement = document.createElement('h2');
    newElement.setAttribute("id", 'ubicacion_h2');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Ubicación\r\n";
    last_div.appendChild(newElement);
    //Cuerpo
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'ubicacion_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "123 Plaza Serrano, Buenos Aires , Argentina";
    last_div.appendChild(newElement);





};

export default home_creator;