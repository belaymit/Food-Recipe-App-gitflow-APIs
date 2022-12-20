import { mealList, mealDetailsContent, recipeCloseBtn } from './constants.js';

const mealRecipeModal = (meal) => {
  // eslint-disable-next-line prefer-destructuring
  meal = meal[0];
  const html = ` <h2 class="recipe-title">${meal.strMeal}</h2>
  <p class="recipe-category">Category Name</p>
  <div class="recipe-instruct">
    <h3>Instructions:</h3>
    <p>${meal.strInstructions}</p>
  </div>
  <div class="recipe-meal-img">
    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
  </div>
  <div class="recipe-link">
    <a href="${meal.strYoutube}" target="_blank">Watch Video</a>
  </div>`;
  mealDetailsContent.innerHTML = html;
  mealDetailsContent.parentElement.classList.add('show-recipe');
};

const getMealDetails = (e) => {
  e.preventDefault();
  if (e.target.classList.contains('recipe-btn')) {
    const mealItem = e.target.parentElement.parentElement;
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealItem.dataset.id}`)
      .then((response) => response.json())
      .then((data) => mealRecipeModal(data.meals));
  }
};

const modalDetail = () => {
  mealList.addEventListener('click', getMealDetails);
  recipeCloseBtn.addEventListener('click', () => {
    mealDetailsContent.parentElement.classList.remove('show-recipe');
  });
};

export default modalDetail;