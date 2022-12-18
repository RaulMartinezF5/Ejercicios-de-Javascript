var n1 = prompt ("Escribe un numero");
    var n2 = prompt ("Escribe otro numero");
    var n3 = prompt ("Escribe otro numero");
    if (n1 > n2 && n1 > n3) {
        document.write(n1);
    } else if (n2 > n3) {
        document.write(n2);
    } else {
        document.write (n3);
    }