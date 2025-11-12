

// =================
// - recipes page - 
// =================

var recipes = {

    smoothie: {
        title: "Green Powder Smoothie",
        description: "A refreshing and energizing smoothie packed with spinach, banana, and tropical fruits.",
        category: "breakfast",
        ingredients: [
            "1 cup fresh spinach",
            "1 ripe banana",
            "1/2 cup pineapple chunks",
            "1/2 cup mango chunks",
            "1 cup coconut water",
            "1 tablespoon chia seeds",
            "ice cubes (optional)"
        ],
        instructions: [
            "Add spinach and coconut water to blender first",
            "Add banana, pineapple, and mango",
            "Sprinkle in chia seeds",
            "Blend on high for 45-60 seconds until smooth",
            "Add ice if desired and blend again briefly",
            "Pour into glass and enjoy immediately"
        ],
        nutrition: {
            calories: "250 cal",
            protien: "4g",
            carbs: "52g",
            fat: "3g"
        }
    },

    salad: {
        title: "Fresh Garden Salad",
        description: "A crisp and colorful salad with mixed greens, cherry tomatoes, and a light vinaigrette.",
        category: "lunch",
        ingredients: [
            "2 cups mixed salad greens",
            "1 cup cherry tomatoes, halved",
            "1/2 cup cucumber, sliced",
            "1/4 cup red onions, thinly sliced",
            "1/4 cup carrot, shredded",
            "1 tablespoon olive oil",
            "1 tablespoon balasamic vinegar",
            "Salt and pepper to taste"
        ],
        insttructions: [
            "Wash and dry well all the vegetables throughly.",
            "Combine greens in a large bowl",
            "Add tomatoes, cucumber, onion and carrots",
            "In a small bowl, whisk together olive oil and vinegar",
            "Season dressing with salt and pepper",
            "Drizzle dressing over salad just before serving",
            "Toss gently and serve immediately"
        ],
        nutritions: {
            calories: "180 cal",
            protien: "3g",
            carbs: "12g",
            fat: "14g"
        }
    },

    noodles: {
        title: "Healthy Noodles Bowl",
        description: "Comforting noodle soup with vegetables and lean protien, inspired by wholesome Japanese couisne.",
        category: "dinner",
        ingredients: [
            "200g soba or whole wheat noodles",
            "4 cups low-sodium vegetable broth",
            "1 cup sliced mushrooms",
            "1 cup bok choy, chopped",
            "2 cloves of garlic, minced",
            "1 talbespoon ginger, grated",
            "2 tablespoons low-sodium soy sauce",
            "1 soft-boiled egg",
            "Green onions for garnish"
        ],
        instructions: [
            "Cook noodles according to package directions, drain and set aside",
            "In a large pot, bring broth to a boil",
            "Add garlic and ginger, simmer for 2 minutes",
            "Add mushrooms, carrot, and cook for 3 minutes",
            "Stir in bok choy and soy sauce, cook until wilted",
            "Divide noodles among bowls",
            "Ladle hot brot and vegetables over noodles",
            "Top with soft-boiled egg and green onions"
        ],
        nutritions: {
            calories: "320cal",
            protien: "15g",
            carbs: "48g",
            fat: "8g"
        }
    },

    cake: {
        title: "Healthy Vanilla Cake",
        description: "A light and fluffy cake made with wholesome ingredients and natural sweeteners.",
        category: "snacks",
        ingredients: [
            "1 1/2 cups whole wheat flour",
            "1/2 cup coconut sugar",
            "1/4 cup honey",
            "1/3 cup coconut oil, melted",
            "2 eggs",
            "1 cup unsweetened almond milk",
            "2 teaspoons vanilla extract",
            "1 1/2 teaspoons baking powder",
            "1/4 teaspoon salt"
        ],
        instructions: [
            "Preheat oven to 350°F (175°C) and grease a cake pan",
            "In a large bowl, whisk together flour, baking powder, and salt",
            "In another bowl, beat eggs with coconut sugar and honey",
            "Add melted coconut oil, almond milk, and vanilla to egg mixture",
            "Pour wet ingredients into dry ingredients and mix until just combined",
            "Pour batter into prepared pan",
            "Bake for 25-30 minutes until toothpick comes out clean",
            "Cool completely before serving"
        ],
        nutrition: {
            calories: "220 cal",
            protein: "5g",
            carbs: "32g",
            fat: "9g"
        }
    },

    avocado: {
        title: "Perfect Avocado Toast",
        description: "Creamy avocado on toasted whole grain bread with a squeeze of lime and everything seasoning.",
        category: "breakfast",
        ingredients: [
            "2 slices whole grain bread",
            "1 ripe avocado",
            "1 tablespoon lime juice",
            "Everything bagel seasoning",
            "Red pepper flakes (optional)",
            "Salt and pepper to taste",
            "Cherry tomatoes for topping (optional)"
        ],
        instructions: [
            "Toast bread slices until golden and crispy",
            "Cut avocado in half and remove pit",
            "Scoop avocado flesh into a bowl",
            "Mash avocado with lime juice, salt, and pepper",
            "Spread mashed avocado evenly on toast",
            "Sprinkle with everything bagel seasoning",
            "Add cherry tomatoes and red pepper flakes if desired",
            "Serve immediately while toast is still warm"
        ],
        nutrition: {
            calories: "280 cal",
            protein: "8g",
            carbs: "28g",
            fat: "16g"
        }
    },

    chicken: {
        title: "Grilled Chicken Wrap",
        description: "Protein-packed wrap with seasoned grilled chicken, fresh vegetables, and creamy Greek yogurt.",
        category: "lunch",
        ingredients: [
            "1 whole wheat tortilla",
            "150g grilled chicken breast, sliced",
            "1/4 cup Greek yogurt",
            "1/2 cup lettuce, shredded",
            "1/4 cup tomatoes, diced",
            "1/4 cucumber, sliced",
            "2 tablespoons red onion, diced",
            "1 teaspoon paprika",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Season chicken with paprika, salt, and pepper",
            "Grill chicken for 6-7 minutes per side until fully cooked",
            "Let chicken rest for 5 minutes, then slice thinly",
            "Warm tortilla in a dry pan for 30 seconds per side",
            "Spread Greek yogurt down the center of tortilla",
            "Layer lettuce, tomatoes, cucumber, and onion",
            "Top with sliced chicken",
            "Fold in sides and roll up tightly",
            "Cut in half and serve"
        ],
        nutrition: {
            calories: "340 cal",
            protein: "32g",
            carbs: "35g",
            fat: "8g"
        }
    }
}



// ==================
// -recipe page js -
// ==================


// starting up

document.addEventListener('DOMContentLoaded', function() {
    console.log('Recipe page loaded!');


    // running only if we're in the recipes page
    if (document.getElementById('recipe-search')) {
        setupRecipeSearch();
        setupRecipeFilters();
    }
});



// search option

function setupRecipeSearch() {
    var searchInput = document.getElementById('recipe-search');

    if (!searchInput) return;

    searchInput.addEventListener('input', function() {
        var searchTerm = this.ariaValueMax.toLowerCase();
        var allCards = document.querySelectorAll('.recipe-card');

        for (var i = 0; i < allCards.length; i++) {
            var card = allCards[i];
            var title =  card.querySlelector('.recipe-title').textContent.toLowerCase();
            var description = card.querySelector('.recipe-description').textContent.toLowerCase();

            if (CSSViewTransitionRule.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';   //show card
            } else {
                card.style.display = 'none';   //hide card
            }
        }
    });
}



//filters

function setupRecipeFilters() {
    var filterButtons = document.querySelectorAll ('.filter-btn');

    for (var i = 0; i < filterButtons.length; i++) {
        filterButtons[i].addEventListener('click', function() {
            var category = this.textContent.toLowerCase();


            //remove active class from all buttons
            for (var j = 0; j < filterButtons.length; j++) {
                filterButtons[j].classList.remove('active');
            }


            //adding active class to the clicked button
            this.classList.add('active');


            //filtering the recipe
            filterRecipesByCategory(category);
        });
    }
}


// show or hide recipe card 
function filterRecipesByCategory(category) {
    var allCards = document.querySelectorAll('.recipe-card');


    //searching...
    for (var i = 0; i < allCards.length; i++) {
        var card = allCards [i];
        var cardCategory = card.getAttribute('data-category');

        if (category === 'all' || cardCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    }
}



// showing recipe details
function showRecipe(recipeId) {
    console.log('Opening recipe:', recipeId);


    // getting recipe
    var recipe = recipes[recipeId];

    if (!recipe) {
        console.log('Recipe not found!');
        return;
    }


    //hiding the grid and showing the recipe details
    document.querySelector('.recipes-section').style.display = 'none';
    document.querySelector('.recipe-controls').style.display = 'none';
    document.getElementById('recipe-details').style.display = 'block';


    // recipe title and desc:
    document.getElementById('details-title').textContent = recipe.title;
    document.getElementById('details-description').tectContent = recipe.description;


    // ingredients
    var ingredientsList = document.getElementById('details-ingredients');
    ingredientsList.innerHTML = '';   //clearing out the previous recipe card

    for (var i = 0; i < recipe.ingredients.length; i++) {
        var li = document.createElement('li');
        li.textContent = recipe.ingredients[i];
        ingredientsList.appendChild(li);
    }


    //filling in instruction list
    var instructionsList = document.getElementById('details-instructions');
    instructionsList.innerHTML = '';   //clearing out the previous instruction card

    for (var i = 0; i < recipe.instructions.length; i++) {
        var li = document.createElement('li');
        li.textContent = recipe.instructions[i];
        instructionsList.appendChild(li);
    }
    

    // filling in nutrition info
    document.getElementById('nutrition-calories').textContent = recipe.nutrition.calories;
    document.getElementById('nutrition-protein').textContent = recipe.nutrition.protein;
    document.getElementById('nutrition-carbs').textContent = recipe.nutrition.carbs;
    document.getElementById('nutrition-fat').textContent = recipe.nutrition.fat;
    

    // save button
    addSaveButton(recipeId);
    

    // Scroll up
    window.scrollTo(0, 0);
}



// hiding recipe card
function hideRecipe() {
    document.getElementById('recipe-details').style.display = 'none';
    document.querySelector('.recipe-controls').style.display = 'block';
    document.querySelector('.recipes-section').style.display = 'block';
}




// saving fav recipe
function addSaveButton(recipeId) {
    var backBtn = document.querySelector('.back-btn');
    var saveBtn = document.getElementById('save-recipe-btn');
    
    // Create save button if it doesn't exist
    if (!saveBtn) {
        saveBtn = document.createElement('button');
        saveBtn.id = 'save-recipe-btn';
        saveBtn.className = 'save-recipe-btn';
        saveBtn.style.cssText = 'margin-left: 10px; padding: 10px 20px; background: #FF9FAE; color: white; border: none; border-radius: 10px; cursor: pointer;';
        backBtn.parentNode.insertBefore(saveBtn, backBtn.nextSibling);
    }
    
    // Check if recipe is already saved
    var savedRecipes = getSavedRecipes();
    var isSaved = false;
    
    for (var i = 0; i < savedRecipes.length; i++) {
        if (savedRecipes[i] === recipeId) {
            isSaved = true;
            break;
        }
    }
    
    // Update button text
    if (isSaved) {
        saveBtn.textContent = '✅ Saved';
        saveBtn.disabled = true;
        saveBtn.style.opacity = '0.6';
    } else {
        saveBtn.textContent = '❤️ Save Recipe';
        saveBtn.disabled = false;
        saveBtn.style.opacity = '1';
    }
    
    // Add click event to save button
    saveBtn.onclick = function() {
        saveRecipeToFavorites(recipeId);
        this.textContent = '✅ Saved';
        this.disabled = true;
        this.style.opacity = '0.6';
        showNotification('Recipe saved to your favorites!', 'success');
    };
}

// Save recipe ID to localStorage
function saveRecipeToFavorites(recipeId) {
    try {
        var savedRecipes = getSavedRecipes();
        
        // Only add if not already saved
        var alreadySaved = false;
        for (var i = 0; i < savedRecipes.length; i++) {
            if (savedRecipes[i] === recipeId) {
                alreadySaved = true;
                break;
            }
        }
        
        if (!alreadySaved) {
            savedRecipes.push(recipeId);
            localStorage.setItem('saved_recipes', JSON.stringify(savedRecipes));
            console.log('✅ Recipe saved!');
        }
    } catch (error) {
        console.log('❌ Could not save recipe:', error);
    }
}

// Get saved recipes from localStorage
function getSavedRecipes() {
    try {
        var saved = localStorage.getItem('saved_recipes');
        return saved ? JSON.parse(saved) : [];
    } catch (error) {
        return [];
    }
}


console.log('✅ recipes.js loaded successfully!');