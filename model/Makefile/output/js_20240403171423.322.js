Bien sûr, voici le code JavaScript que vous pouvez placer dans votre fichier script.js pour afficher un message dans la console lorsque la page d'index est chargée :

<script>
document.addEventListener('DOMContentLoaded', function() {
console.log('La page d\'index a été chargée avec succès !');
});
</script>

Ce code utilise l'événement `DOMContentLoaded` pour écouter le moment où le contenu HTML de la page a été entièrement chargé. Lorsque cela se produit, il affiche un message dans la console.