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
    desc: 'With current trends and consumers having less faith in media to report the truth, “Archer” is meant to be a crowdsourced polling application to give a fair consensus on topics with the ability to break down the data.',
    img: 'http://via.placeholder.com/1920x1080',
    tech_used: ['HTML5', 'CSS3', 'Material Design', 'JavaScript', 'React', 'Redux', 'Plotly', 'Python', 'MySQL', 'AWS'],
    status: [
      {
        value: 'in_progress',
        viewValue: 'Private Alpha',
        date: '03/11/2018'
      },
      {
        value: 'paused',
        viewValue: 'Paused',
        date: '04/01/2018'
      }
    ]
  },
  {
    viewValue: 'ResiSpeak',
    value: 'resispeak',
    desc: 'Description about ResiSpeak',
    img: 'http://via.placeholder.com/1920x1080',
    tech_used: ['html5', 'css3', 'javascript', 'jquery', 'c3'],
    status: 'Deployed'
  }
];