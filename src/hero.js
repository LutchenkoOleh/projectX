const reviewsList = document.querySelector('.reviews-list')
const URL = `https://portfolio-js.b.goit.study/api/reviews`
console.log(URL)


function createMarkup(_id, author, avatar_url, review) {
  const markup =
    `
      <li class="reviews-list-item " id='${_id}'>
        <img src="${avatar_url}" alt="${author}" class="reviews-img">
        <div class="text-wrap">
          <h3 class="reviews-card-title">${author}</h3>
          <p class="reviews-text">${review}</p>
        </div>
      </li>
    `


  reviewsList.insertAdjacentHTML('beforeend', markup);
}

createMarkup(URL)

fetch(URL)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(reviews => {
    console.log('Отримані відгуки:', reviews);
    if (reviewsList) {
      reviews.map(({ _id, author, avatar_url, review }) => { createMarkup(_id, author, avatar_url, review) });
    }

  })
  .catch(fetchError);


function fetchError() {
  iziToast.error({
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    messageSize: '16px',
    position: 'topRight',
    message: 'Sorry, no information was found!'
  })
}
