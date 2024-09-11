const Paragraph = ({ styles, children }) => {
    return (
        <p className={`text-sm sm:text-base leading-relaxed text-grey-700 font-normal ${styles}`}>
            {children}
        </p>

    )
}
export default Paragraph