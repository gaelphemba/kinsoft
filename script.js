const container = document.querySelector(".container");
const registerBtn = document.querySelector(".registerBtn");
var form = document.getElementById("formula");
var btn = document.getElementById("sub")

var bod = document.getElementById("bod");

registerBtn.addEventListener("click",()=>{
    container.classList.add("active");

    new QRCode(document.getElementById("qrcode"), {
        text: "https://example.com",
        width: 200,
        height: 200,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });

    
    // btn.style.cssText='visibility: hidden; display: none;';
    document.getElementById("qrcode").style.cssText="display: flex;justify-content: center; align-items: center;";
});

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    fetch(form.action,{
        method: "POST",
        body: new FormData(document.getElementById("formula")),
    }).then(
        response => response.json()
    ).then((html)=>{
         bod.style.cssText="background: url('confetis.gif')";
         form.style.cssText='visibility: hidden; display: none;';
        setTimeout(() =>{
            bod.style.cssText="background: none";
            alert("Enregistrement terminée!! 😃​ Merci​ "+document.getElementById("firstname").value+" veillez passer au centre");

        }, 1350);
    });

});
