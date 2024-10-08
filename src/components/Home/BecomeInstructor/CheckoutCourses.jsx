import Checkout from './imgBecome/Checkout.webp'
import Subheading from '@/components/ui/Subheading'
import BlackButtonLinks from '@components/ui/buttons/BlackButtonLinks'
import ArrowButton from '../../ui/buttons/icon/ArrowButton'
import { useSelector } from 'react-redux';
const data = [


    {
        title: "Become an Instructors",
        text: "Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.",
        buttonText: "Start Your Instructor Journey",
        becomeImg: Checkout,
        iconComponent: <ArrowButton />
    }
]


const CheckoutCourses = () => {
    return (
        <div className='mb-7 pt-7 md:pb-14 md:pt-14'>
            {
                data.map((item, index) => {
                    return (
                        <CheckoutCourse key={index} {...item}>
                            {item.iconComponent}
                        </CheckoutCourse>
                    );
                })
            }

        </div>
    );
};

const CheckoutCourse = ({ title, text, buttonText, becomeImg, iconComponent }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (
        <div className='flex flex-col-reverse fs:flex-row justify-between md:gap-x-36 gap-4 items-center mde:justify-center'>

            <div className='flex flex-col items-center text-center fs:text-left fs:items-start max-w-96 md:max-w-full /* md:w-2/5 */ '>
                <Subheading title={title} />
                <p className='font-normal text-base leading-7 pt-2 pb-4'> {text}</p>

                <BlackButtonLinks link={isLoggedIn ? "/myprofile/profile" : "/login"} buttonText={buttonText} iconComponent={iconComponent} />
            </div>
            <div className='md:basis-[37%]'>
                <img className='max-w-48 fs:max-w-60  md:max-w-full' src={becomeImg} alt="StartInstructor" loading={'lazy'} width="472"
                    height="385" />
            </div>
        </div>
    )
}


export default CheckoutCourses;
