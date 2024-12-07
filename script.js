// Select the button by its ID
const button = document.getElementById('goToClassroomButton');

// Add an event listener to the button
button.addEventListener('click', function() {
    // Redirect to Google Classroom
    window.location.href = 'https://classroom.google.com';
});
