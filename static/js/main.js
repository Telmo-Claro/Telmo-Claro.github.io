// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor =>
{
    anchor.addEventListener('click', function (e)
    {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target)
        {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add active class to current navigation item
document.addEventListener('DOMContentLoaded', function ()
{
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link =>
    {
        if (link.getAttribute('href') === currentPath)
        {
            link.classList.add('active');
        }
    });
});

// Form validation
const contactForm = document.querySelector('.contact-form form');
if (contactForm)
{
    contactForm.addEventListener('submit', function (e)
    {
        const requiredFields = this.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field =>
        {
            if (!field.value.trim())
            {
                isValid = false;
                field.classList.add('error');
            } else
            {
                field.classList.remove('error');
            }
        });

        if (!isValid)
        {
            e.preventDefault();
            alert('Please fill in all required fields.');
        }
    });
} 