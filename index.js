import deepIs from './src/deepIs.js'
import emptyIs from './src/emptyIs.js'

/**
 * A fast and simple helper tool.
 * Used to call any underlying methods.
 */
const How = {}

How.deepIs = deepIs
How.emptyIs = emptyIs

Object.freeze(How)

export default How
