const categories = document.getElementById('categories');
const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories}`);

const categoryItems = categories.querySelectorAll('.item');
categoryItems.forEach((item) => {
  const categoryTitle = item.querySelector('h2').textContent;
  const categoryItemsCount = item.querySelectorAll('li').length;
    console.log(`Category: ${categoryTitle}`);
    console.log(`Elements: ${categoryItemsCount}`);
});