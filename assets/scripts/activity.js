const computerScienceActivity = `[
  {"day": "Mon", "count": 6 },
  {"day": "Tue", "count": 8 },
  {"day": "Wed", "count": 12 },
  {"day": "Thur", "count": 4 },
  {"day": "Fri", "count": 7 },
  {"day": "Sat", "count": 10 },
  {"day": "Sun", "count": 1 }
]`;

const UXDesignActivity = `[
  {"day": "Mon", "count": 2 },
  {"day": "Tue", "count": 14 },
  {"day": "Wed", "count": 5 },
  {"day": "Thur", "count": 6 },
  {"day": "Fri", "count": 9 },
  {"day": "Sat", "count": 10 },
  {"day": "Sun", "count": 3 }
]`;

try {
  const computerScienceHours = JSON.parse(computerScienceActivity);
  const UXDesignHours = JSON.parse(UXDesignActivity);

  new Chart(document.getElementById('activity-university'), {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        subtitle: {
          display: true,
          text: 'Weekly activity'
        }
      }
    },
    data: {
      labels: computerScienceHours.map(row => row.day),
      datasets: [
        {
          label: 'hours',
          data: computerScienceHours.map(row => row.count),
          borderColor: 'rgba(255, 7, 0, 0.4)'
        }
      ]
    }
  });

  new Chart(document.getElementById('activity-academy'), {
    type: 'line',
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        subtitle: {
          display: true,
          text: 'Weekly activity'
        }
      }
    },
    data: {
      labels: UXDesignHours.map(row => row.day),
      datasets: [
        {
          label: 'hours',
          data: UXDesignHours.map(row => row.count),
          borderColor: 'rgba(10, 207, 0, 0.4)'
        }
      ]
    }
  });
} catch (error) {
  console.log(error);
}
