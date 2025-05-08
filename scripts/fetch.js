const serverUrl = 'https://nettuts.hu/jms/'; // a /után git felhasználónév

export const getAll = (entity = 'cinema') => {
    return fetch(`${serverUrl}${entity}`)
        .then( response => response.json() );
};

export const remove = (id = 0, entity = 'cinema') => {
    return fetch(`${serverUrl}${entity}/${id}`, {
        method: 'DELETE',
    })
    .then( response => response.json() );
};


