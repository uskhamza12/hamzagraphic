document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form fields
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Basic validation
    if (name && email && message) {
        alert(`Thank you, ${name}! Your message has been sent.`);
        // Reset form after submission
        this.reset();
    } else {
        alert
