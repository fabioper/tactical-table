const appendTo = function(obj, query, reverseValue = 0) {
    let value = 1

    if (query.startsWith('-')) {
        query = query.slice(1)
        value = reverseValue
    }

    return obj[query] = value
}

const queryParser = function(req, res, next) {
    const { sort, fields, limit, skip } = req.query

    const opts = {
        sort: {},
        fields: {},
        skip: parseInt(skip, 10) || 0,
        limit: parseInt(limit, 10) || 0
    }

    if (sort) appendTo(opts.sort, sort, -1)

    if (fields) {
        const fieldsArr = fields.split(',')
        fieldsArr.forEach(field => appendTo(opts.fields, field))
    }

    req.queries = opts
    next()
}

module.exports = queryParser
