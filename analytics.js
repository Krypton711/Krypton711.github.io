// Track click events
document.addEventListener('click', function(event) {
    const timestamp = new Date().toISOString();
    const target = event.target;

    const elementType = target.tagName.toLowerCase();
    const label = target.getAttribute('data-label') || elementType;

    console.log(`${timestamp}, click, ${label}`);
});

// Track page view on load
window.addEventListener('load', () => {
    const timestamp = new Date().toISOString();
    console.log(`${timestamp}, view, page`);
});

// Track section views with IntersectionObserver
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const timestamp = new Date().toISOString();
            const label = entry.target.getAttribute('data-label') || entry.target.className || entry.target.tagName.toLowerCase();
            console.log(`${timestamp}, view, ${label}`);
        }
    });
}, { threshold: 0.5 });

// Select sections you want to track
document.querySelectorAll('.content-block, .kw_pics, .profile-container').forEach(section => {
    observer.observe(section);
});
