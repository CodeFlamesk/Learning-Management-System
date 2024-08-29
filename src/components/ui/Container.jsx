
const Container = ({ children, styles }) => {
    return (

        <div className={`max-w-screen-ct mx-auto px-5 sm:px-8  ${styles}`} >
            {
                children
            }
        </div>


    )
}

export default Container


