document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("in-view");
                observer.unobserve(entry.target)
            }
            // entry.target.classList.remove("in-view");
        });
    });

    const animatedElements = document.querySelectorAll(".animate");

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
