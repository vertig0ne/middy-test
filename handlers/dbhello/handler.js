import middy from '@middy/core'
import bookshelf from 'bookshelf'
import dbManager from '@middy/db-manager'
import httpErrorHandler from '@middy/http-error-handler'
import jsonOutput from '../../middlewares/jsonOutput'

const handle = async (event, context, callback) => {
  try {
    const { db } = context
    const shelf = bookshelf(db)

    
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
  .use(dbManager({
    config: {
      client: 'mysql',
      connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_SCHEMA,
        port: process.env.DB_PORT | 3306,
      }
    },
  })
  )
  .use(jsonOutput)
  .use(httpErrorHandler())

export default handler
