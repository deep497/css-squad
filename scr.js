function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Get form data
    const formData = new FormData(event.target);

    // Extracting data from form
    const collegeName = formData.get('college-name');
    const campusArea = formData.get('campus-area');
    const totalStudents = formData.get('total-students');

    // Displaying form data (you can modify this part based on your requirement)
    console.log('College Name:', collegeName);
    console.log('Campus Area:', campusArea);
    console.log('Total Students:', totalStudents);

    // You can perform further actions with the form data here, like sending it to a server using fetch() or AJAX
}

// Event listener to listen for form submission
document.querySelector('form').addEventListener('submit', handleFormSubmission);


    

    // Smooth scrolling for anchor links
    document.addEventListener('DOMContentLoaded', function() {
        const scrollLinks = document.querySelectorAll('a[href^="#"]');
        
        scrollLinks.forEach(scrollLink => {
            scrollLink.addEventListener('click', function(event) {
                event.preventDefault();

                const targetId = this.getAttribute('href');
                const targetPosition = document.querySelector(targetId).offsetTop;
                const startPosition = window.pageYOffset;
                const distance = targetPosition - startPosition;
                const duration = 1000; // Adjust the duration as needed
                let start = null;

                window.requestAnimationFrame(step);

                function step(timestamp) {
                    if (!start) start = timestamp;
                    const progress = timestamp - start;
                    window.scrollTo(0, easeInOutCubic(progress, startPosition, distance, duration));
                    if (progress < duration) window.requestAnimationFrame(step);
                }

                // Easing function
                function easeInOutCubic(t, b, c, d) {
                    t /= d / 2;
                    if (t < 1) return c / 2 * t * t * t + b;
                    t -= 2;
                    return c / 2 * (t * t * t + 2) + b;
                }
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const scrollLinks = document.querySelectorAll('.smooth-scroll');
    
        scrollLinks.forEach(scrollLink => {
            scrollLink.addEventListener('click', function(event) {
                event.preventDefault();
    
                const targetId = this.getAttribute('href');
                const targetPosition = document.querySelector(targetId).offsetTop;
    
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            });
        });
    });

    document.addEventListener('DOMContentLoaded', function() {
        const solutionsSection = document.getElementById('Our Solutions');
    
        // Intersection Observer
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    alert("Hover over solutions to get their brief description");
                }
            });
        }, {
            threshold: 0.5 // Adjust as needed
        });
    
        observer.observe(OurSolutionsSection);
    });




    