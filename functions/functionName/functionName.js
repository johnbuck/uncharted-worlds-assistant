// IMPORT THE AIRTABLE.JS PACKAGE
const Airtable = require('airtable');

/** THIS IS YOUR SERVERLESS FUNCTION */
exports.handler = function(event, context, callback) {
  //pull the required information from your environment variables, which can be set in the Netlify UI
  const {API_URL, API_CLIENT_ID, API_KEY} = process.env;

  // Return mock
  if (!process.env.API_KEY) {
    // eslint-disable-next-line no-console
    console.log('No key: MOCK RESPONSE')
    const response = {
      statusCode: 200,
      body: JSON.stringify(mockdata),
      headers: {
        'content-type': 'application/json',
        'cache-control': 'Cache-Control: max-age=60, public'
      }
    }
    return callback(null, response)
  }

  // CONFIGURE YOUR AIRTABLE BASE CONNECTION
  Airtable.configure({
    endpointUrl: API_URL,
    apiKey: API_KEY
  });
  const base = Airtable.base(API_CLIENT_ID);

  const allRecords = [];
  base('Table 1')
      .select({
        maxRecords: 100,
        view: 'All'
      })
      .eachPage(
          function page(records, fetchNextPage) {
            records.forEach(function (record) {
              allRecords.push(record)
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
          }
      )

}