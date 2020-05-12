import api from './api';


const normalizeString = (name) => {
    if (typeof name === 'undefined') { return ''; }
    const newName = name.normalize('NFKD').toLowerCase()
        .replace(/[`´]/g, '')
        .replace(/\s+/g, '-')
        .replace(/\//g, '-')
        .replace(/[^a-z0-9:-]/g, '');
    return newName;

}

export {
    api,
    normalizeString
} 