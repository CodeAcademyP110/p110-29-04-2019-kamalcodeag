const c = document.getElementById("can");
const ctx = c.getContext("2d");

let canvasW = c.width;
let canvasH = c.height;

let rectW = 100;
let rectH = 100;

let mx = 30;
let my = 30;

let x = 20;
let y = 20;
let counter = 1;

while(x + rectW + mx <= canvasW)
{
    while(y + rectH + my <=  canvasH)
    {
        ctx.moveTo(x, y);
        ctx.font = "10px Arial";
        ctx.fillText(counter++, x + rectW / 2, y - 5);
        ctx.fillStyle = "#000000";
        // ctx.strokeRect(x, y, rectW, rectH);
        ctx.arc(x + rectW/2, y + rectH / 2, 50, 0, Math.PI);
        ctx.fill();
        y += rectH + my;
    }
    x += rectW + mx;
    y = 20;
}

const mobilePhonePattern = 
// new RegExp(/^[55|50|70|77|51|60]{1}[ -]?[2-9]{1}\d{2}[ -]?\d{2}[ -]?\d{2}$/);
    new RegExp(/[994|465464]{1}[ -]?[55|50|70|77|51|60]{1}[ -]?[2-9]{1}\d{2}[ -]?\d{2}[ -]?\d{2}/);

const phoneNumber = "994 50-555-55-55";

console.log(mobilePhonePattern.test(phoneNumber));







