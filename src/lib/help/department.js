function generateDepartment() {
  const PREFIXES = [
    'Consumer',
    'Applied',
    'Heavy',
    'Agile',
    'Advanced',
    'Artificial',
    'Offworld',
  ];
  const SUFFIXES = [
    'Nanotech',
    'Logistics',
    'Applications',
    'Biotech',
    'Infotech',
    'Intelligence',
    'Innovations',
  ];
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return `${getRandom(PREFIXES)} ${getRandom(SUFFIXES)}`;
}

export default generateDepartment;
