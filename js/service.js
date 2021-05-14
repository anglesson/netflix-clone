axios.get('https://api.themoviedb.org/3/list/7095569?api_key=df1603189d55008780a7208650c8359d')
  .then(function (response) {
    // handle success
    response.data.items.forEach((item) => {
      const templateItem = `<div class="item"><img class="box-filme" src="http://image.tmdb.org/t/p/w342${item.poster_path}" alt="" /></div>`;

      var owl = $('.owl-carousel');
      owl.owlCarousel();
      // Listen to owl events:
      owl.trigger('add.owl.carousel', [templateItem])
    })
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
  .then(function () {
    // always executed
  });