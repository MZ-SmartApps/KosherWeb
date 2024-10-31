function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const form = event.target;
    const formData = new FormData(form);

    // Send form data to FormSubmit
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            Accept: 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            alert('Thank you! Your message has been sent successfully.');
            form.reset(); // Reset the form
        } else {
            alert('There was an error sending your message. Please try again.');
        }
    })
    .catch(error => {
        alert('There was a problem with the submission: ' + error.message);
    });
}
