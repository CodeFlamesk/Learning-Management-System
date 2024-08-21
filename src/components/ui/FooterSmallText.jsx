const FooterSmallText = ({ title, styles }) => {
    return (
        <p className={`text-grey-300 text-sm font-normal leading-5 pt-4 ${styles}`}>
            {title}
        </p>
    )
}
export default FooterSmallText