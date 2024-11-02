const Header = ({title, subTitle}) => {
    return (
        <div className="flex flex-col justify-center items-center py-10">
            <h2 className="text-2xl font-semibold pb-5">{title}</h2>
            <p>{subTitle}</p>
        </div>
    );
};

export default Header;