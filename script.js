document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let userInput = document.getElementById('userInput').value;
    alert("Merci pour votre message : " + userInput);
    // Ici, vous pouvez ajouter des appels API pour interagir avec [💻.quantumEcho] ou effectuer d'autres actions.
});
