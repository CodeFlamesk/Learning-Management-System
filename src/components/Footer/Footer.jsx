import facebook from './img/facebook-logo.webp';
import GitHub from './img/GitHub.webp';
import google from './img/google-logo.webp';
import microsoft from './img/microsoft-logo.webp';
import twitter from './img/twitter-logo.webp';
import logoFooter from './img/logo-footer.webp';
import SmallText from '@/components/ui/SmallText';
import Subheading from '@/components/ui/Subheading';
import ButtonText from '@/components/ui/buttons/ButtonText';
import FooterTitle from '@/components/ui/FooterTitle';
import FooterSmallText from '@/components/ui/FooterSmallText';
export const LinkSocial = ({ styleAll, styleIcon }) => {
    return (
        <div className={`flex  flex-wrap ${styleAll}`}>
            <a href="#">
                <div className={`${styleIcon} `}>
                    <img src={facebook} alt="Logo-facebook" className={`w-6 h-6  `} />
                </div>
            </a>

            <a href="#">
                <div className={`${styleIcon}`}>
                    <img src={GitHub} alt="Logo-GitHub" className={`w-6 h-6  `} />
                </div>
            </a>

            <a href="#">
                <div className={`${styleIcon}`}>
                    <img src={google} alt="Logo-google" className={`w-6 h-6  `} />
                </div>
            </a>



            <a href="#">
                <div className={`${styleIcon} group`}>
                    <img src={twitter} alt="Logo-twitter " className={`w-6 h-6  filter  group-hover:brightness-0 group-hover:invert  `} />
                </div>
            </a>

            <a href="#">
                <div className={`${styleIcon} `}>
                    <img src={microsoft} alt="Logo-microsoft" className={`w-6 h-6  `} />
                </div>
            </a>

        </div >
    );
};
const Footer = () => {

    return (
        <div className=' bg-grey-800 px-5 sm:px-8 '>
            <div className='flex  flex-col max-w-screen-xl mx-auto  sm:flex-row justify-between pb-14 pt-7 md:gap-6 md:pt-20 md:pb-25 '>
                <div className='basis-[42%] md:basis-[33%]' >
                    <img src={logoFooter} alt="Logo" />
                    <FooterSmallText title={`Empowering learners through accessible and engaging online education.
Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.`} />
                </div>
                <div className='flex flex-col sm:flex-row flex-wrap   justify-between basis-[58%] gap-6 sm:justify-center sm:gap-x-110 lg:gap-x-6 lg:justify-between '>
                    <div >
                        <FooterTitle title={"Get Help"} />
                        <div className='flex flex-wrap gap-x-3 sm:flex-col ' >
                            <ButtonText href="#" text={"Contact Us"} />
                            <ButtonText href="#" text={"Latest Articles"} />
                            <ButtonText href="#" text={"FAQ"} />
                        </div>

                    </div>
                    <div>
                        <FooterTitle title={"Programs"} />
                        <div className='flex flex-wrap gap-x-3 sm:flex-col md:w-24'  >
                            <ButtonText href="#" text={"Art & Design"} />
                            <ButtonText href="#" text={"IT & Software"} />
                            <ButtonText href="#" text={"Languages"} />
                            <ButtonText href="#" text={"Programming"} />
                        </div>

                    </div>
                    <div >
                        <FooterTitle title={"Contact Us"} />
                        <div className='flex gap-1'>
                            <p className=' text-grey-300  text-sm leading-relaxed font-medium  '  >Adress:</p>
                            <ButtonText href="https://maps.app.goo.gl/RYtzPor1RtuJYZ7e8" text={"123 Main Street, Anytown, CA\u00A012345"} />
                        </div>
                        <div className='flex gap-1 '>
                            <p className=' text-grey-300  text-sm leading-relaxed font-medium  ' >Tel:</p>
                            <ButtonText href="tel:" text={"+(123) 456-7890"} />
                        </div>
                        <div className='flex  gap-1'>
                            <p className=" text-grey-300  text-sm leading-relaxed font-medium  " >Mail:</p>
                            <ButtonText type='email' href="mailto:Flamecorporationxd@gmail.com" text={"Flamecorporationxd@gmail.com"} />
                        </div>

                        <LinkSocial styleIcon="footer-social" styleAll="pt-4 sm:pt-6  gap-5" />
                    </div >
                </div >
            </div >
        </div >

    );
}

export default Footer;
