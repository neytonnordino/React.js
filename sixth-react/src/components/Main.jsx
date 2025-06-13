import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientList from "./IngredientList";

export default function Main() {
  const [ingredients, setIngredients] = useState([
    "Chicken",
    "Oregano",
    "Tomatoes",
    "Tomatoes",
  ]);

  const [recipeShown, setRecipeShown] = useState(false);

  function getRecipe() {
    setRecipeShown((prevRecipe) => !prevRecipe);
  }

  function addIngredient(formData) {
    const newIngredient = formData.get("ingredient");
    setIngredients((prevIngredints) => [...prevIngredints, newIngredient]);
  }

  return (
    <main>
      <form action={addIngredient}>
        <input
          aria-label="Add ingredient"
          placeholder="e.g. oregano"
          name="ingredient"
        />
        <button>Add ingredient</button>
      </form>
      {ingredients.length > 0 && (
        <IngredientList ingredients={ingredients} getRecipe={getRecipe} />
      )}
      {recipeShown && <ClaudeRecipe />}
    </main>
  );
}
