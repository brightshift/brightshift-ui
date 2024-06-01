/** @type {import('orval').OrvalConfig} */
module.exports = {
  brightshiftApi: {
    output: {
      target: 'types/swagger.ts',
      schemas: 'types/model',
      client: 'react-query',
      mock: true,
    },
    input: {
      target: '../docs/swagger.json',
    },
  },
}
