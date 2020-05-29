exports.handler = function(event, context, callback) {
    const secretContent = "success"
    `
    
    let body
  
    if (event.body) {
      body = JSON.parse(event.body)
    } else {
      body = {}
    }
  
    if (body.password == "javascript") {
      callback(null, {
        statusCode: 200,
        body: secretContent
      })
    } else {
      callback(null, {
        statusCode: 401
      })
    }
  
    
  }