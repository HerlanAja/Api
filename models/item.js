const db = require('../config/db');

const item = {
    getAll: (callback) => {
        db.query('SELECT * FROM item', callback);
    },
    create: (item, callback) => {
        db.query('INSERT INTO item SET ?', item, callback);
    },
    update: (id, item, callback) => {
        db.query('UPDATE item SET ? WHERE id = ?', [item, id], callback);
    },
    delete: (id, callback) => {
        db.query('DELETE FROM item WHERE id = ?', id, callback);
    }
}

module.exports = item;