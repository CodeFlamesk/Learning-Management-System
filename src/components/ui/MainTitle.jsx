

const MainTitle = ({ title, styles }) => {
    return (
        <h1 className={`text-grey-900 text-3xl  lg:text-[40px] font-bold leading-tight ${styles}`}>
            {title}
        </h1>
    )
}



export default MainTitle
