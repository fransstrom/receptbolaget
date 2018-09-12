//propaply singleton sets all express routes
module.exports=class Routes {
    constructor(app, ingredients) {
        this.app = app;
        this.ingredients = ingredients;
        this.setRoutes();
    }

    setRoutes() {
        this.app.get('/autocomplete-ingredient-name/:startOfName', (req, res) => {
            let start=req.params.startOfName.toLowerCase();
            if(start.length<2){
                res.json({error:'please provide at least 2 characters'})
                return;
            }
            let result= this.ingredients.filter(
                ingredient=>ingredient.Namn.toLowerCase().indexOf(start)==0
                
            ).map(ingredient=>ingredient.Namn)
            console.log(result);

        });
    }
}