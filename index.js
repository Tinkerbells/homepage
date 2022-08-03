const currentDate = new Date();

const format = (x) => {
  return x < 10 ? "0" + x : x;
};

const getTime = () => {
  let time =
    format(currentDate.getHours()) +
    ":" +
    format(currentDate.getMinutes()) +
    ":" +
    format(currentDate.getSeconds());
  document.getElementById("time").innerHTML = time;
};

const getDate = () => {
  let date =
    format(currentDate.getDate()) +
    "/" +
    format(currentDate.getMonth()) +
    "/" +
    format(currentDate.getFullYear());
  document.getElementById("date").innerHTML = date;
};

// setInterval(getTime, 1000);
//
// getDate();
