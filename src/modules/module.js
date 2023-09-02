export const renderList = (scoreListData) => {
  const scoreList = document.getElementById('score-list');

  let scoreListMarkup = '';
  if (scoreListData.length > 0) {
    scoreListData.forEach((item) => {
      scoreListMarkup += `<li class='score-list-item' id='${item.id}'>
            ${item.user}: <span class='score'>${item.score}</span>
            </li>`;
    });
  } else {
    scoreListMarkup = `<p class='empty-score-list'>
        There is no Score!
        </p>`;
  }
  scoreList.innerHTML = scoreListMarkup;
};

export const addScore = async (url, scoreListData) => {
  const res = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(scoreListData),
  });

  const result = await res.json();
  return result;
};

export const fetchData = async (url) => {
  const res = await fetch(url);
  const data = await res.json();
  renderList(data.result);
};
