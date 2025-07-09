// about us  section numbers count js 
function countUp(el, target, duration) {
    let start = 0;
    const stepTime = Math.abs(Math.floor(duration / target));
    const counter = setInterval(() => {
        start++;
        el.textContent = start;
        if (start >= target) {
            clearInterval(counter);
        }
    }, stepTime);
}

window.addEventListener('DOMContentLoaded', () => {
    const counterEl = document.getElementById('experienceCounter');
    const targetValue = 15;
    countUp(counterEl, targetValue, 1000); // 1 second animation
});


// our projects tabs section js 
document.addEventListener("DOMContentLoaded", function () {
    const filterButtons = document.querySelectorAll(".infrahomeprojects-tabs button");
    const filterItems = document.querySelectorAll(".filter-item");

    filterButtons.forEach(btn => {
        btn.addEventListener("click", function () {
            // Remove active from all
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            const filter = this.getAttribute("data-filter");

            filterItems.forEach(item => {
                if (filter === "all") {
                    item.classList.add("show");
                } else {
                    if (item.classList.contains(filter)) {
                        item.classList.add("show");
                    } else {
                        item.classList.remove("show");
                    }
                }
            });
        });
    });

    // Trigger default filter
    document.querySelector("[data-filter='all']").click();
});

// number count section js 
const counters = document.querySelectorAll('.infrahomecount1-number');
const speed = 200; // lower = faster

counters.forEach(counter => {
    const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;

        const inc = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + inc);
            setTimeout(updateCount, 20);
        } else {
            counter.innerText = target.toLocaleString() + '+';
        }
    };

    updateCount();
});


// home to service page navigation js 
document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;
    if (hash) {
        const tabTrigger = document.querySelector(`a[href="${hash}"]`);
        if (tabTrigger) {
            new bootstrap.Tab(tabTrigger).show();

            // Optional: Smooth scroll to tab content
            const tabContent = document.querySelector(hash);
            if (tabContent) {
                tabContent.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {
    const hash = window.location.hash;
    if (hash) {
        const targetTab = document.querySelector(`a[href="${hash}"]`);
        if (targetTab) {
            new bootstrap.Tab(targetTab).show();
        }
    }
});