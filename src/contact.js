

const contact_creator = () => {
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

    //Contacto
    div_creator('contactos_div');
    //Titulo
    newElement = document.createElement('h2');
    newElement.setAttribute("id", 'contact_h2');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "Contacto\r\n";
    last_div.appendChild(newElement);

    //Concato
    div_creator('contacto_div');
    //last_div.setAttribute("class", "contacto_div");
    newElement = document.createElement('p');
    newElement.setAttribute("id", 'contact_desc');
    newElement.setAttribute("class", 'text');
    newElement.textContent = "FF\r\n";
    newElement.textContent += "Tel: 123-213-312\r\n";
    newElement.textContent += "Email: mail@mailcompany.com\r\n";
    last_div.appendChild(newElement);
    



};

export default contact_creator;