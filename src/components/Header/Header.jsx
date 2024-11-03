import PropTypes from "prop-types";

const Header = ({title, subTitle}) => {
    return (
        <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-3xl font-bold pb-5">{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
}

export default Header;