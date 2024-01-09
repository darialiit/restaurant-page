// function to create the elements

function createElement(tag, attributes = {}) {
    return Object.assign(document.createElement(tag), attributes);
}

function createHome() {
    const content = document.getElementById('content');

    // create the header (same for all)
    const header = createElement('div', {
        className: "header"
    })
    const title = createElement('h1', {
        textContent: 'Prosto Caffee!'
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
        textContent: "Contact"
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
    const intro = createElement('div', {
        className: 'intro'
    });
    const cta = createElement('h3', {
        textContent: "Your Coffee Haven – Visit Prosto Caffee!"
    })


    // footer
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

export {createHome}
