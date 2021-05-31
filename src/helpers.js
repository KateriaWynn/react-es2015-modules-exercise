/* Returns a randomly selected item from array of items **/

function choice(items) {
  let choice = Math.floor(Math.random() * items.length + 1);
  let randomItem = items[choice];
  return randomItem;
}

/* Removes the first matching item from items, if item exists, and returns it.
 *
 * Otherwise returns undefined
 **/

function remove(items, item) {
  if (items.includes(item)) {
    let index = items.indexOf(item);
    let foundItem = items.find((item) => item === items[index]);
    items.splice(index, 1);
    return foundItem;
  } else {
    return undefined;
  }
}

export { choice, remove };
