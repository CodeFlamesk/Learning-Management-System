import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavArrow from "@/components/ui/icons/NavArrow";
import SmallText from "@/components/ui/SmallText";
import Container from '@/components/ui/Container';
import PromotionImg from "@/components/CoursesPageCard/img/promotion.webp"
import Rating from '@/components/Courses/Rating';
import SmoothStar from '@/components/CoursesPageCard/icon/SmoothStar';
import SubheadingM from '@/components/ui/SubheadingM';
import TotalPrice from '@components/CheckOut/TotalPrice';
import UnderlineLink from '@components/ui/buttons/UnderlineLink';
const ShoppingCart = () => {

    const { id } = useParams();

    return (
        <Container>
            <div className="flex flex-col md:flex-row md:gap-2  md:items-center pt-10 ">
                <p className="text-grey-900 font-semibold text-32fz pr-9">Shopping Cart</p>

                <div className='flex items-center'>
                    <Link to="/categories" className="brand-name">
                        <UnderlineLink>
                            Categories
                        </UnderlineLink>
                    </Link>
                    <NavArrow />

                    <Link to={`/categories/${id}/details/description`} className="brand-name">
                        <UnderlineLink>
                            Details
                        </UnderlineLink>
                    </Link>
                    <NavArrow />

                    <p className='text-primary-500 text-sm font-normal leading-5 '> Shopping Cart </p>


                </div>

            </div>

            <div className='flex flex-col-reverse tb:flex-row tb:justify-between gap-5  pb-8'>
                <div className='flex flex-col'>
                    <p className=' w-full border-b border-grey-border pb-1'>1 Course in cart</p>

                    <div className='flex flex-col pt-6 gap-4'>
                        <div className='flex flex-col md:flex-row gap-2 bg-white border border-grey-border px-5 py-4 rounded-lg'>

                            <img src={PromotionImg} alt="promotion" className="rounded-4r w-full md:w-192w  md:min-h-full object-cover" />
                            <div className='flex flex-col w-full'>

                                <div className='flex justify-between gap-3'>
                                    <SubheadingM title="Introduction to User Experience&nbsp;Design" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>

                                <SmallText title="By John Doe" />
                                <div className="flex md:pt-2  xl:items-center gap-1 xl:gap-3  flex-col xl:flex-row">
                                    <div className="flex items-center  gap-1">
                                        <p className="text-base font-medium text-yellow ">4.6</p>
                                        <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                        <SmallText title="(651651 rating)" />
                                    </div>
                                    <div className="flex  gap-1.5 ">
                                        <SmallText title="|" styles="hidden xl:block" />
                                        <SmallText title="22 Total Hours. 155 Lectures. All levels" />
                                    </div>
                                </div>
                                <div className='flex gap-1.5 pt-2'>
                                    <button className="relative inline-block pb-1 group">
                                        <SmallText title="Save for later" styles="text-primary-500" />
                                        <span className="absolute bg-primary-500 left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    <SmallText title="|" />

                                    <button className="relative text-error-600  inline-block pb-1 group">
                                        <p className='text-error-600 text-xs sm:text-sm font-normal leading-5'>Remove</p>

                                        <span className="absolute bg-error-600 left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col pt-6 gap-4'>
                        <div className='flex flex-col md:flex-row gap-2 bg-white border border-grey-border px-5 py-4 rounded-lg'>

                            <img src={PromotionImg} alt="promotion" className="rounded-4r w-full md:w-192w  md:min-h-full object-cover" />
                            <div className='flex flex-col w-full'>

                                <div className='flex justify-between gap-3'>
                                    <SubheadingM title="Introduction to User Experience&nbsp;Design" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>

                                <SmallText title="By John Doe" />
                                <div className="flex md:pt-2  xl:items-center gap-1 xl:gap-3  flex-col xl:flex-row">
                                    <div className="flex items-center  gap-1">
                                        <p className="text-base font-medium text-yellow ">4.6</p>
                                        <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                        <SmallText title="(651651 rating)" />
                                    </div>
                                    <div className="flex  gap-1.5 ">
                                        <SmallText title="|" styles="hidden xl:block" />
                                        <SmallText title="22 Total Hours. 155 Lectures. All levels" />
                                    </div>
                                </div>
                                <div className='flex gap-1.5 pt-2'>
                                    <button className="relative inline-block pb-1 group">
                                        <SmallText title="Save for later" styles="text-primary-500" />
                                        <span className="absolute bg-primary-500 left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    <SmallText title="|" />

                                    <button className="relative text-error-600  inline-block pb-1 group">
                                        <p className='text-error-600 text-xs sm:text-sm font-normal leading-5'>Remove</p>

                                        <span className="absolute bg-error-600 left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5 bg-current transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='flex flex-col pt-6 gap-4'>
                        <div className='flex flex-col md:flex-row gap-2 bg-white border border-grey-border px-5 py-4 rounded-lg'>

                            <img src={PromotionImg} alt="promotion" className="rounded-4r w-full md:w-192w  md:min-h-full object-cover" />
                            <div className='flex flex-col w-full'>

                                <div className='flex justify-between gap-3'>
                                    <SubheadingM title="Introduction to User Experience&nbsp;Design" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>

                                <SmallText title="By John Doe" />
                                <div className="flex md:pt-2  xl:items-center gap-1 xl:gap-3  flex-col xl:flex-row">
                                    <div className="flex items-center  gap-1">
                                        <p className="text-base font-medium text-yellow ">4.6</p>
                                        <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                        <SmallText title="(651651 rating)" />
                                    </div>
                                    <div className="flex  gap-1.5 ">
                                        <SmallText title="|" styles="hidden xl:block" />
                                        <SmallText title="22 Total Hours. 155 Lectures. All levels" />
                                    </div>
                                </div>
                                <div className='flex gap-1.5 pt-2'>
                                    <button className="relative inline-block pb-1 group">
                                        <SmallText title="Save for later" styles="text-primary-500" />
                                        <span className="absolute bg-primary-500 left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                    <SmallText title="|" />

                                    <button className="relative text-error-600  inline-block pb-1 group">
                                        <p className='text-error-600 text-xs sm:text-sm font-normal leading-5'>Remove</p>

                                        <span className="absolute bg-error-600 left-1/2 bottom-1 transform -translate-x-1/2 w-0 h-0.5  transition-all duration-300 group-hover:w-full"></span>
                                    </button>

                                </div>

                            </div>
                        </div>

                    </div>


                </div>

                <TotalPrice cardWidth="w-full tb:w-330w mt-2" title='Order Details' padingTop="pt-3">
                    <Link to={`/categories/${id}/details/shoppingcart/checkout`} className="p-2.5  rounded-lg font-medium  box-border text-sm border items-center border-text-dark   text-white  bg-text-dark hover:text-grey-900 hover:bg-sl-blue  transition-all duration-500  mt-4">
                        <p className='flex items-center justify-center'>Proceed to Checkout</p>

                    </Link>
                </TotalPrice>
            </div>







        </Container>

    );
};

export default ShoppingCart;
