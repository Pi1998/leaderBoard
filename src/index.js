import './style.css';
import { fetchData, addScore } from './modules/module.js';

const gameId = 'asUj78KilOt6Uikj0Iy6';

const apiEndpoint = `https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/${gameId}/scores/`;

const addScoreList = document.getElementById('add-score-list');
addScoreList.addEventListener('submit', async (e) => {
  e.preventDefault();
  const user = document.getElementById('name-input');
  const score = document.getElementById('score-input');
  const btnSubmit = document.getElementById('add-score-btn');

  btnSubmit.disabled = true;

  const result = await addScore(apiEndpoint, { user: user.value, score: score.value });
  if (result) {
    user.value = '';
    score.value = '';
    btnSubmit.disabled = false;
  }
});

document.getElementById('r-scores-btn').addEventListener('click', () => {
  fetchData(apiEndpoint);
});

window.onload = async () => {
  fetchData(apiEndpoint);
};
