'use strict';
const middy = require('@middy/core')
const httpErrorHandler = require('@middy/http-error-handler')
const jsonOutput = require('../../middlewares/jsonOutput')

const handle = async (event, context, callback) => {
//  console.log(event, context)
  return {
    statusCode: 200,
    body: {
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    },
  };
}

const handler = middy(handle)
  .use(jsonOutput)
  .use(httpErrorHandler())

module.exports = { handler }
