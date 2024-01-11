// function to create the elements
(function() {
function createElement(tag, attributes = {}) {
    return Object.assign(document.createElement(tag), attributes);
}

function createHome() {
    const content = document.getElementById('content');

    // create the header (same for all)
    const header = createElement('div', {
        className: "header"
    });
    const title = createElement('h1', {
        textContent: 'Prosto Cafe'
    });
    const nav = createElement('div', {
        className: "nav"
    });
    const homePage = createElement('h2', {
        textContent: "Home",
        className: "tabChosen",
        id: 'tabHome'
    });
    const menuPage = createElement('h2', {
        textContent: "Menu",
        id: 'tabMenu'
    });
    const contactPage = createElement('h2', {
        textContent: "Contact",
        id: 'tabContact'
    });

    nav.appendChild(homePage);
    nav.appendChild(menuPage);
    nav.appendChild(contactPage);
    
    header.appendChild(title);
    header.appendChild(nav);

    content.appendChild(header);

    // main part
    const main = createElement('div', {
        className: "main"
    });
    const intro = createElement('div', {
        className: 'intro'
    });
    const cta = createElement('h3', {
        textContent: "Your Coffee Haven – Visit Prosto Caffee!"
    });
    const about = createElement('p', {
        textContent: "In the heart of the city, Prosto Caffee stands as your cozy corner for coffee and conversation. Step into a warm and inviting space, filled with the aroma of freshly ground beans and the embrace of comfortable seating."
    });
    const about2 = createElement('p', {
        textContent: "Whether you're seeking solitude for focused work, a place to engage in stimulating conversations, or simply to enjoy a delightful cup of coffee, Prosto Caffee welcomes you. With an ambiance designed for comfort and creativity, we invite you to make every visit a memorable moment in our caffeinated haven."
    });

    intro.appendChild(cta);
    intro.appendChild(about);
    intro.appendChild(about2);
    main.appendChild(intro);
    content.appendChild(main);

    // footer - same for all
    const footer = createElement('div', {
        className: "footer"
    });
    const sign = createElement('a', {
        id: "signature",
        href: "https://github.com/darialiit",
        textContent: "designed by @darialiit",
        target: '_blank'
    });

    footer.appendChild(sign);
    content.appendChild(footer);

}
})();

export {createHome};
export {createElement};
