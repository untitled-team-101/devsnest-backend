const getWeek = (): number => {
  const currentDate = new Date()
  const newYear = new Date(new Date().getFullYear(), 0, 1);
  let day = newYear.getDay()
  day = (day >= 0 ? day : day + 7)
  const dayNum = Math.floor((currentDate.getTime() - newYear.getTime() - (currentDate.getTimezoneOffset() - newYear.getTimezoneOffset()) * 60000) / 86400000) + 1;
  let weekNum;
  if (day < 4) {
    weekNum = Math.floor((dayNum + day - 1) / 7) + 1;
    if (weekNum > 52) {
      let nYear = new Date(currentDate.getFullYear() + 1, 0, 1);
      let nDay = nYear.getDay();
      nDay = nDay >= 0 ? nDay : nDay + 7;
      weekNum = nDay < 4 ? 1 : 53;
    }
  } else {
    weekNum = Math.floor((dayNum + day - 1) / 7);
  }
  return weekNum;
};

export default getWeek;
