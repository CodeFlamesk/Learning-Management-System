import React from 'react';
import { useParams, Link } from 'react-router-dom';
import NavArrow from "@/components/ui/icons/NavArrow";
import SmallText from "@/components/ui/SmallText";
import Container from '@/components/ui/Container';
import PromotionImg from "@/components/CoursesPageCard/img/promotion.webp"
import Subheading from '@/components/ui/Subheading';
import Rating from '@/components/Courses/Rating';
import SmoothStar from '@/components/CoursesPageCard/icon/SmoothStar';
import Paragraph from '@/components/ui/Paragraph';
import SubheadingM from '@/components/ui/SubheadingM';
const ShoppingCart = () => {
    // Отримуємо id з параметрів маршруту
    const { id } = useParams();

    return (
        <Container>
            <div className="flex flex-col md:flex-row md:gap-2  md:items-center pt-10 ">
                <p className="text-grey-900 font-semibold text-32fz pr-9">Shopping Cart</p>

                <div className='flex items-center'>
                    <Link to="/categories" className="brand-name">
                        <p className='text-grey-700 text-sm font-normal leading-5'>Categories </p>
                    </Link>
                    <NavArrow />

                    <Link to={`/categories/${id}/details/description`} className="brand-name">

                        <p className='text-grey-700 text-sm font-normal leading-5'> Details </p>
                    </Link>
                    <NavArrow />

                    <p className='text-primary-500 text-sm font-normal leading-5'> Shopping Cart </p>


                </div>

            </div>

            <div className='flex flex-col-reverse tb:flex-row tb:justify-between gap-5  pb-8'>
                <div className='flex flex-col'>
                    <p className=' w-full border-b border-grey-border pb-1'>1 Course in cart</p>

                    <div className='flex flex-col pt-6 gap-4'>
                        <div className='flex flex-col md:flex-row gap-2 bg-white border border-grey-border px-5 py-4 rounded-lg'>

                            <img src={PromotionImg} alt="promotion" className="rounded-4r w-full md:w-192w  md:min-h-full object-cover" />
                            <div className='flex flex-col w-full'>

                                <div className='flex justify-between gap-2'>
                                    <SubheadingM title="Introduction to User Experience&nbsp;Design" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>

                                <SmallText title="By John Doe" />
                                <div className="flex md:pt-2  thhs:items-center gap-1 thhs:gap-3  flex-col thhs:flex-row">
                                    <div className="flex items-center  gap-1">
                                        <p className="text-base font-medium text-yellow ">4.6</p>
                                        <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                        <SmallText title="(651651 rating)" />
                                    </div>
                                    <div className="flex  gap-1.5 ">
                                        <SmallText title="|" styles="hidden thhs:block" />
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

                                <div className='flex justify-between gap-2'>
                                    <SubheadingM title="Introduction to User Experience&nbsp;Design" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>

                                <SmallText title="By John Doe" />
                                <div className="flex md:pt-2  thhs:items-center gap-1 thhs:gap-3  flex-col thhs:flex-row">
                                    <div className="flex items-center  gap-1">
                                        <p className="text-base font-medium text-yellow ">4.6</p>
                                        <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                        <SmallText title="(651651 rating)" />
                                    </div>
                                    <div className="flex  gap-1.5 ">
                                        <SmallText title="|" styles="hidden thhs:block" />
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

                                <div className='flex justify-between gap-2'>
                                    <SubheadingM title="Introduction to User Experience&nbsp;Design" />
                                    <SubheadingM title="$49.5" styles="text-2xl text-black" />
                                </div>

                                <SmallText title="By John Doe" />
                                <div className="flex md:pt-2  thhs:items-center gap-1 thhs:gap-3  flex-col thhs:flex-row">
                                    <div className="flex items-center  gap-1">
                                        <p className="text-base font-medium text-yellow ">4.6</p>
                                        <Rating iconComponent={<SmoothStar width="15.6" height="15" />} />

                                        <SmallText title="(651651 rating)" />
                                    </div>
                                    <div className="flex  gap-1.5 ">
                                        <SmallText title="|" styles="hidden thhs:block" />
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


                </div>
                <div className='flex flex-col pt-3'>
                    <p className='font-semibold text-xl text-grey-900 '>Order Details</p>
                    <div className='flex flex-col border border-grey-border p-4 relative w-full tb:w-330w  gap-4 rounded-lg bg-sl-main mb-4'>
                        <div className='flex justify-between  items-center'>
                            <Paragraph styles="text-base text-grey-900">
                                Price
                            </Paragraph>

                            <Subheading title="$300.00" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <Paragraph styles="text-base text-grey-900">
                                Discount
                            </Paragraph>
                            <Subheading title="-$10.00" />
                        </div>
                        <div className='flex justify-between border-b border-grey-border pb-4 items-center'>
                            <Paragraph styles="text-base text-grey-900">
                                Tax
                            </Paragraph>
                            <Subheading title="$20.00" />
                        </div>
                        <div className='flex justify-between items-center'>
                            <Subheading title="Total" />
                            <Subheading title="$290.00" />
                        </div>
                    </div>

                    <Link to={`/categories/${id}/details/shoppingcart/checkout`} className="p-2.5  rounded-lg font-medium  box-border text-sm border items-center border-text-dark   text-white  bg-text-dark hover:text-grey-900 hover:bg-sl-blue  transition-all duration-500   mt-4">
                        <p className='flex items-center justify-center'>Proceed to Checkout</p>

                    </Link>
                    {/*      <Link to="categories/:id/details/shoppingcart/checkout" >
                        <button className="p-2.5  rounded-lg font-medium  box-border text-sm border items-center border-text-dark   text-white  bg-text-dark hover:text-grey-900 hover:bg-sl-blue  transition-all duration-500   mt-4">Proceed to Checkout</button>

                    </Link> */}

                </div>
            </div>







        </Container>

    );
};

export default ShoppingCart;
