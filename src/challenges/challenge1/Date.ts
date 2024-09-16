export function getDate():String {

  const date: Date = new Date();
  const hours = date.getHours();
  if(!date || !hours) {
    throw ('error');
  }
  let timeOfDay;
  if (hours < 12) {
    timeOfDay = "morning"
  } else if (hours >= 12 && hours < 17) {
      timeOfDay = "afternoon"
  } else {
      timeOfDay = "night"
  }
  if(!timeOfDay) {
    throw ('no time found')
  }

  return timeOfDay;
}