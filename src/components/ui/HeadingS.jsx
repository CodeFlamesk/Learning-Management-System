const HeadindS = ({ title, styles }) => {
    return (
        <h2 className={` font-semibold text-xl sm:text-3xl sm:leading-10 text-grey-900 ${styles}`}>
            {title}
        </h2>

    )
}
export default HeadindS;