function generateQR() {
    var text = document.getElementById("qr-text").value;
    var qrcodeContainer = document.getElementById("qrcode");

    // Clear the QR code container before generating a new one
    qrcodeContainer.innerHTML = "";

    // Generate QR code with the input text
    var qrcode = new QRCode(qrcodeContainer, {
        text: text,
        width: 128,
        height: 128
    });

    // Show the Download and Reset buttons after generating the QR code
    document.getElementById("buttons").style.display = "block";
}

function resetQR() {
    // Clear the QR code container and hide buttons
    document.getElementById("qrcode").innerHTML = "";
    document.getElementById("buttons").style.display = "none";
}

function downloadQR() {
    // Get the QR code canvas element and create a download link
    var qrCanvas = document.querySelector("#qrcode canvas");

    if (qrCanvas) {
        var dataURL = qrCanvas.toDataURL("image/png");
        var link = document.createElement("a");
        link.href = dataURL;
        link.download = "qrcode.png";
        link.click();
    }
}

// Attach event listeners to buttons
document.querySelector(".download-btn").addEventListener("click", downloadQR);
document.querySelector(".reset-btn").addEventListener("click", resetQR);
