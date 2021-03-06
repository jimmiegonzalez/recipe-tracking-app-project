import React from "react";
import RecipeRow from "./RecipeRow";
import './App.css';






function RecipeList({ recipes, setRecipes, deleteRecipe }) {

    // TODO: Display the list of recipes using the structure of table that is provided.
    // TODO: Create at least one additional component that is used by this component.
    // TODO: Each recipe row must have a delete button - <button name="delete">Delete</button> - that deletes the post when clicked


    // const tbodyStyle = {
    //     backgroundColor: '#fff0c7',
    // }

    return (
        <div className="recipe-list">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Cuisine</th>
                        <th>Photo</th>
                        <th>Ingredients</th>
                        <th>Preparation</th>
                        <th>Actions</th>
                    </tr>
                </thead>
        <tbody>
            {recipes.map((recipe, index) => (
                <RecipeRow
                    recipe={recipe}
                    deleteRecipe={() => deleteRecipe(index)}
                    key={index} />
            ))}
        </tbody>
        </table>
        </div>
    );
}

export default RecipeList;