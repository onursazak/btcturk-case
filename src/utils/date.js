// returns string in [hour]:[minute] format
function getTime(dateString) {
  if (!dateString) return;

  const date = new Date(dateString);

  return `${date.getHours().toString().padStart(2, "0")}:${date
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;
}

function formatDate(dateString) {
  if (!dateString) return;

  return new Date(dateString).toLocaleDateString();
}

export { getTime, formatDate };
