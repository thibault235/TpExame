<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Frontend - Azure Web App</title>
    <script>
        async function fetchData() {
            try {
                const response = await fetch('http://votre-backend.azurewebsites.net/data');
                const data = await response.json();
                document.getElementById('data').innerText = JSON.stringify(data, null, 2);
            } catch (err) {
                console.error('Erreur lors de la récupération des données', err);
            }
        }

        async function sendData() {
            const info = document.getElementById('info').value;
            // Vous ajouteriez ici un appel à une route POST du backend pour envoyer des données
            console.log(`Envoyer les informations: ${info}`);
        }
    </script>
</head>
<body>
    <h1>Azure Frontend</h1>
    <button onclick="fetchData()">Récupérer les données</button>
    <pre id="data"></pre>

    <h2>Envoyer des informations</h2>
    <input type="text" id="info" placeholder="Entrez des informations">
    <button onclick="sendData()">Envoyer</button>
</body>
</html>
