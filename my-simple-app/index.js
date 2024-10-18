
const express = require('express');
const app = express();


app.set('view engine', 'ejs');


app.get('/', (req, res) => {
    const names = ["ayub", "shiiqa", "bin ali", "suldhaanka"];
    res.render('index', { names });
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
