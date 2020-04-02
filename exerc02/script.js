let beberAgua = setTimeout(function tick() {
    alert('Beba agua!');
    beberAgua = setTimeout(tick, 60000);
}, 60000)