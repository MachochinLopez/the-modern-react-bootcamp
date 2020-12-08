function choice(items) {
    const randomNumber = Math.floor(Math.random() * items.length);
    return items[randomNumber];
}

function remove(items, item) {
    return items.filter(value => {
        return value != item;
    });
}

export { choice, remove };