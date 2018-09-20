//propaply singleton sets all express routes
let RecipesRoute = require("./recipe.class");
let IngredsRoute = require("./ingredient.class");

module.exports = class Routes {
  constructor(app) {
    this.app = app;
    this.setRoutes();
  }

  setRoutes() {
    this.app.get("/allarecept/", (req, res) => {
      RecipesRoute.find()
        .then(rec => {
          res.json(rec);
        })
        .catch(err => {
          res.json(err);
        });
    });

    this.app.get("/allarecept/:recNamn", (req, res) => {
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
            .filter(
              recipe => recipe.Name.toLowerCase().indexOf(start) == 0
            )
            .map(recipe => recipe);
          res.json(result);
          console.log(result);
        })
        .catch(err => {
          res.json(err);
        });
    });


    //Får ut ingredienser från Namn string
    this.app.get("/allaingreds/:ingNamn", (req, res) => {
      let start = req.params.ingNamn.toLowerCase();
      if (start.length < 2) {
        res.json({
          error: "please provide at least 2 characters"
        });
        return;
      }
      IngredsRoute.find()
        .then(rec => {
          let result = rec
            .filter(
              ingredient => ingredient.Namn.toLowerCase().indexOf(start) == 0
            )
            .map(ingredient => ingredient);
          res.json(result);
          console.log(result);
        })
        .catch(err => {
          res.json(err);
        });
    });

//Lägga till i databasen fungerar som nedan

//   var Köttbullar = new RecipesRoute({
//       Name: 'Köttbullar',
//       Description: 'Hemmalagade',
//       Ingredients: [{
//           Namn: 'Köttfärs',
//           halsovarden: 500
//       }, {
//           Namn: 'lök',
//           halsovarden: 100
//       },{
//           Namn:'Tomat',
//           halsovarden:1000
//       }],
//       IMGUrl:'https://goo.gl/images/z1tbYf'
//   });

// Köttbullar.save();
  }
};