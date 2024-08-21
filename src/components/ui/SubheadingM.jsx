const SubheadingM = ({ title, styles }) => {
    return (
        <h3 className={`  text-grey-900 text-lg xs:text-base  sm:text-xl   font-semibold ${styles}`}>
            {title}
        </h3>
    )
}
export default SubheadingM