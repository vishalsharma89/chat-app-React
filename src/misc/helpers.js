export function getNameInitials(name) {
    const splitName = name.toUpperCase().split(' ');

    if (splitName.length > 1) {
        return splitName[0][0] + splitName[1][0];
    }

    return splitName[0][0];
}
export function transformToArr(snapVal) {
    return snapVal ? Object.keys(snapVal) : [];
}

// if not image uploaded then it will show name intitials in our avatar


export function transformToArrWithId(snapVal) {
    return snapVal
        ? Object.keys(snapVal).map(roomId => {
            return { ...snapVal[roomId], id: roomId };
        })
        : [];
}

// to update user and its changed values
export async function getUserUpdates(userId, keyToUpdate, value, db) {
    const updates = {};

    updates[`/profiles/${userId}/${keyToUpdate}`] = value;

    // promises
    const getMsgs = db
        .ref('/messages')
        .orderByChild('author/uid')
        .equalTo(userId)
        .once('value');

    const getRooms = db
        .ref('/rooms')
        .orderByChild('lastMessage/author/uid')
        .equalTo(userId)
        .once('value');

    const [mSnap, rSnap] = await Promise.all([getMsgs, getRooms]);

    mSnap.forEach(msgSnap => {
        updates[`/messages/${msgSnap.key}/author/${keyToUpdate}`] = value;
    });

    rSnap.forEach(roomSnap => {
        updates[`/rooms/${roomSnap.key}/lastMessage/author/${keyToUpdate}`] = value;
    });

    return updates;
}


// Group chat feed by dates
export function groupBy(array, groupingKeyFn) {
    return array.reduce((result, item) => {
        const groupingKey = groupingKeyFn(item);

        if (!result[groupingKey]) {
            result[groupingKey] = [];
        }

        result[groupingKey].push(item);

        return result;
    }, {});
}

export const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);