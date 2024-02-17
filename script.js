document.addEventListener('DOMContentLoaded', function () {
    // Initialize Flickity slider
    var flkty = new Flickity('.content-slider', {
        cellAlign: 'left',
        contain: true,
        wrapAround: true,
        autoPlay: 3000, // Auto-play every 3 seconds
        pageDots: true,
    });

    // Optional: Add navigation buttons
    var prevBtn = document.createElement('');
    prevBtn.innerText = 'Previous';
    prevBtn.addEventListener('click', function () {
        flkty.previous();
    });

    var nextBtn = document.createElement('');
    nextBtn.innerText = 'Next';
    nextBtn.addEventListener('click', function () {
        flkty.next();
    });

    var buttonsContainer = document.createElement('div');
    buttonsContainer.classList.add('buttons-container');
    buttonsContainer.appendChild(prevBtn);
    buttonsContainer.appendChild(nextBtn);

    // Append buttons to the Flickity slider container
    document.querySelector('.content-slider').appendChild(buttonsContainer);
});


document.addEventListener('DOMContentLoaded', function () {
    const accordionItems = document.querySelectorAll('.mobile-accordion [data-slide-num]');

    accordionItems.forEach(item => {
        item.classList.remove('js-is-active');
    });

    function showAccordionItem(index) {
        accordionItems.forEach(item => {
            item.classList.remove('js-is-active');
        });

        const activeItem = accordionItems[index];
        activeItem.classList.add('js-is-active');
    }

    const accordionHeaders = document.querySelectorAll('.mobile-accordion h4');

    accordionHeaders.forEach((header, index) => {
        header.addEventListener('click', function () {
            showAccordionItem(index);
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get the form element
    var form = document.getElementById("my_custom_form");
    var signUpButton = document.getElementById("gform_submit_button_1");

    signUpButton.addEventListener("click", function () {
        document.getElementById("gform_1").submit();
    });

   
    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        alert("Form submitted successfully!");

       
        form.reset();
    });
});










