const UnderlineLink = ({ children }) => {
    return (
        <button className="relative text-green-link  inline-block pb-1 group" >
            <p className=' text-grey-900 text-sm font-normal leading-5 group-hover:text-green-link duration-300 transition-all'>{children}</p>

            <span className="absolute bg-green-link left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
        </button >
    );
};
export default UnderlineLink;