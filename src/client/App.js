import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home/Home";
import Meals from "./components/Meals/Meals";
import AddReservation from "./components/AddReservation/AddReservation";
import TestComponent from "./components/TestComponent/TestComponent";
import Createmeal from "./components/Meals/CreateMeal";
import Mealreviews from "./components/Meals/MealReviews";


function App() {

  const [meals, setMeals] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/meals")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMeals(data);
      });
    fetch("/api/reviews")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setReviews(data);
      });
  }, []);


  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home meals={meals} reviews={reviews} />
        </Route>
        <Route exact path="/meals">
          <Meals meals={meals} />
        </Route>
        <Route exact path={`/meals/:id`}>
          <AddReservation meals={meals} />
        </Route>
        <Route exact path={`/meals/:id/reviews`}>
          <Mealreviews meals={meals} />
        </Route>
        <Route exact path="/create-meal">
          <Createmeal></Createmeal>
        </Route>
        <Route exact path="/test-component">
          <TestComponent></TestComponent>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
