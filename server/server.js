// Import server code: express and cors

const express = require('express')

const cors = require('cors') // Cross Origin Resource Sharing

// Invoke express variable and save to app variable

const app = express()

// Set up Middleware

app.use(express.json())  // Allows server to accept JSON objects
app.use(cors()) // Allows server to activate CORS


// Endpoints and Database

const dummyDatabase = ['chips','dip','salsa', 'Dr Pepper', 'MILK', 'bratwurst', 'Sour patch watermelon', 'Coke Zero', 'Prime rib']

app.get('/api/inventory', (req, res) => {
    // console.log(req.body)
    // console.log(req.query)
    // console.log(req.params)

    if(req.query.item){
        console.log('App get IF hit')

        const filteredItems = dummyDatabase.filter((food) => food.includes(req.query.item))

        res.status(200).send(filteredItems)
        
    }else{
        console.log('App get ELSE hit')
        res.status(200).send(dummyDatabase)
    }

})

app.get('/api/inventory/:id', (req, res) => {
    console.log(req.params.id)

    let index = req.params.id

    console.log(dummyDatabase[index])

    res.status(200).send(dummyDatabase[index])
})

// Open door for server to receive request

app.listen(5050, () => console.log('Server running on 5050'))
