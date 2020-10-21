'use strict';
import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import jsonOutput from '../../middlewares/jsonOutput'

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
