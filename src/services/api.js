let items = ["Coffe", "Milk", "Water"];


export const getItems = function () {
    const promise = new Promise((resolve, reject) => {
        resolve(items);
    });
    return promise;
}

export const saveItem = function (item) {
    const promise = new Promise((resolve, reject) => {
        const index = items.indexOf(item);
        if (index !== -1) {
            reject(item + ' already exists.');
        }
        else {
            items.push(item);
        }

        resolve(items);
    })

    return promise;
}

export const deleteItem = function (item) {
    const promise = new Promise((resolve, reject) => {
        const index = items.indexOf(item);
        if (index >= 0) {
            items.splice(index, 1);
        }
        resolve(items);
    })

    return promise;
}

