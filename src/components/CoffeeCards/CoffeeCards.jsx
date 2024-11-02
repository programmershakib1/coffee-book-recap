import { useLoaderData, useParams } from "react-router-dom";
import Card from "../Card/Card";
import { useEffect, useState } from "react";

const CoffeeCards = () => {
    const data = useLoaderData();
    const {category} = useParams();
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        if(category){
            const filteredByCategory = [...data].filter(coffee => coffee.category === category);
            setCoffees(filteredByCategory)
        }
        else{
            setCoffees(data.slice(0, 6));
        }
    }, [category, data]);
    
    // if(coffees.length > 6){
        
    // }

    // const navigate = useNavigate();
    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    coffees.map((coffee, idx) => <Card key={idx} coffee={coffee}></Card>)
                }
            </div>
            <button hidden={coffees.length > 6} onClick={() => setCoffees(data)} className="font-bold bg-yellow-500 rounded-full px-10 py-3">View All</button>
        </>
    );
};

export default CoffeeCards;