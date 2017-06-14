// add device

export function addDevice (name, imageSrc, status) {
    return {
        type: 'ADD_DEVICE',
        name,
        imageSrc,
        status
    }
};

//remove device

export function removeDevice (name, i) {
    return {
        type: 'REMOVE_DEVICE',
        name,
        i
    }
}