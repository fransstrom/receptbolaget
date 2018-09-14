//propaply singleton sets all express routes
const MongoClient = require("mongodb").MongoClient;
let DBurl = "mongodb://localhost:27017/ingreds";

module.exports = class Routes {
    constructor(app, ingredients) {
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

        //Sök databas efter nummer
        this.app.get('/item/:Nummer', function (req, res) {
            MongoClient.connect(DBurl, function (err, db) {
                if (err) {
                    throw err;
                }
                var dbo = db.db("ingreds");
                dbo.collection("ingreds").findOne({
                    Nummer: req.params.Nummer
                }, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    res.json(result)
                    db.close();
                });
            });
        });

        this.app.get('/item/namn/:Namn', function (req, res) {
            MongoClient.connect(DBurl, function (err, db) {
                if (err) {
                    throw err;
                }
                var dbo = db.db("ingreds");
                dbo.collection("ingreds").findOne({
                    Namn: req.params.Namn
                }, function (err, result) {
                    if (err) {
                        throw err;
                    }
                    res.json(result)
                    db.close();
                });
            });
        });
    }
}