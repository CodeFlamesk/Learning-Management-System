
import Container from "@components/ui/Container";
import NavArrow from "@components/ui/icons/NavArrow";

import SubheadingM from "@components/ui/SubheadingM";
import { Link, useParams } from "react-router-dom";

import CheckBox from "@components/ui/CheckBox";
import CheckBoxRound from "@components/ui/CheckBoxRound";
import Subheading from "@components/ui/Subheading";
import PromotionImg from "@/components/CoursesPageCard/img/promotion.webp"
import SmallText from "@components/ui/SmallText";
import CoupenCode from "@components/ui/icons/CoupenCode";
import TotalPrice from "@components/CheckOut/TotalPrice";
import UnderlineLink from "@components/ui/buttons/UnderlineLink";
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
    const { id } = useParams();





    return (


        <Container>

            <div className="flex flex-col md:flex-row md:gap-2  md:items-center pt-10 basis-[65.625%] ">
                <p className="text-grey-900 font-semibold text-32fz pr-9">Checkout Page</p>

                <div className='flex items-center'>

                    <Link to={`/categories/${id}/details/description`} >
                        <UnderlineLink>
                            Details
                        </UnderlineLink>
                    </Link>
                    <NavArrow />

                    <Link to={`/categories/${id}/details/shoppingcart`} >
                        <UnderlineLink>
                            Shopping Cart
                        </UnderlineLink>
                    </Link>
                    <NavArrow />
                    <p className='text-primary-500 text-sm font-normal leading-5 '> Checkout </p>



                </div>

            </div>

            {/*  left-right*/}

            <div className="flex  flex-col-reverse w-full  gap-10 pt-[22px] tb:flex-row tb:justify-between ">
                {/* left */}


                <div className=" tb:basis-[65%] pb-17w">
                    <CheckBoxRound style="flex flex-col  bg-sl-main rounded-lg p-4" />
                </div>
                {/* right */}
                <div className="flex flex-col pb-17w">
                    <Subheading title="Order Details" />
                    <div className='flex flex-col pt-2 gap-4 tb:w-400w'>
                        <div className='flex flex-col md:flex-row gap-2 bg-sl-main border border-grey-border  p-4 rounded-lg'>
                            <img src={PromotionImg} alt="promotion" className="rounded-4r w-full md:w-192w  md:min-h-full object-cover" />
                            <div className='flex flex-col w-full'>

                                <SubheadingM title="Introduction to User Experience Design" styles="xs:text-lg" />

                                <div className="flex flex-col gap-1 pt-1">
                                    <SmallText title="155 Lectures . 22 Total Hours" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>
                            </div>
                        </div>
                        <div className=' flex bg-sl-main border border-grey-border  p-4 rounded-lg gap-2'>
                            <CoupenCode />
                            <SmallText title="APPLY COUPON CODE" styles="text-sm" />
                        </div>
                        {<TotalPrice />}


                    </div>
                    <button
                        type="submit"

                        form="checkoutForm"
                        className="p-2.5 rounded-lg font-medium box-border text-sm border items-center border-text-dark text-white bg-text-dark hover:text-grey-900 hover:bg-sl-blue transition-all duration-500 mt-4"

                    >
                        Proceed to Checkout
                    </button>
                </div>
            </div>




        </Container >



    );
};
export default Checkout;