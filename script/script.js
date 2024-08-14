document.getElementById('encryptButton').addEventListener('click', function() {
    const inputText = document.getElementById('inputText').value;
    if (inputText.trim() === "") {
        alert('Por favor, ingresa un texto para encriptar.');
    } else {
        encriptar();
        document.getElementById('background').style.display = 'none';
        //alert('Texto encriptado con éxito!');
    }
});

document.getElementById('decryptButton').addEventListener('click', function() {
    const encryptedText = document.getElementById('outputText').innerText;
    if (encryptedText.trim() === "") {
        alert('No hay texto encriptado para desencriptar.');
    } else {
        desencriptar();
        //alert('Texto desencriptado con éxito!');
    }
});

document.getElementById('copyButton').addEventListener('click', function() {
    const encryptedText = document.getElementById('outputText').innerText;
    navigator.clipboard.writeText(encryptedText).then(function() {
        alert('Texto copiado al portapapeles');
    }, function(err) {
        console.error('Error al copiar el texto: ', err);
    });
});

function encriptar() {
    const inputText = document.getElementById('inputText').value;
    const encryptedText = btoa(inputText); // Encriptar usando Base64
    document.getElementById('outputText').innerText = encryptedText;
}

function desencriptar() {
    const encryptedText = document.getElementById('outputText').innerText;
    const decryptedText = atob(encryptedText); // Desencriptar usando Base64
    document.getElementById('outputText').innerText = decryptedText;
}

document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('inputText').value = ''; // Limpia el campo de texto
    document.getElementById('outputText').innerText = ''; // También puedes limpiar el resultado si es necesario
	document.getElementById('background').style.display = 'block';
});