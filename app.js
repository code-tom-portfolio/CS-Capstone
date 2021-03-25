const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const Team = require('./models/teamInfo');
const { db } = require('./models/userInfo');
const User = require('./models/userInfo');





// express app
const app = express();


// connected to DB
const dbURL = 'mongodb+srv://group3:CSC481@maxfantasy.xzdqo.mongodb.net/maxfantasy-db?retryWrites=true&w=majority'
mongoose.connect(dbURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// register view engine
// EJS Templates
app.set('view engine', 'ejs');

// static files
app.use(express.static('static'));

//middleware
app.use(express.urlencoded({ extended: true }));


//routing between pages
app.get('/', (req, res) => {
    res.render('index', { title: 'index' });
});

app.get('/index', (req, res) => {
    res.render('index', { title: 'index' });
});

app.get('/leagueType', (req, res) => {
    res.render('leagueType', { title: 'leagueType' });
});

app.get('/ppr', (req, res) => {
    res.render('ppr', { title: 'ppr' });
});

app.get('/Standard', (req, res) => {
    res.render('Standard', { title: 'Standard' });
});

app.get('/privacy', (req, res) => {
    res.render('privacy', { title: 'privacy' });
});

app.get('/signIn', (req, res) => {
    res.render('signIn', { title: 'signIn' });
});

app.get('/stats', (req, res) => {
    res.render('stats', { title: 'stats' });
});

app.get('/myTeam', (req, res) => {
    res.render('myTeam', { title: 'myTeam' });
});
// Get all data, and display on the page.

app.get('/myTeam/:userEmail', (req, res) => {
    const userEmail = req.params.userEmail;
    Team.findOne({ userEmail: userEmail })
        .then(result => {
            res.render('details', { title: 'Single Team', showTeam: result })
        })
        .catch(err => {
            console.log(err);
            res.render('leagueType')
        });
});




// Get single data, and display on the page.
app.get('/myTeam/:id', (req, res) => {
    const id = req.params.id;

    Team.findById(id)
        .then(result => {
            res.render('details', { title: 'Single Team', showTeam: result })
        })
        .catch(err => {
            console.log(err);
        });
});

// Delete request
app.delete('/myTeam/:id', (req, res) => {
    const id = req.params.id;

    Team.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/leagueType' });
        })
        .catch(err => {
            console.log(err);
        });
});


// posting data to the DB
app.post('/ppr', (req, res) => {
    //console.log(req.body);

    const team = new Team(req.body)

    team.save()
        .then((result) => {
            res.redirect('/MyTeam');

        })
        .catch((err) => {
            console.log(err);
        })


});

// posting data to the DB
app.post('/standard', (req, res) => {
    //console.log(req.body);

    const team = new Team(req.body)

    team.save()
        .then((result) => {
            res.redirect('/MyTeam');

        })
        .catch((err) => {
            console.log(err);
        })

});


// posting users to the DB (Not sure if this will work, following example for teams)
app.post('/signIn', (req, res) => {
    //console.log(req.body);

    /*const user = new User(req.body)
    user.save()
        .then((result) => {
            res.redirect('/leagueType');
        })
        .catch((err) => {
            console.log(err);
        })*/

    var query = req.body.userEmail;
    User.findOne({ userEmail: query }, function (err, user) {
        if (err) console.log(err);
        if (user) {
            console.log("This has already been saved");
            res.redirect('leagueType');
        } else {
            const user = new User(req.body);
            user.save(function (err, u) {
                if (err) console.log(err);
                res.redirect('/leagueType');
            });
        }
    });

});

