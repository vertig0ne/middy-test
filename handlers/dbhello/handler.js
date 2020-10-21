const mysqlx = require('@mysql/xdevapi');
const middy = require('@middy/core')
const httpErrorHandler = require('@middy/http-error-handler')
const jsonOutput = require('../../middlewares/jsonOutput')

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

const handler = middy(handle)
  .use(jsonOutput)
  .use(httpErrorHandler())

module.exports = { handler }
