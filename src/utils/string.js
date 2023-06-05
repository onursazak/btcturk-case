const truncate = (str, limit = 50) => {
  if (!str) return;

  return str.substring(0, limit) + "...";
};

export { truncate };
