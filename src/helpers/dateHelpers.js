/**
 * Set dd/mm/YYYY date format
 * @param date
 * @returns {string|null}
 */
export const inputFormatDate = (date) => {
  if (!date) return null;
  const [year, month, day] = date.split("-");
  return `${day}/${month}/${year}`;
};

/**
 * Set YYYY-mm-dd date format
 * @param date
 * @returns {string}
 */
export const formatDate = (date) => {
  let d = date,
    month = "" + (d.getMonth() + 1),
    day = "" + d.getDate(),
    year = d.getFullYear();

  if (month.length < 2) month = "0" + month;
  if (day.length < 2) day = "0" + day;
  return [year, month, day].join("-");
};
