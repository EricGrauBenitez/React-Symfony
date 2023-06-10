function calculateDaysBetweenDates(begin, end) {
  const ONE_DAY = 1000 * 60 * 60 * 24;
  const beginDate = new Date(begin);
  const endDate = new Date(end);
  const differenceMs = Math.abs(endDate - beginDate);
  return Math.round(differenceMs / ONE_DAY);
} 