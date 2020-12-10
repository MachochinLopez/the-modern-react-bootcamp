const getRandomDifferentColor = (actualColor, allColors) => {
    // Quita el color actual del arreglo.
    const filteredArray = allColors.filter(color => { return color !== actualColor });
    // Devuelve un color al azar del arreglo filtrado.
    return getRandomColor(filteredArray);
};

const getRandomColor = (allColors) => {
    return allColors[Math.floor(Math.random() * allColors.length)];
}

export { getRandomDifferentColor, getRandomColor }