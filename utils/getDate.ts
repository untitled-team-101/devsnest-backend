const getDate = () => {
  const currentDate = new Date();
  const today = () => {
    const month = () => {
      if (currentDate.getMonth() <= 8) {
        return "0" + (currentDate.getMonth() + 1);
      } else {
        return currentDate.getMonth() + 1;
      }
    };
    const day = () => {
      if (currentDate.getDate() <= 9) {
        return "0" + currentDate.getDate()
      } else {
        return currentDate.getDate();
      }
    };
    return `${currentDate.getFullYear()}-${month()}-${day()}`
  };
  return today();
};

export default getDate;