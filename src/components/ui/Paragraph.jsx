const Paragraph = ({ text, styles, children }) => {
    return (
        <p className={`text-sm sm:text-base leading-relaxed text-grey-700 font-normal ${styles}`}>
            {text, children}
        </p>

    )
}
export default Paragraph