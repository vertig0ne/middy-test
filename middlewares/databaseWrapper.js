import dbManager from '@middy/db-manager'
import bookshelf from 'bookshelf'

import dbConfig from '../knexfile'

export const wrapper = () => {
  const db = dbManager({ config: dbConfig })
  return {
    before: (handler, next) => {
      db.before(handler, () => {})
      Object.assign(handler.context, { knex: handler.context.db, db: bookshelf(handler.context.db) })
      next()
    },
    after: (handler, next) => {
      db.after(handler, () => {})
      next()
    }
  }
}

export default wrapper
