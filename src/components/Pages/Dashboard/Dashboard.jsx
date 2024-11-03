import { useState } from "react";
import Header from "../../Header/Header";
import { useEffect } from "react";
import { getAllFavorites, removeFavorite } from "../../../utilities";
import Card from "../../Card/Card";

const Dashboard = () => {
    const [coffees, setCoffees] = useState([]);
    useEffect(() => {
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }, [])

    const handleRemove = (id) => {
        removeFavorite(id);
        const favorites = getAllFavorites();
        setCoffees(favorites);
    }
    return (
        <div>
            <Header title={"Welcome to Dashboard"} subTitle={"Manage coffee that you have previously added as favorite. You can view or remove that from hare"}></Header>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    coffees.map((coffee, idx) => <Card key={idx} handleRemove={handleRemove} coffee={coffee}></Card>)
                }
            </div>
        </div>
    );
};

export default Dashboard;