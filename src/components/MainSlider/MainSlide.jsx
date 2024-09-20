import MainBlockText from '@/components/MainBlock/MainBlockText'


const MainSlide = ({ image, text, title, buttonText }) => {
    return (
        <div className='flex flex-col md:flex-row py-8 items-center justify-between gap-10 md:h-[600px] '>
            <div className="basis-[46%]">
                <MainBlockText buttonText={buttonText} title={title} text={text} />
            </div>
            <div className="basis-[48%]">
                <img className='w-full max-w-full' src={image} alt="img-rating" width="614"
                    height="477" />
            </div>
        </div>
    )
}

export default MainSlide;