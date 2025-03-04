document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid');
    const scoreDisplay = document.getElementById('score');
    const restartButton = document.getElementById('restart');
    let cardsChosen = [];
    let cardsChosenId = [];
    let cardsWon = [];
    let score = 0;

    const cardArray = [
        { name: 'Machine Gun', img: 'https://lh6.googleusercontent.com/proxy/sMouPOwKEZ9ivuYocWeTRKsTcLa2BJJ0ydIZRq5H2J1lMxopAmovpWK8D5xu8kjabPylaRGZP-_i8N49NppauNZsI7LUU_MzmHkU9x8M2Q_P4eGdAr-jfx9-w0Re8QjUGNV0uWwZE5z-IjFH=w1920-h911' },
        { name: 'Machine Gun', img: 'https://lh6.googleusercontent.com/proxy/sMouPOwKEZ9ivuYocWeTRKsTcLa2BJJ0ydIZRq5H2J1lMxopAmovpWK8D5xu8kjabPylaRGZP-_i8N49NppauNZsI7LUU_MzmHkU9x8M2Q_P4eGdAr-jfx9-w0Re8QjUGNV0uWwZE5z-IjFH=w1920-h911' },
        { name: 'XM250', img: 'https://lh5.googleusercontent.com/proxy/Qf2-BpKpO33gKJTj-hxfHZlIaDYoSHnyaidg900nRlKvVBSGZNAWmNhejSSeFbjvk3VxgAKUj2PTXKebkBdsDD665Ey25_oXcW5AIR6Ovj3v9EhZAmv-GwX6tyCOq5bYqWX4753EJXxR=w1920-h911' },
        { name: 'XM250', img: 'https://lh5.googleusercontent.com/proxy/Qf2-BpKpO33gKJTj-hxfHZlIaDYoSHnyaidg900nRlKvVBSGZNAWmNhejSSeFbjvk3VxgAKUj2PTXKebkBdsDD665Ey25_oXcW5AIR6Ovj3v9EhZAmv-GwX6tyCOq5bYqWX4753EJXxR=w1920-h911' },
        { name: 'Spec Ops Squad', img: 'https://images05.military.com/sites/default/files/styles/full/public/2020-05/green-berets-enter-room-3000.jpg' },
        { name: 'Spec Ops Squad', img: 'https://images05.military.com/sites/default/files/styles/full/public/2020-05/green-berets-enter-room-3000.jpg' },
        { name: 'CAG Assault Loadout', img: 'https://thereptilehouseblog.com/wp-content/uploads/2019/04/img_0650-1.jpg?w=947' },
        { name: 'CAG Assault Loadout', img: 'https://thereptilehouseblog.com/wp-content/uploads/2019/04/img_0650-1.jpg?w=947' },
        { name: 'Delta Force CAG', img: 'https://i.pinimg.com/736x/6f/5d/98/6f5d98c3b09bdba1c351823a97d2105c.jpg' },
        { name: 'Delta Force CAG', img: 'https://i.pinimg.com/736x/6f/5d/98/6f5d98c3b09bdba1c351823a97d2105c.jpg' },
        { name: 'Loadout', img: 'https://i.pinimg.com/736x/8e/9b/1c/8e9b1cb4784ec168de7ee6768d5315c4.jpg' },
        { name: 'Loadout', img: 'https://i.pinimg.com/736x/8e/9b/1c/8e9b1cb4784ec168de7ee6768d5315c4.jpg' }
    ];

    cardArray.sort(() => 0.5 - Math.random());

    function createBoard() {
        grid.innerHTML = ''; // Clear the grid before creating a new board
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img');
            card.setAttribute('src', 'blank');
            card.setAttribute('data-id', i);
            card.classList.add('img');
            card.addEventListener('click', flipCard);
            grid.appendChild(card);
        }
    }

    function flipCard() {
        const cardId = this.getAttribute('data-id');
        cardsChosen.push(cardArray[cardId].name);
        cardsChosenId.push(cardId);
        this.setAttribute('src', cardArray[cardId].img);

        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500);
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('.grid img');
        const optionOneId = cardsChosenId[0];
        const optionTwoId = cardsChosenId[1];

        if (optionOneId == optionTwoId) {
            alert('You have clicked the same image!');
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
        } else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match!');
            cards[optionOneId].setAttribute('src', 'images/white.png');
            cards[optionTwoId].setAttribute('src', 'images/white.png');
            cards[optionOneId].classList.add('matched');
            cards[optionTwoId].classList.add('matched');
            cardsWon.push(cardsChosen);
            score++;
            scoreDisplay.textContent = score;
        } else {
            cards[optionOneId].setAttribute('src', 'images/blank.png');
            cards[optionTwoId].setAttribute('src', 'images/blank.png');
        }

        cardsChosen = [];
        cardsChosenId = [];

        if (cardsWon.length === cardArray.length / 2) {
            alert('Congratulations! You found them all!');
        }
    }

    function restartGame() {
        cardsWon = [];
        score = 0;
        scoreDisplay.textContent = score;
        cardArray.sort(() => 0.5 - Math.random());
        createBoard();
    }

    restartButton.addEventListener('click', restartGame);

    createBoard();
});