//propaply singleton sets all express routes
let RecipesRoute = require('./recipe.class');
let IngredsRoute = require('./ingredient.class');

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

    //Lägga till i databasen fungerar som nedan

    var Nudlar = new RecipesRoute({
      Name: 'Nudlar',
      Description: 'Nudlar med gräslök',
      Ingredients: [
        {
          Ingredient: {
            Namn: 'Nudlar',
            halsovarden: 500
          },
          Amount: 1112
        },
        {
          Ingredient: {
            Namn: 'Gräslök',
            halsovarden: 500
          },
          Amount: 555
        },
      ],
      IMGUrl:
        'https://s-media-cache-ak0.pinimg.com/originals/87/94/29/8794292e4b7a2091ce8dfb7f236279c7.jpg'
    });
    Nudlar.save();
  }
};
