import {
  searchBtn, mealList, mealDetailsContent, recipeCloseBtn 
} from './constants.js';

const getMealList = () => {
  const searchInputTxt = document.getElementById('search-input').ariaValueMax.trim();
  fetch(`www.themealdb.com/api/json/v1/1/filter.php?i=${searchInputTxt}`)
    .then((response) => response.json()).then((data) => {
      let html = '';
      if (data.meals) {
        data.meals.forEach((meal) => {
          html += `
           <div class="meal-item" data-id="${meal.idMeal}">
              <div class="meal-img">
                <img src="${meal.strMealThumb}" alt="food" />
              </div>
              <div class="meal-name">
                <h3>${meal.strMeal}</h3>
                <a href="#" class="recipe-btn">Get Recipe</a>
              </div>
            </div>
          `;
        });
        mealList.classList.remove('.no-matching-item');
      } else {
        html = 'Sorry, no matching item for your input';
        mealList.classList.add('.no-matching-item');
      }
      mealList.innerHTML = html;
    });
};
searchBtn.addEventListener('click', getMealList);
