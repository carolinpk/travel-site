exports.handler = function(event, context, callback) {
    calllback(null, {
        statusCode: 200,
        body: "Welcome to the super secret area"
    })
}