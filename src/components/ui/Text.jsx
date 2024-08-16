

const Text = ({ text, styles }) => {
    return (
        <p className={`text-sm md:text-base text-grey leading-relaxed text-bold font-normal ${styles}`}>
            {text}
        </p>
    )
}

export default Text