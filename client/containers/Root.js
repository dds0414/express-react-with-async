/**
 * Created by yangbo on 17/1/3.
 */
if (process.env.NODE_ENV === 'production') {
    module.exports = require('./Root.prod')
} else {
    module.exports = require('./Root.dev')
}