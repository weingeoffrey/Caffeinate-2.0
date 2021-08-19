const fetchReviews = async () => {
	let response = await fetch('/api/v1/reviews');
	return response.json();
};

const createReviewCards = async (reviewArray) => {
	reviewArray.sort((a, b) => b.date - a.date);
	return reviewArray;
};

fetchReviews().then((response) => {
	var reviewArray = response;
	createReviewCards(reviewArray);
	console.log(reviewArray);
	$('#review-section').append(
		'<article class="card column"><div class="media-content"><div class="content"><p>' +
			`<strong>${reviewArray[0].Shop.name}</strong><br>
     <strong>${reviewArray[0].User.username}</strong></p><br>` +
			`<div class="media-left"><p><strong>${reviewArray[0].rating} stars</strong></div>
     <div class="media-content"><p>${reviewArray[0].body}</p></div>
     </div></div></article>` +
			'<article class="card column"><div class="media-content"><div class="content"><p>' +
			`<strong>${reviewArray[1].Shop.name}</strong><br>
     <strong>${reviewArray[1].User.username}</strong></p><br>` +
			`<div class="media-left"><p><strong>${reviewArray[1].rating} stars</strong></div>
     <div class="media-content"><p>${reviewArray[1].body}</p></div>
     </div></div></article>` +
			'<article class="card column"><div class="media-content"><div class="content"><p>' +
			`<strong>${reviewArray[2].Shop.name}</strong><br>
     <strong>${reviewArray[2].User.username}</strong></p><br>` +
			`<div class="media-left"><p><strong>${reviewArray[2].rating} stars</strong></div>
     <div class="media-content"><p>${reviewArray[2].body}</p></div>
     </div></div></article>`
	);
});
