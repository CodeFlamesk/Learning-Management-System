
import Checkout from './imgBecome/Checkout.webp'
import StartInstructor from './imgBecome/StartInstructor.webp'
import ArrowButtom from '../../ui/buttons/icon/ArrowButton'
import Subheading from '@/components/ui/Subheading'
import BlackButtonLinks from '@components/ui/buttons/BlackButtonLinks'
import ArrowButton from '../../ui/buttons/icon/ArrowButton'
import { useSelector } from 'react-redux';
const data = [
    {
        title: "Become an Instructors",
        text: "Instructors from around the world teach millions of students on Byway. We provide the tools and skills to teach what you love.",
        buttonText: "Start Your Instructor Journey",
        becomeImg: StartInstructor,
        iconComponent: <ArrowButton />
    }


]


const BecomeInstructor = () => {
    return (
        <div className='pt-7  md:pt-28'>
            {
                data.map((item, index) => {
                    return (
                        <InstructorBecome key={index} {...item}>
                            {item.iconComponent}
                        </InstructorBecome>
                    );
                })
            }

        </div>
    );
};

const InstructorBecome = ({ title, text, buttonText, becomeImg, iconComponent }) => {
    const isLoggedIn = useSelector(state => state.isLoggedIn);
    return (



        <div className='flex flex-col fs:flex-row justify-between   gap-4 items-center mde:justify-center  md:gap-x-36'>
            <div className='basis-[37%]  '>
                <img className='max-w-48  fs:max-w-60 md:max-w-full' src={becomeImg} alt="StartInstructor" loading={'lazy'} width="400"
                    height="425" />
            </div>
            <div className='flex flex-col items-center text-center fs:text-left fs:items-start max-w-96 md:max-w-full /* md:w-2/5 */ '>
                <Subheading title={title} />
                <p className='font-normal text-base leading-7 pt-2 pb-4'> {text}</p>
                <BlackButtonLinks link={isLoggedIn ? "/myprofile/profile" : "/login"} buttonText={buttonText} iconComponent={iconComponent} />     </div>

        </div>
    )
}


export default BecomeInstructor;
