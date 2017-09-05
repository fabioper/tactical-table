const appendTo = function(obj, query, reverseValue = 0) {
    let value = 1

    if (query.startsWith('-')) {
        query = query.slice(1)
        value = reverseValue
    }

    return obj[query] = value
}

const queryParser = function(req, res, next) {
    const { sortBy, filterBy, limit } = req.query

    const opts = {
        sort: {},
        fields: {},
        limit: parseInt(limit, 10) || 0
    }

    if (sortBy) appendTo(opts.sort, sortBy, -1)

    if (filterBy) {
        const fieldsArr = filterBy.split(',')
        fieldsArr.forEach(field => appendTo(opts.fields, field))
    }

    req.queries = opts
    next()
}

module.exports = queryParser
