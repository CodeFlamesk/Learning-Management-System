

const Text = ({ text, styles }) => {
    return (

        <strong className={`flex text-sm md:text-base text-grey leading-relaxed text-bold font-normal ${styles}`}> {text} </strong>

    )
}

export default Text