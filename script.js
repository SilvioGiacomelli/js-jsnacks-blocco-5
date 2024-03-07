const zucchine = [

  {
    varieta : 'milano',
    peso : 2,
    lunghezza : 3,
  },
  {
    varieta : 'roma',
    peso : 3,
    lunghezza : 2,
  },
  {
    varieta : 'verona',
    peso : 12,
    lunghezza : 3,
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

const pesoTot = zucchine.reduce((totale, zucchina) => {
  return totale + zucchina.peso;
}, 0);

console.log("Il totale del peso delle zucchine è: " + pesoTot + "kg");