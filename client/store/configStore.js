/**
 * Created by yangbo on 17/1/3.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./configStore.prod.js')
} else {
    module.exports = require('./configStore.dev.js')
}