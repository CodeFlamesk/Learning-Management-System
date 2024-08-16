const SmallText = ({ title, styles }) => {
    return (
        <p className={`text-grey-700 text-xs sm:text-sm font-normal leading-5  ${styles}`}>
            {title}
        </p>
    )
}
export default SmallText