function generateDepartment() {
  const PREFIXES = [
    'Consumer',
    'Applied',
    'Heavy',
    'Agile',
    'Advanced',
    'Artificial',
    'Offworld',
    'Flubber',
    '"Defence"',
  ];
  const SUFFIXES = [
    'Nanotech',
    'Logistics',
    'Applications',
    'Biotech',
    'Infotech',
    'Intelligence',
    'Innovations',
    'Robotics',
  ];
  function getRandom(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
  }

  return `${getRandom(PREFIXES)} ${getRandom(SUFFIXES)}`;
}

export default generateDepartment;
