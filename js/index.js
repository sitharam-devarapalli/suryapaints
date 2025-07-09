// paint home whatsapp form js 
function openWhatsApp() {
    let name = document.getElementById("name").value;
    let mobile = document.getElementById("mobile").value;
    let pincode = document.getElementById("pincode").value;
    let email = document.getElementById("email").value;

    if (!name || !mobile || !pincode || !email) {
        alert("Please fill all required fields.");
        return;
    }

    let whatsappNumber = "8019812939"; // Set your fixed WhatsApp number
    let message = `Hello, I want to book a free site visit. Here are my details:%0A%0A` +
        `Name: ${name}%0A` +
        `Mobile: ${mobile}%0A` +
        `PIN Code: ${pincode}%0A` +
        `Email: ${email}`;

    let whatsappURL = `https://wa.me/918019812939${whatsappNumber}?text=${message}`;
    window.open(whatsappURL, "_blank");
}


// home page numbers count js
document.addEventListener("DOMContentLoaded", function () {
    function startCounter(entries, observer) {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const counters = document.querySelectorAll(".counter");
                counters.forEach((counter) => {
                    let start = 0;
                    let end = parseInt(counter.getAttribute("data-count"));
                    let duration = 4000;
                    let increment = Math.ceil(end / (duration / 16));
                    let updateCounter = () => {
                        start += increment;
                        if (start >= end) {
                            counter.textContent = end;
                        } else {
                            counter.textContent = start;
                            requestAnimationFrame(updateCounter);
                        }
                    };
                    updateCounter();
                });
                observer.disconnect();
            }
        });
    }
    let observer = new IntersectionObserver(startCounter, { threshold: 0.5 });
    observer.observe(document.querySelector(".homecounter-container"));
});



// Banner quatation whats app js 
document.getElementById("whatsappForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mobile = document.getElementById("mobile").value;
    let pincode = document.getElementById("pincode").value;
    let construction = document.querySelector('input[name="construction"]:checked').value;
    let painter = document.querySelector('input[name="painter"]:checked').value;
    let serviceType = document.getElementById("serviceType").value;

    let bannerIntro = `New Painting Quote Request: ${serviceType}%0A`;

    let message = `${bannerIntro}Name: ${name}%0AEmail: ${email}%0AMobile: ${mobile}%0APIN Code: ${pincode}%0AConstruction: ${construction}%0APainter Hired: ${painter}`;

    let whatsappURL = `https://api.whatsapp.com/send?phone=918019812939&text=${message}`;

    window.open(whatsappURL, "_blank");
});




// faqs section js 
// Toggle Plus (+) and Minus (-) on Click
document.querySelectorAll('.painthomefaqs-question').forEach((btn) => {
    btn.addEventListener('click', function () {
        let icon = this.querySelector('.faq-icon');
        let isOpen = this.classList.contains('collapsed');

        // Reset all icons to "+"
        document.querySelectorAll('.faq-icon').forEach(i => i.textContent = "+");

        if (!isOpen) {
            icon.textContent = "−";
        }
    });
});


// review section js 
var myCarousel = new bootstrap.Carousel(document.getElementById('painthomereview-carousel'), {
    interval: 3000, // Slide every 4 seconds
    wrap: true,
    pause: false
});



// logos inner page js 
function showProductPage(brandId, event) {
    event.preventDefault(); // 💥 this stops the scroll to top

    // Hide all product pages
    const allProductPages = document.querySelectorAll('.product-page');
    allProductPages.forEach(page => page.style.display = 'none');

    // Hide brand logos section
    document.getElementById('brandsSection').style.display = 'none';

    // Show selected brand product page
    document.getElementById(brandId).style.display = 'block';
}

function goBack() {
    // Hide all product pages
    const allProductPages = document.querySelectorAll('.product-page');
    allProductPages.forEach(page => page.style.display = 'none');

    // Show brand logos section
    document.getElementById('brandsSection').style.display = 'block';
}

function shareOnWhatsApp(productName) {
    const message = `Check out this paint product: ${productName}`;
    const url = `https://wa.me/918019812939?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
}



// contact us client mail code 
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission

    // Collect form data
    var firstName = document.getElementById("first_name").value;
    var lastName = document.getElementById("last_name").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var message = document.getElementById("message").value;

    // Construct the mailto URL
    var mailtoLink = "mailto:suryapaintseluru@gmail.com?subject=Contact%20Form%20Submission&body=" +
        "First%20Name%3A%20" + encodeURIComponent(firstName) + "%0D%0A" +
        "Last%20Name%3A%20" + encodeURIComponent(lastName) + "%0D%0A" +
        "Email%3A%20" + encodeURIComponent(email) + "%0D%0A" +
        "Phone%3A%20" + encodeURIComponent(phone) + "%0D%0A" +
        "Message%3A%20" + encodeURIComponent(message);

    // Open the email client
    window.location.href = mailtoLink;
});



// sub logos navigate the inner page js 
  
  