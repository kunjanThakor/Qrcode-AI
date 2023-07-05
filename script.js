const generateQr = () => {
    debugger;
    let url = document.getElementById('url');
    let qr = document.querySelector('#qr');
    let btnClr = document.querySelector('#clr');
    qr.style = "visibility: visible";
    qr.src = "https://api.qrserver.com/v1/create-qr-code/?data=" + url.value;
    url.value='';
    btnClr.style = "visibility: visible";
}

const reset=()=>{
    let qr = document.querySelector('#qr');
    let btnClr = document.querySelector('#clr');
    qr.style = "visibility: hidden";
    btnClr.style = "visibility: hidden";
}