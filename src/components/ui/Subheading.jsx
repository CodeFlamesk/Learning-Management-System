const Subheading = ({ title, styles }) => {
    return (
        <h3 className={`  text-grey-900 text-xl leading-7 font-semibold ${styles}`}>
            {title}
        </h3>

    )
}
export default Subheading