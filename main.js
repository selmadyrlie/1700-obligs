

const billetter = [];

let filmValg;

function kjøpBillett() {
    filmValg = document.getElementById("filmTitle").value;
    let antall = document.getElementById("antall").value;
    let fornavn = document.getElementById("fNavn").value;
    let etternavn = document.getElementById("eNavn").value;
    let epost = document.getElementById("epost").value;
    let telefonnummer = document.getElementById("tlf").value;


    //checks if all input fields are filled in
    if (antall <= 0 || !antall) {
        alert("Ugyldig antall billetter");
    } else {
        if (!filmValg) {
            alert("Du må velge en film! >:(")
        } else if (!fornavn) {
            alert("Du må fylle inn et fornavn! >:(")
        } else if (!etternavn) {
            alert("Du må fylle inn et etternavn! >:(")
        } else if (!telefonnummer) {
            alert("Du må fylle inn et telefonnummer! >:(")
        } else if (!epost) {
            alert("Du må fylle inn en epostadresse! >:(")
        } else {
            //creates a ticket object
            for (let i = 0; i < antall; i++) {
                const enBillett = {
                    film : filmValg,
                    fornavn : fornavn,
                    etternavn : etternavn,
                    epost : epost,
                    telefonnummer : telefonnummer
                };
                billetter.push(enBillett);
            }
            visKjøpte();
        }
    }
}


// writes out the bought tickets under 'Alle billetter'
function visKjøpte() {
    const alleBilletter = document.getElementById("alleBilletter");
    alleBilletter.innerHTML = "";

    for (let i = 0; i < billetter.length; i++) {
        const b = billetter[i];
        alleBilletter.innerHTML += (`Billett nummer ${i + 1}: <br> Film: ${b.film}, Navn: ${b.fornavn} ${b.etternavn}, tlf ${b.telefonnummer}, epost: ${b.epost}<br><br>`);
    }
}

//deletes all bought tickets from array
function slett() {
    billetter.length = 0;
    filmValg = "";
    visKjøpte();
}




