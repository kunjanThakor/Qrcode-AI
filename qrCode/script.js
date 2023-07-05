const generateQr = () => {
    debugger;
    let url = document.getElementById('url');
    let qr = document.querySelector('#qr');
    qr.style = "visibility: visible";
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + url.value;
    url.value='';
}