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
  function getRandomItem(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return `${getRandomItem(PREFIXES)} ${getRandomItem(SUFFIXES)}`;
}

export default generateDepartment;
