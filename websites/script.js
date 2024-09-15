document.addEventListener('DOMContentLoaded', () => {
    var form = document.getElementById('myForm');

    document.getElementById('signErrorContainer').addEventListener('click', (e)=>{
        e.preventDefault();
    })
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('signErrorContainer').innerHTML = '';

        var username = document.getElementById("username").value;
        var email = document.getElementById("email").value;
        var password = document.getElementById("password").value;
        var dob = document.getElementById("dob").value;
        var age = document.getElementById("age").value;
        var website = document.getElementById("website").value;
        var phone = document.getElementById("phone").value;
        var terms = document.getElementById("terms").checked;

        var errors = [];

        if (username.trim() === '') {
            errors.push("Username is required");
        }

        var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            errors.push("Invalid email address");
        }

        if (password.length < 6) {
            errors.push("Password must be at least 6 characters long");
        }

        if (age === '' || age < 18) {
            errors.push("Age must be 18 years or older");
        }

        var urlPattern = /^(https?:\/\/)?([\w\d-]+\.)+[\w\d-]+(\/[\w\d- .%&=]*)?$/i;
        if (website && !urlPattern.test(website)) {
            errors.push("Invalid website URL");
        }

        var phonePattern = /^0\d{10}$/;
        if (!phonePattern.test(phone)) {
            errors.push("Phone number must start with 0 and be 11 digits long");
        }

        if (dob === '') {
            errors.push("Date of birth is required");
        }

        if (!terms) {
            errors.push("You must accept the terms and conditions");
        }

        if (errors.length > 0) {
            var errorContainer = document.getElementById('signErrorContainer');
            errors.forEach(error => {
                var errorDiv = document.createElement('div');
                errorDiv.style.color = 'red';
                errorDiv.textContent = error;
                errorContainer.appendChild(errorDiv);
            });
        } else {
            form.style.display = 'none';
            alert('Form submitted successfully');
            addCards();
        }
    });

    function createCards(imagesSRC, text) {
        const cardDiv = document.createElement('div');
        cardDiv.className = 'col';

        const card = document.createElement('div');
        card.className = 'card';

        const img = document.createElement('img');
        img.className = 'card-img-top';
        img.src = imagesSRC;
        img.alt = 'Card image cap';

        const cardBody = document.createElement('div');
        cardBody.className = 'card-body';

        const cardText = document.createElement('p');
        cardText.className = 'card-text';
        cardText.textContent = text;

        cardBody.appendChild(cardText);
        card.appendChild(img);
        card.appendChild(cardBody);
        cardDiv.appendChild(card);

        return cardDiv;
    }

    function addCards() {
        const container = document.getElementById('cards-Container');
        const numberOfCards = 20;
        let divRow = document.createElement('div');
        divRow.className = 'row';

        for (var i = 0; i < numberOfCards; i++) {
            const imagesSRC = 'https://via.placeholder.com/150';
            const text = 'parking location';
            const card = createCards(imagesSRC, text);

            divRow.appendChild(card);

            if ((i + 1) % 4 === 0) {
                container.appendChild(divRow);
                divRow = document.createElement('div');
                divRow.className = 'row';
            }
        }

        if (divRow.children.length > 0) {
            container.appendChild(divRow);
        }
    }
});