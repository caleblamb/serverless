const Airtable = require('airtable');

Airtable.configure({
    apiKey: 'keyjSkeH7g5vv2oHe',
});

const base = Airtable.base('appvsJrTK9VfH8jNT');
const table = base.table('scores');

const getHighScores = async (filterEmptyRecords) => {
    const queryOptions = {
        sort: [{ field: 'score', direction: 'desc' }],
    };
    if (filterEmptyRecords) {
        queryOptions.filterByFormula = `AND(player != "", score > 0)`;
    }
    const records = await table.select(queryOptions).firstPage();
    const formattedRecords = records.map((record) => ({
        id: record.id,
        fields: record.fields,
    }));
    return formattedRecords;
};

module.exports = {
    table,
    getHighScores,
};