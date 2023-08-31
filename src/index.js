import './style.css';
import { renderList, addScore } from './modules/module.js';

const scoreListData = [
  {
    id: 1,
    name: 'Shinn',
    score: 100,
  },
  {
    id: 2,
    name: 'Thant',
    score: 100,
  },
  {
    id: 3,
    name: 'Swam',
    score: 100,
  },
  {
    id: 4,
    name: 'Ye',
    score: 100,
  },
];

const scoreList = document.getElementById('score-list');

const addScoreList = document.getElementById('add-score-list');
addScoreList.addEventListener('submit', (e) => {
  e.preventDefault();
  const nameInput = document.getElementById('name-input').value;
  const scoreInput = document.getElementById('score-input').value;
  addScore({ nameInput, scoreInput });
});

window.onload = () => {
  renderList(scoreListData, scoreList);
};
