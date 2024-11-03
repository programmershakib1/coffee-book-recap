import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

const Categories = ({categories}) => {
  return (
    <div>
      <div role="tablist" className="tabs tabs-lifted">
        {
            categories.map((category, idx) => <NavLink key={idx} to={`/category/${category.category}`}  role="tab" className={({isActive}) => `tab ${isActive?'tab-active font-semibold': '' }`}>{category.category}</NavLink>)
        }
      </div>
    </div>
  );
};

Categories.propTypes = {
  categories: PropTypes.array
}

export default Categories;
