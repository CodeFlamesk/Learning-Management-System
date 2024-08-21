import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import QuotesComments from './icon/quotes';
import CommentsAuthorImg from "@/components/CommentsSlider/imgComments/CommentsAuthorImg.svg";
import CommentsSlide from './CommentsSlide';
import HeaderBlock from '@/components/HeadersBlock/HeaderBlock';
import SliderButton from '@/components/ui/buttons/SliderButton';
import { Navigation } from 'swiper/modules';

const data = [
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    },
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    },
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    },
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    },
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    },
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia.`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    },
    {
        iconComponent: <QuotesComments />,
        text: `"Byway's tech courses are top-notch! As someone who's always looking to stay ahead in the rapidly evolving tech world, I appreciate the up-to-date content and engaging multimedia."`,
        imgComments: CommentsAuthorImg,
        author: "Jane Doe",
        profession: "Designer"
    }
];

const CommentsSlider = () => {
    return (
        <div className='max-w-screen-ct mx-auto px-5 sm:px-8'>

            <HeaderBlock title={"What Our Customer Say About Us"}>
                <SliderButton />
            </HeaderBlock>


            <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                spaceBetween={16}

                loop={true}
                navigation={{  // Додаємо параметри навігації
                    prevEl: '.swiper-button-prev',
                    nextEl: '.swiper-button-next'
                }}
                breakpoints={{
                    140: {
                        slidesPerView: 1,
                        spaceBetween: 15,

                    },
                    478: {
                        slidesPerView: 1.5,
                        spaceBetween: 16,

                    },
                    700: {
                        slidesPerView: 2,
                        spaceBetween: 16,


                    },
                    961: {
                        slidesPerView: 2.2,
                        spaceBetween: 16,

                    },

                    1144: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },

                    1358: {
                        slidesPerView: 3,
                        spaceBetween: 16,
                    },
                }}
            >

                {



                    data.map((item, index) => {
                        return (
                            <SwiperSlide key={index} className='flex items-stretch  h-auto' >
                                <CommentsSlide {...item} className='flex max-h-full' />
                            </SwiperSlide>
                        )
                    })
                }

            </Swiper>
        </div >

    );
};

export default CommentsSlider;
