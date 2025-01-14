import fastify from 'fastify'
import fastifyCookie from '@fastify/cookie'

import { trnasactionsRoutes } from './routes/transactions'

export const app = fastify()

app.register(fastifyCookie)

app.register(trnasactionsRoutes, {
  prefix: 'transactions',
})
