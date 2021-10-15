import { Link } from 'react-router-dom';
import { Badge } from "@webeetle/windy";

const MealCard = ({id,title, category, description}) => { //{title, category, description}
  return (
    <Link to={`/food/${id}`}>
      <div className="meal-card border border-gray-200 rounded-md">
        <div className="flex flex-col p-1">
          <Badge 
            text={ category }
            size="xs"
            className="w-1/4 text-center place-self-end"/>
          <h2 className="text-2xl pb-1"> { title } </h2>
          <p className="font-light pb-1"> { description } </p>
        </div>
        <img src='http://lorempixel.com/275/200/food' className="absolute bottom-0" alt={ title } />
      </div>
    </Link>
  )
}

export default MealCard;
