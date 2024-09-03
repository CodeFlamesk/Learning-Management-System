const Subtitle = ({ title, styles }) => {
    return (
        <h4 className={`text-grey-900  text-base xs:text-sm sm:text-lg font-semibold ${styles}`}>
            {title}
        </h4>
    )
}

export default Subtitle