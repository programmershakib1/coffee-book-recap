import toast from "react-hot-toast";

// get all coffees from localStorage
const getAllFavorites = () => {
    const all = localStorage.getItem('favorites');
    if(all){
        const favorites = JSON.parse(all);
        return favorites;
    }
    else{
        return [];
    }
}

// add a coffee to localStorage
const addFavorite = coffee => {
    const favorites = getAllFavorites();

    const isExist = favorites.find(item => item.id == coffee.id);

    if(isExist) return toast.error('This coffee already added');

    favorites.push(coffee);

    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully added');
}

// remove coffee from localStorage
const removeFavorite = (id) => {
    const favorites = getAllFavorites();
    const remaining = favorites.filter(coffee => coffee.id != id);
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully removed');
}

export {addFavorite, getAllFavorites, removeFavorite}