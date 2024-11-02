import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../../Banner/Banner";
import Categories from "../../Categories/Categories";
import Header from "../../Header/Header";

const Home = () => {
    const categories = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Header title={'Browse Coffees by Category'} subTitle={'Choose your coffee category to browse through specific coffees that fit in your taste'}></Header>
            <Categories categories={categories}></Categories>
            <Outlet></Outlet>
        </div>
    );
};

export default Home;