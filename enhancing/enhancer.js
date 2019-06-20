module.exports = {
  succeed,
  fail,
  repair,
  get,
};

function succeed(item) {
  const newItem = { ...item };

  if (item.enhancement < 20) {
    newItem.enhancement += 1;
  }
  return newItem;
}

function fail(item) {
  const newItem = { ...item };
  if (item.enhancement < 15) {
    newItem.durability -= 5;
  } else {
    newItem.durability -= 10;
    if (item.enhancement < 17) {
      return newItem;
    }
    newItem.enhancement -= 1;
  }

  return newItem;
}

function repair(item) {
  const newItem = { ...item };
  newItem.durability = 100;
  
  return newItem;
}

function get(item) {
  return { ...item };
}
