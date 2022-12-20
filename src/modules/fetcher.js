import { searchBtn } from './constants.js';
import getMealList from './eventHandle.js';

const fetcher = () => {
  searchBtn.addEventListener('click', getMealList);
};

export default fetcher;