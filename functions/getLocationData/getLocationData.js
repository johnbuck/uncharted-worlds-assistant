// Import the Airtable.js package
const Airtable = require('airtable');

/** THIS IS YOUR SERVERLESS FUNCTION */
exports.handler = function(event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  const {API_URL, API_CLIENT_ID, API_KEY} = process.env;

  // Configure Airtable Base Connection
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });

  const base = Airtable.base(API_CLIENT_ID);

  // Setup empty array to store results
  const allRecords = [];

  // Query
  const apiQuery = {
    maxRecords: 100,
    view: 'locationData',
    pageSize: 50,
    // sort: [{field: 'Publish Date', direction: 'desc'}]
  }

  base('sitRep')
      .select(apiQuery)
      .eachPage((records, fetchNextPage) => {
            records.forEach(function (record) {
              const item = {
                key: record.get('key'),
                value: record.get('value'),
                type: record.get('type'),
                id: record.id
              }

              allRecords.push(item)
            })

            fetchNextPage()
          },
          function done(err) {
            if (err) {
              callback(err)
            } else {
              const body = JSON.stringify({records: allRecords})
              const response = {
                statusCode: 200,
                body: body,
                headers: {
                  'content-type': 'application/json',
                  'cache-control': 'Cache-Control: max-age=60, public'
                }
              }
              callback(null, response)
            }
          })
}

