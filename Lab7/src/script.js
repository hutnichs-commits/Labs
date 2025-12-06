function removeElement(array, item) {
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
}

function removeElements(array, ...items) {
  for (const item of items) {
    const index = array.indexOf(item);
    if (index !== -1) {
      array.splice(index, 1);
    }
  }
}

function unique(array) {
  const result = [];
  for (const item of array) {
    if (!result.includes(item)) {
      result.push(item);
    }
  }
  return result;
}

function difference(array1, array2) {
  const array = [];
  for (const item of array1) {
    if (!array2.includes(item)) {
      array.push(item);
    }
  }
  return array;
}
