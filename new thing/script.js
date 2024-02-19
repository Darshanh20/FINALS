function personalizePage() {
    const userName = document.getElementById('nameInput').value;
    if (userName.trim() !== '') { // Check if the input is not just whitespace
        document.getElementById('userName').textContent = userName;
    } else {
        alert('Please enter a valid name.');
    }
}

// Optional: Listen for enter key in the input field to submit
document.getElementById('nameInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        personalizePage();
    }
});




