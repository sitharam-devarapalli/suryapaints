// book visit popup js 
document.querySelector('.Book-free-site-open').addEventListener('click', function (e) {
    e.preventDefault();
    document.getElementById('popupForm').style.display = 'flex';
});

// Popup close
document.querySelector('.book-free-site-close').addEventListener('click', function () {
    document.getElementById('popupForm').style.display = 'none';
});
document.querySelector('.Book-free-site-submit').addEventListener('click', function (e) {
    e.preventDefault();

    // Get input values
    const name = document.querySelector('input[placeholder="Your Full Name"]').value.trim();
    const email = document.querySelector('input[placeholder="Eg: myname@gmail.com"]').value.trim();
    const phone = document.querySelector('input[placeholder="10 digits"]').value.trim();
    const pin = document.querySelector('input[placeholder="6 digit PIN code"]').value.trim();

    // Get Yes/No answers
    const renovationAnswer = document.querySelectorAll('.yes-no-question')[0].querySelector('.yesNo.active')?.innerText || 'Not answered';
    const painterAnswer = document.querySelectorAll('.yes-no-question')[1].querySelector('.yesNo.active')?.innerText || 'Not answered';

    // Create WhatsApp message
    const message = `Hello, I would like to book a free site visit.
    
Name: ${name}
Email: ${email}
Phone: ${phone}
PIN Code: ${pin}
Started Renovation: ${renovationAnswer}
Hired Local Painter: ${painterAnswer}`;

    const encodedMessage = encodeURIComponent(message);

    // Replace with your WhatsApp number (use international format, no + or spaces)
    const whatsappNumber = '918019812939';

    // Redirect to WhatsApp
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
});

document.querySelectorAll('.yesNo').forEach(btn => {
    btn.addEventListener('click', function () {
        const group = this.closest('.yes-no-question');
        group.querySelectorAll('.yesNo').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});


// review and teams section js in surya paints
$(function () {
    // Team Slider
    $('.sr-teams-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
    });
    $('.team-prev').click(() => $('.sr-teams-slider').slick('slickPrev'));
    $('.team-next').click(() => $('.sr-teams-slider').slick('slickNext'));

    // Review Slider
    $('.sr-review-slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        arrows: false,
        dots: false,
        responsive: [
            { breakpoint: 992, settings: { slidesToShow: 2 } },
            { breakpoint: 576, settings: { slidesToShow: 1 } }
        ]
    });
    $('.review-prev').click(() => $('.sr-review-slider').slick('slickPrev'));
    $('.review-next').click(() => $('.sr-review-slider').slick('slickNext'));
});

