function getIndex(step, currentIndex, len) {
  if (step == 'prev') {
    let index = currentIndex - 1;
    if (index < 0) {
      index = len - 1;
    }
    return index;
  } else {
    let index = currentIndex + 1;
    if (index >= len) {
      index = 0;
    }
    return index;
  }
}

module.exports = getIndex;
