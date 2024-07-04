const countEl = document.querySelector('.counter');
const doubleCounterEl = document.querySelector('.doubleCounter');
const incrementEl = document.querySelector('.increment');
const decrementEl = document.querySelector('.decrement');
const postListEl = document.querySelector('.postList');

let count = 0;

function updateCounter() {
  countEl.textContent = count;
  doubleCounterEl.textContent = count * 2;
}

function incrementCount() {
  count += 1;
  updateCounter();
}

function decrementCount() {
  count -= 1;
  updateCounter();
}

incrementEl.addEventListener('click', incrementCount);
decrementEl.addEventListener('click', decrementCount);

updateCounter();

function getPosts() {
  fetch('https://jsonplaceholder.typicode.com/posts').then((response) =>
    response
      .json()
      .then((posts) => {
        posts.slice(0, 10).forEach((post) => {
          const postEl = document.createElement('li');
          postEl.textContent = post.title;
          postListEl.appendChild(postEl);
        });
      })

      .catch((error) => console.error('Не удалось получить посты', error))
  );
}

getPosts();
