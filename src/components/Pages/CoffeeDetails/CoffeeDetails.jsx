import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import nutritionImg from '../../../assets/nutrition.png'
import { addFavorite, getAllFavorites } from "../../../utilities";

const CoffeeDetails = () => {
    const data = useLoaderData();
    const {id} = useParams();
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    useEffect(() => {
        const singleData = data.find(single => single.id === parseInt(id));
        setCoffee(singleData);
        const favorites = getAllFavorites();
        const isExist = favorites.find(item => item.id == coffee.id);
         if(isExist){
            setIsFavorite(true);
         }
    }, [coffee.id, data, id]);

    const {name, image, ingredients, nutrition_info, description, making_process, rating, popularity} = coffee;

    const handleFavorite = (coffee) => {
        addFavorite(coffee);
        setIsFavorite(true);
    }

    return (
        <div>
      {/* Description */}
      <h1 className='text-2xl md:text-4xl font-medium mb-10'>{description}</h1>
      {/* Image */}
      <div className='w-full h-96 lg:h-[600px]'>
        <img className='w-full h-full rounded-xl' src={image} alt='' />
      </div>
      {/* Title and Favorite Button */}
      <div className='flex justify-between items-center my-6'>
        <div>
          <h1 className='text-2xl md:text-3xl font-medium pb-3'>{name}</h1>
          <p>Popularity: {popularity}</p>
          <p>Rating: {rating}</p>
        </div>
        <div>
          <button
            disabled={isFavorite}
            onClick={() => handleFavorite(coffee)}
            className='btn btn-warning'
          >
            Add Favorite
          </button>
        </div>
      </div>
      {/* Making Process */}
      <div className='my-6'>
        <h2 className='text-2xl font-medium'>Making Process:</h2>
        <p>{making_process}</p>
      </div>

      <div className='my-6 flex justify-between items-center'>
        <div className='flex-1'>
          <div className='flex flex-col justify-center gap-6'>
            <h1 className='text-2xl font-medium'>Ingredients:</h1>
            <ul className='text-xl ml-12'>
              {ingredients &&
                ingredients.map((item, i) => (
                  <li className='list-disc' key={i}>
                    {item}
                  </li>
                ))}
            </ul>
            <h1 className='text-2xl font-medium'>Nutrition:</h1>
            <ul className='text-xl ml-12'>
              {nutrition_info &&
                Object.keys(nutrition_info).map((n, i) => (
                  <li className='list-disc' key={i}>
                    {n}: {nutrition_info[n]}
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <div className='flex-1'>
          <img src={nutritionImg} alt='' />
        </div>
      </div>
    </div>
    );
};

export default CoffeeDetails;