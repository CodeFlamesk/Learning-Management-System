import facebook from './img/facebook-logo.webp';
import GitHub from './img/GitHub.webp';
import google from './img/google-logo.webp';
import microsoft from './img/microsoft-logo.webp';
import twitter from './img/twitter-logo.webp';
import logoFooter from './img/logo-footer.webp';
import ButtonText from '@/components/ui/buttons/ButtonText';
import FooterTitle from '@/components/ui/FooterTitle';
import FooterSmallText from '@/components/ui/FooterSmallText';
import ButtonLinks from '@components/ui/buttons/ButtonLinks';
import { Link, useNavigate } from 'react-router-dom';
export const LinkSocial = ({ styleAll, styleIcon }) => {
    return (
        <div className={`flex  flex-wrap ${styleAll}`}>
            <a href="https://www.bing.com/ck/a?!&&p=814ef97eee203a43JmltdHM9MTcyNjUzMTIwMCZpZ3VpZD0xYzRmNTAwMy0xMTc1LTZjMmYtMzRkZS00NDQyMTA2NzZkMmUmaW5zaWQ9NTE5NA&ptn=3&ver=2&hsh=3&fclid=1c4f5003-1175-6c2f-34de-444210676d2e&psq=%d1%84&u=a1aHR0cHM6Ly91ay11YS5mYWNlYm9vay5jb20v&ntb=1" target="_blank">
                <div className={`${styleIcon} `}>
                    <img src={facebook} alt="Logo-facebook" className={`w-6 h-6  `} />
                </div>
            </a>

            <a href="https://github.com/CodeFlamesk" target="_blank">
                <div className={`${styleIcon}`}>
                    <img src={GitHub} alt="Logo-GitHub" className={`w-6 h-6  `} />
                </div>
            </a>

            <a href="https://www.google.com.ua/" target="_blank">
                <div className={`${styleIcon}`}>
                    <img src={google} alt="Logo-google" className={`w-6 h-6  `} />
                </div>
            </a>



            <a href="https://x.com/" target="_blank">
                <div className={`${styleIcon} group`}>
                    <img src={twitter} alt="Logo-twitter " className={`w-6 h-6  filter  group-hover:brightness-0 group-hover:invert  `} />
                </div>
            </a>

            <a href="#https://azure.microsoft.com/en-us/free/search/?ef_id=_k_a602dbd4e72310f31767bd3da3e9182c_k_&OCID=AIDcmm4rphvbww_SEM__k_a602dbd4e72310f31767bd3da3e9182c_k_&msclkid=a602dbd4e72310f31767bd3da3e9182c" target="_blank">
                <div className={`${styleIcon} `}>
                    <img src={microsoft} alt="Logo-microsoft" className={`w-6 h-6  `} />
                </div>
            </a>

        </div >
    );
};
const Footer = () => {
    const navigate = useNavigate();

    const handleClick = (e) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setTimeout(() => {
            navigate("/");
        }, 300);
    };
    return (
        <div className=' bg-grey-800 px-5 sm:px-8  h-full '>
            <div className='flex  flex-col max-w-screen-xl mx-auto  sm:flex-row justify-between pb-14 pt-7 md:gap-6 md:pt-20 md:pb-25 '>
                <div className='basis-[42%] md:basis-[33%]' >
                    <img src={logoFooter} alt="Logo " onClick={handleClick} className='cursor-pointer' />
                    <FooterSmallText title={`Empowering learners through accessible and engaging online education.
Byway is a leading online learning platform dedicated to providing high-quality, flexible, and affordable educational experiences.`} />
                </div>
                <div className='flex flex-col sm:flex-row flex-wrap   justify-between basis-[58%] gap-6 sm:justify-center sm:gap-x-110 lg:gap-x-6 lg:justify-between '>
                    <div >
                        <FooterTitle title={"Get Help"} />
                        <div className='flex flex-wrap gap-x-3 sm:flex-col ' >
                            <ButtonText href="https://example.com/help" text={"Contact Us"} />
                            <ButtonText href="https://example.com/help" text={"Latest Articles"} />
                            <ButtonText href="https://example.com/help" text={"FAQ"} />
                        </div>

                    </div>
                    <div>
                        <FooterTitle title={"Programs"} />
                        <div className='flex flex-wrap gap-x-3 sm:flex-col md:w-24'  >
                            <ButtonLinks link="/categories" text={"Art & Design"} />
                            <ButtonLinks link="/categories" text={"IT & Software"} />
                            <ButtonLinks link="/categories" text={"Languages"} />
                            <ButtonLinks link="/categories" text={"Programming"} />
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
