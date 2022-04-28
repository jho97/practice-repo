const express = require('express')
const app = express ()
const path = require('path')

const port = procsss.env.PORT || 5050;

app.listen(port, function() {
    console.log(`server rocking on ${port}`)
})