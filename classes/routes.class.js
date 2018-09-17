//propaply singleton sets all express routes
const MongoClient = require("mongodb").MongoClient;
let DBurl = "mongodb://localhost:27017/ingreds";
let RecipesRoute = require('./recipe.class');
let IngredsRoute = require('./ingredient.class');

module.exports = class Routes {
    constructor(app) {
        this.app = app;
        this.ingredients = ingredients;
        this.setRoutes();
    }

    setRoutes() {
        this.app.get('/autocomplete-ingredient-name/:startOfName', (req, res) => {
            let start = req.params.startOfName.toLowerCase();
            if (start.length < 2) {
                res.json({
                    error: 'please provide at least 2 characters'
                })
                return;
            }
            let result = this.ingredients.filter(
                ingredient => ingredient.Namn.toLowerCase().indexOf(start) == 0

            ).map(ingredient => ingredient.Namn)
            console.log(result);

        });



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


        this.app.get('/allaingreds', (req, res) => {
            IngredsRoute.find().
            then(rec => {
                res.send(200, rec)
                next()
              })
              .catch(err => {
                res.send(500, err)
              });
          });
    }
}