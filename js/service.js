const apiKey = "SUA_CHAVE_AQUI"
axios
	.get(`https://api.themoviedb.org/3/list/7095569?api_key=${apiKey}`)
	.then(function (response) {
		// handle success
		var owl = $("#lista-filmes");
		response.data.items.forEach((item) => {
			const templateItem = `<div class="item"><img class="box-filme" src="http://image.tmdb.org/t/p/w342${item.poster_path}" alt="" /></div>`;

			// Listen to owl events:
			owl.trigger("add.owl.carousel", [templateItem]);
			owl.trigger("refresh.owl.carousel", ["add"]);
		});
		owl.owlCarousel();
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	});

  axios
	.get(`https://api.themoviedb.org/3/list/7095571?api_key=${apiKey}`)
	.then(function (response) {
		// handle success
		var owl = $("#lista-series");
		response.data.items.forEach((item) => {
			const templateItem = `<div class="item"><img class="box-filme" src="http://image.tmdb.org/t/p/w342${item.poster_path}" alt="" /></div>`;

			// Listen to owl events:
			owl.trigger("add.owl.carousel", [templateItem]);
			owl.trigger("refresh.owl.carousel", ["add"]);
		});
		owl.owlCarousel();
	})
	.catch(function (error) {
		// handle error
		console.log(error);
	});
