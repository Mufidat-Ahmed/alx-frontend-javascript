const cleanSet = (set, startString) => {
  if (typeof startString !== 'string' || startString.length === 0) {
    return '';
  }
  return [...set]
    .filter(value => value && value.startsWith(startString))
    .map(value => value.slice(startString.length))
    .join('-');
};

export default cleanSet;
