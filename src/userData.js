import { getRandomInt } from './random';

function updateUser() {
  fetch(`https://jsonplaceholder.typicode.com/users/${getRandomInt(1, 10)}`)
    .then(res => res.json())
    .then(res => {
      document.querySelector('.user-name').textContent = res.name;
      document.querySelector('.user-amount').innerHTML =
        getRandomInt(1000, 10_000) + '&#8381';
      document.querySelector('.user-email').textContent = res.email;
    });
}

export default updateUser;
