fetch('http://localhost:3000/one-item')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(JSON.stringify(myJson));
    let item=myJson;
    console.log(myJson.Namn);
    $('body').append(item.Namn + '('+ item.ViktGram +'g)'+'<br>' + item.Naringsvarden.Naringsvarde[22].Namn+': ' + item.Naringsvarden.Naringsvarde[22].Varde);
  });