function addContent() {
    const content = document.getElementById('content');
    const newTitle = document.createElement('h1');
    const newText = document.createElement('p');
    const newImg = document.createElement('img');
    newTitle.textContent = "Prosto Caffee";
    newText.textContent = "In the heart of the city, Prosto Caffee stands as your cozy corner for coffee and conversation. Step into a warm and inviting space, filled with the aroma of freshly ground beans and the embrace of comfortable seating. Whether you're seeking solitude for focused work, a place to engage in stimulating conversations, or simply to enjoy a delightful cup of coffee, Prosto Caffee welcomes you. With an ambiance designed for comfort and creativity, we invite you to make every visit a memorable moment in our caffeinated haven.";
    newImg.src = "/home/darialaia/repos/restaurant-page/src/cafe.jpg";
    newImg.width = 200;
    content.appendChild(newTitle);
    content.appendChild(newText);
    content.appendChild(newImg);
};

export {addContent}