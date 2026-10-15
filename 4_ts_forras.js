"use strict";
function osszesOszto(szam) {
    var osztok = [];
    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}
function parosDarab(tomb) {
    var parosSzam = 0;
    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            parosSzam++;
        }
    }
    return parosSzam;
}
function fuggvenyhivasPalindrom(callback) {
    var szoveg = callback();
    var szovegEredeti = "";
    var szovegVissza = "";
    for (var i = 0; i < szoveg.length; i++) {
        if (szoveg.charAt(i) != " ") {
            szovegEredeti = szovegEredeti.concat(szoveg.charAt(i));
        }
    }
    for (var i = szoveg.length - 1; i >= 0; i--) {
        if (szoveg.charAt(i) != " ") {
            szovegVissza = szovegVissza.concat(szoveg.charAt(i));
        }
    }
    return szovegEredeti == szovegVissza;
}
// tsc 4_ts_forras.ts
