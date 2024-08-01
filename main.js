var a = 0;
var b = 0;
var c = 0;

function pad(number) {
    return number.toString().padStart(2, '0');
}

function hello() {
    a++;
    if (a > 59) {
        a = 0;
        b++;
        if (b > 59) {
            b = 0;
            c++;
        }
    }
    document.getElementById('timer').innerText = `${pad(c)}:${pad(b)}:${pad(a)}`;
}

function setInt() {
    x = setInterval(hello, 500);
}

function clrint() {
    clearInterval(x);
}

function resint() {
    clearInterval(x);
    a = 0;
    b = 0;
    c = 0;
}
