import MainBlockText from '@/components/MainBlock/MainBlockText'


const MainSlide = ({ image, text, title, buttonText }) => {
    return (
        <div className='flex flex-col md:flex-row py-8 items-center justify-between gap-10 md:h-[600px] '>
            <div className="basis-[46%]">
                <MainBlockText buttonText={buttonText} title={title} text={text} />
            </div>
            <div className="basis-[48%]">
                <img className='max-w-full' src={image} alt="img-rating" />
            </div>
        </div>
    )
}

export default MainSlide