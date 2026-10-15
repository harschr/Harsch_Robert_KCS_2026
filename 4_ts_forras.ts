function osszesOszto(szam: number): number[] {
    var osztok: number[] = [];

    for (var i = 1; i <= szam; i++) {
        if (szam % i == 0) {
            osztok.push(i);
        }
    }
    return osztok;
}

function parosDarab(tomb: number[]): number {
    var parosSzam: number = 0;

    for (var i = 0; i < tomb.length; i++) {
        if (tomb[i] % 2 == 0) {
            parosSzam++
        }
    }
    return parosSzam;
}

function fuggvenyhivasPalindrom(callback: () => string): boolean {

    var szoveg: string = callback();
    var szovegEredeti: string = "";
    var szovegVissza: string = "";

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