import mysqlx from '@mysql/xdevapi'
import middy from '@middy/core'
import httpErrorHandler from '@middy/http-error-handler'
import jsonOutput from '../../middlewares/jsonOutput'
import httpJsonBodyParser from '@middy/http-json-body-parser'

const handle = async (event, context, callback) => {
  try {
    const conn = await mysqlx.getSession(process.env.MYSQL_URI)
    await conn.sql('CREATE DATABASE IF NOT EXISTS middytest').execute()
    await conn.sql('CREATE TABLE IF NOT EXISTS middytest.data (_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, data VARCHAR(4000))').execute()
    const db = await conn.getSchema('middytest')
    const table = await db.getTable('data')
  
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
  .use(jsonOutput)
  .use(httpJsonBodyParser())
  .use(httpErrorHandler())

export default handler;
