function removeFilterByIndex(filters, index) {
  filters.splice(index, 1);
  return filters;
}

function addFilter(filters, category) {
  filters.push(category);
  return filters;
}

export { removeFilterByIndex, addFilter };
