//propaply singleton sets all express routes
let RecipesRoute = require('./recipe.class');
let IngredsRoute = require('./ingredient.class');

module.exports = class Routes {
    constructor(app) {
        this.app = app;
        this.setRoutes();
    }

    setRoutes() {

        this.app.get('/allarecept', (req, res) => {
          RecipesRoute.find().
          then(rec => {
              res.send(200, rec)
              next()
            })
            .catch(err => {
              res.send(500, err)
            });
        });


        //Får ut ingredienser från Namn string
        this.app.get('/allaingreds/:ingNamn', (req, res) => {
            let start = req.params.ingNamn.toLowerCase();
            if (start.length < 2) {
                res.json({
                    error: 'please provide at least 2 characters'
                })
                return;
            }
            IngredsRoute.find().
            then(rec => {
                let result = rec.filter(
                    ingredient => ingredient.Namn.toLowerCase().indexOf(start) == 0
                ).map(ingredient => ingredient)
                res.json(result);
                console.log(result);
              })
              .catch(err => {
                res.json(err)
              });
          });
    }
}