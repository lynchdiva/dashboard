const progressData = `[
{"subject": "computer science", "progress": 45},
{"subject": "UX design", "progress": 28}]`;

let progressValue = [];

try {
  progressValue = JSON.parse(progressData);
} catch (error) {
  console.log(error);
}

const computerScienceProgressDiv = document.querySelector(
  '#computer-science-progress'
);
const UXdesignProgressDiv = document.querySelector('#ux-design-progress');

const computerScienceProgress = progressValue.find(obj => {
  return obj.subject === 'computer science';
});

const UXdesignProgress = progressValue.find(obj => {
  return obj.subject === 'UX design';
});

const barComputerScience = new ProgressBar.Circle(computerScienceProgressDiv, {
  color: '#aaa',
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#5855d6', width: 10 },
  to: { color: '#5855d6', width: 10 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100) + '%';
    if (value === 0) {
      circle.setText('0%');
    } else {
      circle.setText(value);
    }
  }
});

barComputerScience.text.style.fontFamily = "'Red Hat Display', sans-serif";
barComputerScience.text.style.fontSize = '1.5rem';
barComputerScience.text.style.fontWeight = '700';

barComputerScience.animate(computerScienceProgress.progress / 100);

const barUXdesign = new ProgressBar.Circle(UXdesignProgressDiv, {
  color: '#aaa',
  strokeWidth: 10,
  trailWidth: 10,
  easing: 'easeInOut',
  duration: 1400,
  text: {
    autoStyleContainer: false
  },
  from: { color: '#5855d6', width: 10 },
  to: { color: '#5855d6', width: 10 },
  step: function (state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    let value = Math.round(circle.value() * 100) + '%';
    if (value === 0) {
      circle.setText('0%');
    } else {
      circle.setText(value);
    }
  }
});

barUXdesign.text.style.fontFamily = "'Red Hat Display', sans-serif";
barUXdesign.text.style.fontSize = '1.5rem';
barUXdesign.text.style.fontWeight = '700';

barUXdesign.animate(UXdesignProgress.progress / 100);
