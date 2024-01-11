import {createElement} from "./home";

function createContact() {
    const content = document.getElementById('content');
    
    // create the header (same for all)
    const header = createElement('div', {
        className: "header"
    })
    const title = createElement('h1', {
        textContent: 'Prosto Cafe'
    });
    const nav = createElement('div', {
        className: "nav"
    });
    const homePage = createElement('h2', {
        textContent: "Home"
    });
    const menuPage = createElement('h2', {
        textContent: "Menu"
    });
    const contactPage = createElement('h2', {
        textContent: "Contact",
        className: "tabChosen"
    });

    nav.appendChild(homePage)
    nav.appendChild(menuPage)
    nav.appendChild(contactPage)
    
    header.appendChild(title)
    header.appendChild(nav)

    content.appendChild(header)

    // main part
    const main = createElement('div', {
        className: "main"
    });

    const contact = createElement('div', {
        className: 'contact'
    });

    const address = createElement('p', {
        textContent: 'Florianopolis, Brazil',
        id: 'address'
    });
    const hours = createElement('p', {
        textContent: 'everyday: 7am - 10pm',
        id: 'hours'
    });
    const phone = createElement('p', {
        textContent: '48-99111-9911',
        id: 'phone'
    });

    const info = createElement('div', {
        className: 'info'
    });

    const map = createElement('iframe', {
        src: 'https://maps.google.com/maps?q=Florianopolis&t=&z=10&ie=UTF8&iwloc=&output=embed',
        frameborder: 0,
        scrolling: 'no',
        id: 'map'
    })

    info.appendChild(address);
    info.appendChild(hours);
    info.appendChild(phone);
    contact.appendChild(info);
    contact.appendChild(map);
    main.appendChild(contact);
    content.appendChild(main);


    // footer - same for all
    const footer = createElement('div', {
        className: "footer"
    })
    const sign = createElement('a', {
        id: "signature",
        href: "https://github.com/darialiit",
        textContent: "designed by @darialiit",
        target: '_blank'
    })

    footer.appendChild(sign);
    content.appendChild(footer);


}

export {createContact}