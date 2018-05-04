export const worksService = {
  allWorks,
  getWork
};

function allWorks() {
  return data;
}

function getWork(item) {
  return data.find(i => i.value = item);
}

const data = [
  {
    viewValue: 'Project Code Named "Archer"',
    value: 'archer',
    desc: 'Description about Archer'
  },
  {
    viewValue: 'ResiSpeak',
    value: 'resispeak',
    desc: 'Description about ResiSpeak'
  }
]