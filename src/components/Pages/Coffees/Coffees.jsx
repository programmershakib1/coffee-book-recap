import { useLoaderData } from "react-router-dom";
import Card from "../../Card/Card";

const Coffees = () => {
    const data = useLoaderData();
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
                {
                    data.map((coffee, idx) => <Card key={idx} coffee={coffee}></Card>)
                }
            </div>
    );
};

export default Coffees;