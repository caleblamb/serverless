const Airtable = require('airtable');

Airtable.configure({
    apiKey: 'keyjSkeH7g5vv2oHe',
});
const base = Airtable.base('appvsJrTK9VfH8jNT');
const table = base.table('scores');
exports.handler = async (event) => {
    const records = await table.select().firstPage();
    const formattedRecords = records.map((record) => ({
        id: record.id,
        fields: record.fields
    }));
    return {
        statusCode: 200,
        body: JSON.stringify(formattedRecords),
    };
};