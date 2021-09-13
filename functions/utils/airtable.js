const Airtable = require('airtable');

Airtable.configure({
    apiKey: 'keyjSkeH7g5vv2oHe',
});

const base = Airtable.base('appvsJrTK9VfH8jNT');
const table = base.table('scores');

module.exports = {
    table,
}