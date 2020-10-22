import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import jsonOutput from '../../middlewares/jsonOutput'
import jsonBodyParser from '@middy/http-json-body-parser'
import dbManager from '../../middlewares/databaseWrapper'
import dbConfig from '../../knexfile'

const handle = async (event, context, callback) => {
  try {
    const { db } = context
    console.log(db);
    
    const { data } = event.body
    const insert = await table.insert('data').values(data).execute()

    const id = await insert.getAutoIncrementValue();

    return {
      statusCode: 200,
      body: { id, data },
    };
  } catch (err) {
    console.log(err)
    return {
      statusCode: 500,
      body: err
    }
  }
}

export const handler = middy(handle)
  .use(dbManager())
  .use(jsonBodyParser())
  .use(jsonOutput)
  .use(httpErrorHandler())

export default handler;
