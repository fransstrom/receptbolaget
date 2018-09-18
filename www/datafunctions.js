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





$('.btn_get').on('click', function (e) {
  let number = $('#recNr').val();

  e.preventDefault();
  //getIng(number);
  console.log('klick btn', number);
  test1();
});





function test1() {
  param = $('#recNr').val();
  fetch(`/allaingreds/${param}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (myJson) {
      console.log(JSON.stringify(myJson));
      let item = myJson;
      let ul = $('<ul class="list-unstyled"></ul>');

      item.forEach(ingred => {
        let li = $('<li></li>');
        li.text(ingred.Namn);
        li.data('ingredData', ingred);
        li.addClass('ingList');
        ul.append(li);
      });
      $('.result').html(ul);

     // console.log('DATA FROM FIRST LI', $('li:nth-child(1)').data('ingredData'));

    });


}


$('body').on('click', 'li.ingList', function (e) {
  e.preventDefault();


  console.log($(this).data('ingredData'));
});



 