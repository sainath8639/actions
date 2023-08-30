const dayOfTheWeek = (date = new Date()) => {
  const days = [
    "Sunday",
    "Monday",
    "Tuesd ay",
    "Wednesay",
    "Thursday",
    "Friday",
    "Saturd ay",
  ];

  return days[date.getDay()];
};

try {
  document.getElementById("day").innerText = dayOfTheWeek();
} catch (err) {}

exports.dayOfTheWeek = dayOfTheWeek;
