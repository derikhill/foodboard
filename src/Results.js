import MealCard from './MealCard';
// import { Skeleton } from '@webeetle/windy';

const Results = ({meals}) => {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-3 m-8">
      {!meals.length ?
      ( <h1>No meals found</h1> ) :
      (
        meals.map((meal) => (
          <MealCard
            key={meal._id}
            id={meal._id}
            category={meal.category}
            title={meal.title}
            description={meal.description}
          />
        )
        )
      )}
    </div>
  );
}

export default Results;
