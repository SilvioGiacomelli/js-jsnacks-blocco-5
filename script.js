const zucchine = [

  {
    varieta : 'milano',
    peso : 2,
    lunghezza : 3,
  },
  {
    varieta : 'roma',
    peso : 3,
    lunghezza : 25,
  },
  {
    varieta : 'verona',
    peso : 12,
    lunghezza : 30,
  },
  {
    varieta : 'napoli',
    peso : 23,
    lunghezza : 4,
  },
  {
    varieta : 'palermo',
    peso : 1,
    lunghezza : 8,
  },
  {
    varieta : 'venezia',
    peso : 7,
    lunghezza : 9,
  },
  {
    varieta : 'catanzaro',
    peso : 8,
    lunghezza : 8,
  },
  {
    varieta : 'stoccolma',
    peso : 12,
    lunghezza : 12,
  },
  {
    varieta : 'pavia',
    peso : 1,
    lunghezza : 5,
  },
  {
    varieta : 'viterbo',
    peso : 8,
    lunghezza : 4,
  }
];

///Snack 1///
const pesoTot = zucchine.reduce((somma, zucchina) => {
  return somma + zucchina.peso;
}, 0);

console.log("Le zucchine pesano: " + pesoTot + "tonnellate");

///Snack 2///

const zucchineBig = zucchine.filter(function(zucchina) {
  return zucchina.lunghezza > 15;
});
const zucchineSmall = zucchine.filter(function(zucchina) {
  return zucchina.lunghezza < 15;
});

console.log(zucchineBig)
console.log(zucchineSmall)

const pesoSmall = zucchineSmall.reduce((somma, zucchina) =>{
  return somma + zucchina.peso;
}, 0);

console.log("Il peso delle zcchine corte è: " + pesoSmall + "tonnellate");

const pesoBig = zucchineBig.reduce((somma, zucchina) =>{
  return somma + zucchina.peso;
}, 0);

console.log("Il peso delle zucchine lunghe è: " + pesoBig + "tonnellate");

///Snack 3///

function ribaltamentoStringa(stringa) {
  return stringa.split('').reverse().join('');
}

console.log(ribaltamentoStringa("Pompelmo"));

///Snack 4///

const arrayUno = ['a','b','c','d','e','f'];
const arrayDue = [1, 2, 3, 4, 5, 6];

const arrayTre = [];

for (let i = 0; i < arrayUno.length; i++){
  arrayTre.push(arrayUno[i]);
  arrayTre.push(arrayDue[i]);
}

console.log(arrayTre);

///Snack 5///

const array = ['a','b','c','d','e','f','g','h','i','l','m'];
const alfA = 3;
const betA = 8;

function estrazioneArray(array, alfA, betA) {
  const sottoArray = [];

  for (let i = alfA; i <= betA; i++) {
    sottoArray.push(array[i]);
  }
  return sottoArray;
}

const risultato = estrazioneArray(array, alfA, betA);
console.log(risultato);