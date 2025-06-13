export default function IngredientList(props) {
  const listOfIngredients = props.ingredients.map((ingredient) => {
    return <li key={ingredient}>{ingredient}</li>;
  });

  return (
    <section className="ul">
      <h2>Ingredients on hand: </h2>
      <ul aria-live="polite">{listOfIngredients}</ul>
      {props.ingredients.length >= 4 && (
        <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients</p>
          </div>
          <button onClick={props.getRecipe}>Get a recipe</button>
        </div>
      )}
    </section>
  );
}
