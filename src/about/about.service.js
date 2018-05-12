export const aboutService = {
  allItems,
  getItem
}

function allItems() {
  return data;
}

function getItem(item) {
  return data.find(i => i.value === item);
}

const data = [
  {
    viewValue: 'Software Developer',
    value: 'software_developer',
    desc: 'Description for software developer'
  },
  {
    viewValue: 'Bowler',
    value: 'bowler',
    desc: 'Description for bowler'
  },
  {
    viewValue: 'Disc Golf',
    value: 'disc_golf',
    desc: 'Description for disc golf'
  },
  {
    viewValue: 'Disc Golf',
    value: 'disc_golf',
    desc: 'Description for disc golf'
  },
  {
    viewValue: 'Disc Golf',
    value: 'disc_golf',
    desc: 'Description for disc golf'
  }
];