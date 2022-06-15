import classes from './AvailableMeals.module.css'

const Dummy_Meals = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest Fish and Vegies",
    price: 22.34,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green... Broccoli",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  return (
    <section className={classes.meals}>
      <ul>{Dummy_Meals.map((meal) => <li>{meal.name}</li>)}</ul>
    </section>
  );
};

export default AvailableMeals;
