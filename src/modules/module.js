export const addScore = (scoreListData) => scoreListData;


export const renderList = (scoreListData, domContainer) => {
    let scoreListMarkup = '';
    if (scoreListData.length > 0) {
        scoreListData.forEach((item) => {
            scoreListMarkup += `<li class='score-list-item' id='${item.id}'>
            ${item.name}: <span class='score'>${item.score}</span>
            </li>`;
        });
    } 
    else {
        scoreListMarkup = `<p class='empty-score-list'>
        There is no Score!
        </p>`;
    }

    domContainer.innerHTML = scoreListMarkup;
};
