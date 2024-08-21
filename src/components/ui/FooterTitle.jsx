const FooterTitle = ({ title, styles }) => {
    return (
        <h3 className={` text-grey-100 text-base sm:text-lg leading-7 font-semibold  pt-5 sm:pt-0  ${styles}`}>
            {title}
        </h3>

    )
}
export default FooterTitle