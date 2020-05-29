exports.handler = function(event, context, callback) {
    let body;

    const secretContent = `
    <h3> Welcome to the secret area</h3>
    <p>Here we can tell you that the sky is <strong>blue</strong> and the twoplus two is four</p>
    `

    if(event.body) {
        body = JSON.parse(event.body)
    } else {
        body = {}
    }

    if (body.passwort =="javascript") {
        callback(null, {
            statusCode: 200,
            body: secretContent
        })
    } else {
        callback(null, {
            statusCode: 401            
        })
    }

    callback(null, {
        statusCode: 200,
        body: "Welcome to the super secret area"
    })
}