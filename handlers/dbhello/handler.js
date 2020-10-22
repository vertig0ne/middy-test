import middy from '@middy/core'
import bookshelf from 'bookshelf'
import dbManager from '../../middlewares/databaseWrapper'
import httpErrorHandler from '@middy/http-error-handler'
import jsonOutput from '../../middlewares/jsonOutput'

const handle = async (event, context, callback) => {
  try {
    console.log('hello from handler')
    const { db } = context

    return {
      statusCode: 200,
      body: {
        message: `Hello, the current time is ${new Date().toTimeString()}.`,
      },
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: err
    }
  }
}

export const handler = middy(handle)
  .use(dbManager())
  .use(jsonOutput)
  .use(httpErrorHandler())

export default handler
