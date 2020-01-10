const filterTrueProperties = obj => {
  const properties = {};
  for (const key in obj) {
    if (obj[key]) {
      properties[key] = obj[key];
    }
  }

  return properties;
};

module.exports.filterTrueProperties = filterTrueProperties;
