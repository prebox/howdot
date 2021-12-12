import deepIs from './deep.js'
import emptyIs from './empty.js'

/**
 * A fast and simple helper tool.
 * Used to call any underlying methods.
 */
const How = {}

How.deepIs = deepIs
How.emptyIs = emptyIs

Object.freeze(How)

export default How
