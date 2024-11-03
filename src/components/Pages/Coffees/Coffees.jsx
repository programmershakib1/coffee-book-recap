import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";
import { useState } from "react";

const Coffees = () => {
    const data = useLoaderData();
    const [coffees, setCoffees] = useState(data);
    const handleSort = sorted => {
        if(sorted === 'popularity'){
            const sortByPopular = [...data].sort((a, b) => b.popularity - a.popularity);
            setCoffees(sortByPopular);
        }
        else if(sorted === 'rating'){
            const sortByRating = [...data].sort((a, b) => b.rating - a.rating);
            setCoffees(sortByRating)
        }
    }
    // const handleSort = () => {
    //     const sortByPopular = [...data].sort((a, b) => b.popularity - a.popularity);
    //     setCoffees(sortByPopular)
    // }
    // const handleSortByRating = () => {
    //     const sortByRating = [...data].sort((a, b) => b.rating - a.rating);
    //     setCoffees(sortByRating)
    // }
    return (
        <div>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-xl font-semibold">Sort Coffee&apos;s by Popularity & Rating-&gt;</h1>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <button onClick={() => handleSort('popularity')} className="font-bold bg-warning rounded-full px-8 py-3">Sort by Popularity</button>
                    <button onClick={() => handleSort('rating')} className="font-bold bg-warning rounded-full px-8 py-3">Sort by Rating</button>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    coffees.map((coffee, idx) => <Card key={idx} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Coffees;