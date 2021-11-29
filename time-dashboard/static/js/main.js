const timesMap = {
  daily: {
    "work": ["5hrs", "7hrs"],
    "play": ["1hr", "2hrs"],
    "study": ["0hrs", "1hr"],
    "exercise": ["1hr", "1hr"],
    "social": ["1hr", "3hr"],
    "selfCare": ["0hrs", "1hr"]
  },
  weekly: {
    "work": ["32hrs", "36hrs"],
    "play": ["10hrs", "8hrs"],
    "study": ["4hrs", "7hrs"],
    "exercise": ["4hrs", "5hrs"],
    "social": ["5hrs", "10hrs"],
    "selfCare": ["2hrs", "2hrs"]
  },
  monthly: {
    "work": ["103hrs", "128hrs"],
    "play": ["23hrs", "29hrs"],
    "study": ["13hrs", "19hrs"],
    "exercise": ["11hrs", "18hrs"],
    "social": ["20hrs", "23hrs"],
    "selfCare": ["7hrs", "11hrs"]
  }
}

const times = document.getElementById("times").querySelectorAll("span");
for (let i of times) {
  i.addEventListener("click", function() {showTimes(false, this)});
}
document.addEventListener("load", showTimes(true));

function showTimes(first, element) {

  const timesArr = document.getElementsByClassName("time");

  if(first == true) {

    for (let time of timesArr) {
      const modify = time.querySelectorAll("span");
      modify[0].innerHTML = timesMap["weekly"][time.id][0];
      modify[1].innerHTML = timesMap["weekly"][time.id][1];
    }
  }
  else {
    document.getElementsByClassName("active")[0].classList.remove("active");
    element.classList.add("active");
    switch (element.innerHTML) {
      case "Daily":
        for (let time of timesArr) {
          const modify = time.querySelectorAll("span");
          modify[0].innerHTML = timesMap["daily"][time.id][0];
          modify[1].innerHTML = timesMap["daily"][time.id][1];
        }
        break;
      case "Weekly":
        for (let time of timesArr) {
          const modify = time.querySelectorAll("span");
          modify[0].innerHTML = timesMap["weekly"][time.id][0];
          modify[1].innerHTML = timesMap["weekly"][time.id][1];
        }
        break;
      case "Monthly":
        for (let time of timesArr) {
          const modify = time.querySelectorAll("span");
          modify[0].innerHTML = timesMap["monthly"][time.id][0];
          modify[1].innerHTML = timesMap["monthly"][time.id][1];
        }
        break;
    
      default:
        break;
    }
  }


}