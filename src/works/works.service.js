export const worksService = {
  allWorks,
  getWork
};

function allWorks() {
  return data;
}

function getWork(item) {
  return data.find(i => i.value === item);
}

const data = [
  {
    viewValue: 'Project Code Named "Archer"',
    value: 'archer',
    desc: 'Description about Archer',
    img: 'http://via.placeholder.com/1920x1080',
    tech_used: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Redux', 'Python', 'AWS']
  },
  {
    viewValue: 'ResiSpeak',
    value: 'resispeak',
    desc: 'Description about ResiSpeak',
    img: 'http://via.placeholder.com/1920x1080',
    tech_used: ['html5', 'css3', 'javascript', 'jquery', 'c3']
  }
];