function getIng(number) {
  fetch(`http://localhost:3000/item/${number}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      let item = myJson;
      $('.result').append(item.Namn + '(' + item.ViktGram + 'g)' + '<br>' + item.Naringsvarden.Naringsvarde[22].Namn + ': ' + item.Naringsvarden.Naringsvarde[22].Varde + '<br><br>');
    });
}

$('#ingredName').on('keyup', function (e) {
  let name = $('#ingredName').val();
  e.preventDefault();
  setTimeout(function () {
    test1();
  }, 1000);
  console.log('keyup btn', name);
});


function test1() {
  param = $('#ingredName').val();
  fetch(`/allaingreds/${param}`)
    .then(function (response) {
      $('#ingredsList').html(' ');
      return response.json();
    })
    .then(function (myJson) {

      let item = myJson;

      item.forEach(ingred => {
        let list = $(`<li class="ingredient" value="${ingred.Namn}">${ingred.Namn} </li>`);
        let btn = $(`<button class="btn_get_ing btn btn-success">Lägg till</button>`);
        list.attr('value', ingred.Namn);
        btn.data('ingredData', ingred);
        list.append(btn);
        $('#ingredsList').append(list);
      });
    });
}

$('body').on('click', ('.btn_get_ing'), function (e) {
  e.preventDefault();
  console.log($(this).data('ingredData'));
});