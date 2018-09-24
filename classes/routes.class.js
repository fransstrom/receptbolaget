//propaply singleton sets all express routes
let RecipesRoute = require('./recipe.class');
let IngredsRoute = require('./ingredient.class');
var bodyParser = require('body-parser');

module.exports = class Routes {
  constructor(app) {
    this.app = app;
    this.setRoutes();
  }

  setRoutes() {
    this.app.get('/allarecept/', (req, res) => {
      RecipesRoute.find()
        .then(rec => {
          res.json(rec);
        })
        .catch(err => {
          res.json(err);
        });
    });

    this.app.get('/allarecept/:recNamn', (req, res) => {
      let start = req.params.recNamn.toLowerCase();
      // if (start.length < 2) {
      //   res.json({
      //     error: "please provide at least 2 characters"
      //   });
      //   return;
      // }
      RecipesRoute.find()
        .then(rec => {
          let result = rec
            .filter(recipe => recipe.Name.toLowerCase().indexOf(start) == 0)
            .map(recipe => recipe);
          res.json(result);
          console.log(result);
        })
        .catch(err => {
          res.json(err);
        });
    });

    this.app.get('/allaingreds/', (req, res) => {
      IngredsRoute.find()
        .then(rec => {
          res.json(rec.splice(0, 5));
        })
        .catch(err => {
          res.json(err);
        });
    });

    //Får ut ingredienser från Namn string
    this.app.get('/allaingreds/:ingNamn', (req, res) => {
      let start = req.params.ingNamn.toLowerCase();
      IngredsRoute.find()
        .then(rec => {
          let result = rec
            .filter(
              ingredient => ingredient.Namn.toLowerCase().indexOf(start) == 0
            )
            .map(ingredient => ingredient);
          res.json(result.splice(0, 10));
          console.log(result);
        })
        .catch(err => {
          res.json(err);
        });
    });

    this.app.post('/saverecipe/', (req, res) => {
      let recept= new RecipesRoute(req.body);
      recept.save().then(item => {
        res.json(item);
        }).catch(err => {
          res.send(err);
          });
    });
    //Lägga till i databasen fungerar som nedan

    // var Korv = new RecipesRoute({
    //   Name: 'Korv med brö',
    //   Description: 'Legendarisk korv med brö',
    //   Ingredients: [
    //     {
    //       Ingredient: {
    //         Namn: 'Korv',
    //         halsovarden: 500
    //       },
    //       Amount: 250
    //     },
    //     {
    //       Ingredient: {
    //         Namn: 'Bröd',
    //         halsovarden: 500
    //       },
    //       Amount: 122
    //     },
    //   ],
    //   Instruktioner:'Släng korven i stekpannan och låt den stekas ett tag. Lägg brödet i micron i 3sekunder, lägg korven i brödet och sedan på med ketchup och senap efter behov. Smaklig måltid!',
    //   IMGUrl:
    //     'https://lacuisinedelagrace.files.wordpress.com/2010/11/pa291747.jpg'
    // });
    // Korv.save();
  }
};
