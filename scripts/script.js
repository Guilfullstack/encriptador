// Função para criptografar o texto
function encryptText(text) {
    return text
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');
}

// Função para descriptografar o texto
function decryptText(text) {
    return text
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');
}

// Função para lidar com a criptografia
function handleEncrypt() {
    const inputText = document.getElementById('inputText').value.toLowerCase();
    const outputSection = document.querySelector('.output-section p');
    if (inputText) {
        outputSection.textContent = encryptText(inputText);
        document.getElementById('decryptButton').classList.remove('disabled');
    }
}

// Função para lidar com a descriptografia
function handleDecrypt() {
    const inputText = document.querySelector('.output-section p').textContent.toLowerCase();
    const outputSection = document.querySelector('.output-section p');
    if (inputText) {
        outputSection.textContent = decryptText(inputText);
    }
}

/// Função para copiar o texto para a área de transferência
function copyToClipboard() {
    const outputText = document.querySelector('.output-section p').textContent;
    if (outputText) {
        const textArea = document.createElement('textarea');
        textArea.value = outputText;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        alert('Texto copiado para a área de transferência!');
    } else {
        alert('Nenhum texto para copiar!');
    }
}

// Adicionando os ouvintes de eventos aos botões
document.getElementById('encryptButton').addEventListener('click', handleEncrypt);
document.getElementById('decryptButton').addEventListener('click', handleDecrypt);
document.getElementById('copyButton').addEventListener('click', copyToClipboard);


/*

function criptografar(texto) {
    return texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
}

function descriptografar(texto) {
    return texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
}

function criptografarTexto() {
    const texto = document.getElementById("inputTexto").value.toLowerCase();
    document.getElementById("outputTexto").value = criptografar(texto);
}

function descriptografarTexto() {
    const texto = document.getElementById("inputTexto").value.toLowerCase();
    document.getElementById("outputTexto").value = descriptografar(texto);
}

function copiarTexto() {
    const textoCopiado = document.getElementById("outputTexto");
    textoCopiado.select();
    document.execCommand("copy");
}
*/