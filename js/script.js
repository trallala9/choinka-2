function drawTree(h) {
    for (var i = 0; i <= h; i++) {
        var star = "";
        for (var j = 1; j <= 2 * i + 1; j++) {
            star += "*";
        }
        console.log("%c%s", "font-size: 20px; color: green",
            star);
    }
}
drawTree(8)

var h = 8;
for (let i = 0; i < h; i++) {
    for (let j = h - 1; j > i; j--) {
        document.write("&nbsp&nbsp");
    }
    for (let k = 0; k <= (i * 2); k++) {
        document.write("*");
    }
    document.write("<br>");
}
for (let i = 0; i < 2; i++) {
    for (let j = 0; j < (h * 2) - 3; j++) {
        document.write("&nbsp");
    }
    document.write("*<br>");
}
