//function mayorymenorypar(num) { 
//    if (num > 5 && num < 10 && num % 2===0 )console.log(true);
//    else console.log(false); 
//}

//mayorymenorypar(2);
//mayorymenorypar(8);


function operadorOR (str){
    if (str === 'Henry' || str.lenght<2) console.log(true);
    else console.log(false);
}

operadorOR('Henry')

function negacion(permiso) {
    if (permiso) console.log('Tiene permiso')
};

negacion(true)
negacion(false)


function condicioncompleja(num) {
    if(num > 9 && num % 2 === 0 || num === 3)console.log(true);
    else console.log(false);
}

condicioncompleja(10)
condicioncompleja(6)
condicioncompleja(3)
condicioncompleja(5)