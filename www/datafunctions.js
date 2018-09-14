
function getIng(number){
fetch(`http://localhost:3000/item/${number}`)
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    let item=myJson;
    $('.result').append(item.Namn + '('+ item.ViktGram +'g)'+'<br>' + item.Naringsvarden.Naringsvarde[22].Namn+': ' + item.Naringsvarden.Naringsvarde[22].Varde+'<br><br>');
  });
}

$('.btn_get').on('click',function(e){
  let number=$('#recNr').val();

  e.preventDefault();
  getIng(number);
 
console.log('klick btn', number);
});


