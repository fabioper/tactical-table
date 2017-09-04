const config = {
    default: {
        port: 3000,
        mongoUri: 'mongodb://localhost:27017/tactical_table'
    },
    test: {
        port: 3001,
        mongoUri: 'mongodb://localhost:27017/tactical_table_test'
    }
}

exports.get = function get(env) {
    return config[env] || config.default
}
