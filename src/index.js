import home_creator from './home';
import menu_creator from './menu';
import contact_creator from './contact';
import './style.css';


home_creator();

//Linkeo de botones
const home = document.getElementById('home_site');
const menu = document.getElementById('menu_site');
const contact = document.getElementById('contact_site');

const content_container = document.getElementById('content');
home.onclick = function () {
    removeAllChildNodes(content_container);
    home_creator();
};
menu.onclick = function () {
    removeAllChildNodes(content_container);
    menu_creator();
};
contact.onclick = function () {
    removeAllChildNodes(content_container);
    contact_creator();
};

//Borra los nodos hijos
function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}



