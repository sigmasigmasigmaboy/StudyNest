<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Go to Google Classroom</title>
</head>
<body>
    <button id="goToClassroomButton">Go to Google Classroom</button>

    <script>
        // Select the button by its ID
        const button = document.getElementById('goToClassroomButton');

        // Add an event listener to the button
        button.addEventListener('click', function() {
            // Redirect to Google Classroom
            window.location.href = 'https://classroom.google.com';
        });
    </script>
</body>
</html>
