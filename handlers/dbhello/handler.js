import mysqlx from '@mysql/xdevapi'
import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import jsonOutput from '../../middlewares/jsonOutput'

const handle = async (event, context, callback) => {
  try {
  const db = await mysqlx.getSession(process.env.MYSQL_URI)

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
  .use(jsonOutput)
  .use(httpErrorHandler())

export default handler
