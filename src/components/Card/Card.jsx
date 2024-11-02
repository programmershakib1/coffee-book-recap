import { Link } from "react-router-dom";

const Card = ({coffee}) => {
    const {name, image, category, origin, type, id, rating, popularity} = coffee;
    return (
        <div className="flex flex-col relative border p-5 rounded-xl">
            <Link to={`/coffee/${id}`} className="transition hover:scale-105 rounded-xl">
                <div className="h-56 lg:h-72 w-full">
                    <img className="w-full h-full rounded-xl" src={image} alt="" />
                </div>
                <div className="p-4">
                    <h2 className="text-xl">Name: {name}</h2>
                    <p>Category: {category}</p>
                    <p>Type: {type}</p>
                    <p>Origin: {origin}</p>
                    <p>Rating: {rating}</p>
                    <p>Popular: {popularity}</p>
                </div>
            </Link>
        </div>
    );
};

export default Card;