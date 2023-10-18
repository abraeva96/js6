let son = +prompt('sonni kiriting:');
let daraja = +prompt('darajani kiriting:');

let s = 1

for (let i = 0; i <= s; i++) {
    if (isNaN(son) || son === 0) {
        son = +prompt('sonni qaytadan kiriting:')
        s++
    } else if (isNaN(daraja) || daraja === 0) {
        daraja = +prompt('Darajani qaytadan kiriting')
        s++
    } else {
        alert(son ** daraja);
    }
}