import {createElement} from "./home";

function createMenu(){
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
        textContent: "Menu",
        className: "tabChosen"
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

    // content
    const main = createElement('div', {
        className: "main"
    });
    const menu = createElement('div', {
        className: "menu"
    });

    const coffeeData = [
        { name: 'Classic Brew', price: 'R$ 6' },
        { name: 'Caramel Macchiato', price: 'R$ 8' },
        { name: 'Hazelnut Delight', price: 'R$ 7' },
        { name: 'Iced Vanilla Latte', price: 'R$ 9' },
    ];
      
    const coffeeBlock = createElement('div', { 
        className: 'block' 
    });
      
    coffeeData.forEach(({ name, price }) => {
        const coffeeElement = createElement('p', { textContent: name });
        const priceElement = createElement('p', { textContent: price, className: "priceBold" });
      
        coffeeBlock.appendChild(coffeeElement);
        coffeeBlock.appendChild(priceElement);
    });

    const teaData = [
        { name: 'Green Harmony', price: 'R$ 6' },
        { name: 'Earl Grey Elegance', price: 'R$ 6' },
        { name: 'Berry Bliss Herbal Tea', price: 'R$ 7' },
        { name: 'Chamomile Dream', price: 'R$ 5' },
    ];

    const teaBlock = createElement('div', {
        className: 'block'
    });

    teaData.forEach(({name, price}) => {
        const teaElement = createElement('p', { textContent: name });
        const priceElement = createElement('p', { textContent: price, className: "priceBold" });

        teaBlock.appendChild(teaElement);
        teaBlock.appendChild(priceElement);
    })

    const foodData = [
        { name: 'Avocado Toast Deluxe', price: 'R$ 13' },
        { name: 'Egg Benedict Feast', price: 'R$ 15' },
        { name: 'Mushroom & Spinach Omelette', price: 'R$ 16' },
        { name: 'Pancake Paradise', price: 'R$ 18' },
    ];

    const foodBlock = createElement('div', {
        className: 'block'
    });

    foodData.forEach(({name, price}) => {
        const foodElement = createElement('p', { textContent: name });
        const priceElement = createElement('p', { textContent: price, className: "priceBold" });

        foodBlock.appendChild(foodElement);
        foodBlock.appendChild(priceElement);
    })

    const dessertData = [
        { name: 'Chocolate Fondue Delight', price: 'R$ 17' },
        { name: 'Lemon Blueberry Cheesecake', price: 'R$ 15' },
        { name: 'Caramel Pecan Brownie', price: 'R$ 12' },
        { name: 'Raspberry Almond Tart', price: 'R$ 11' },
    ];

    const dessertBlock = createElement('div', {
        className: 'block'
    });

    dessertData.forEach(({name, price}) => {
        const desesertElement = createElement('p', { textContent: name });
        const priceElement = createElement('p', { textContent: price, className: "priceBold" });

        dessertBlock.appendChild(desesertElement);
        dessertBlock.appendChild(priceElement);
    })




    menu.appendChild(coffeeBlock);
    menu.appendChild(teaBlock);
    menu.appendChild(foodBlock);
    menu.appendChild(dessertBlock);
    main.appendChild(menu)
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

export {createMenu}