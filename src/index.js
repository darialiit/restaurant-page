import { createHome } from "./home";
import { createMenu } from "./menu";
import { createContact } from "./contact";
import "./style.css";

(function() {  

createHome();

document.addEventListener('click', updatePage)

function updatePage() {
    const content = document.querySelector('#content');
    const navs = document.querySelectorAll('h2');

    navs.forEach(nav => {
        nav.addEventListener('click', () => {
            if(nav.id == 'tabMenu') {
                content.innerHTML = '';
                createMenu();
            } else if(nav.id == 'tabContact') {
                content.innerHTML = '';
                createContact();
            } else {
                content.innerHTML = '';
                createHome();
            }
        })
    })
}
    
})();
