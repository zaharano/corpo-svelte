function generateEnemy() {
  const FIRSTS = [
    'Alfred',
    'Reginald',
    'Jonathan',
    'Francis',
    'Kemberly',
    'Julianna',
    'Reese',
    'Horace',
    'Polly',
    'Charlotte',
    'Chanel',
    'Peregrine',
  ];
  const MIS = ['J.', 'P.J.', 'K.', 'F.', 'Q.'];
  const LASTS = [
    'Wintermute',
    'Cantelbra',
    'Acrobottom',
    'Astorford',
    'Rallento',
    'Fauntelroy',
    'Pantelfance',
    'Upperton',
    'Winthrope',
  ];
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return `${getRandom(FIRSTS)} ${getRandom(MIS)} ${getRandom(LASTS)}`;
}

export default generateEnemy;
