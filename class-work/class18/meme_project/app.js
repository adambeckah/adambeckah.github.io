// f95f7e51097f46d39b6d80758241ae1e



var xhrReddit = $.get('https://www.reddit.com/r/news/new/.json');

xhrReddit.done(function(data) { 
	
	data.data.children.forEach(function(post, index){

	if (index < 5) {
		console.log(post.data.title);

		var postTitle = post.data.title;
		var postTitleNoPluses = post.data.title;




		postTitle = postTitle.split(' ');
		postTitle = postTitle.join('+');

		console.log(postTitle);


		var xhrGiphy = $.get("http://api.giphy.com/v1/gifs/random?q=" + postTitle + "&api_key=f95f7e51097f46d39b6d80758241ae1e&limit=5");

		xhrGiphy.done(function(data) { 
		var firstmp4 = data.data.image_mp4_url;


		$('.meme-wrap').append('<h1>' + postTitleNoPluses + '</h1>')
		$('.meme-wrap').append('<video src="' + firstmp4 + '" type="video/mp4" autoplay loop></video>');


	
			});
		}

	})
});




