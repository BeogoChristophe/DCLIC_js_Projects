// Récupérer l'élément d'affichage du résultat
var resultElement = document.getElementById('result');

// Fonction pour ajouter des caractères à l'affichage du résultat
function appendToResult(value) {
  resultElement.value += value;
}

// Fonction pour effacer l'affichage du résultat
function clearResult() {
  resultElement.value = '';
}

// Fonction pour calculer et afficher le résultat
function calculateResult() {
  var result = eval(resultElement.value); // Attention : l'utilisation de eval() peut présenter des risques de sécurité
  resultElement.value = result;
}
