import React from "react";
import styles from "./styleCheckBoxRound.module.css";
import SubheadingM from "./SubheadingM";
import VisaImg from "../CheckOut/img/VisaImg.svg";
import SmallText from "./SmallText";
import PayPalImg from "../CheckOut/img/PayPalImg.svg"
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const CheckBoxRound = ({ id, style }) => {
    const handleSubmit = (e) => {
        navigate(`/categories/details/shoppingcart/checkout/complate`);
    };
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(false);

    const handlePaymentMethod = (method) => {
        setSelectedPaymentMethod(method);
    };
    const navigate = useNavigate();


    return (
        <div className="p-4 bg-white border border-grey-border rounded-2xl  flex-col ">

            <form id="checkoutForm" onSubmit={handleSubmit} >

                <div className="flex flex-col tb:flex-row tb:justify-between gap-17w pb-17w  px-4">
                    <div className="flex-col w-full">
                        <label htmlFor="country" >
                            <SubheadingM title="Country" styles="flex inline-flex cursor-pointer" />
                        </label>
                        <input id="country" type="text" name="country"
                            placeholder="Enter Country"
                            className="inputs-checkout input-shadow " required />
                    </div>
                    <div className="flex-col w-full">
                        <label htmlFor="state">
                            <SubheadingM title="State/Union&nbsp;Territory" styles="flex inline-flex cursor-pointer" />
                        </label>
                        <input id="state" type="text"
                            placeholder="Enter State"
                            className="inputs-checkout input-shadow " name="state" required />
                    </div>
                </div>




                <SubheadingM title="Payment Method" />
                <div className={`${style}`} >

                    <label className={styles["checkbox-wrapper"]} htmlFor={id}>
                        <div className="flex w-full flex-col-reverse items-center  xs:flex-row xs:justify-between xs:items-center ">
                            <div className="flex mr-auto ">
                                <input
                                    className={styles["checkbox-element"]} type="checkbox" checked={selectedPaymentMethod === 'visa'} onChange={() => handlePaymentMethod('visa')}
                                    id={id} required={selectedPaymentMethod !== 'visa' && selectedPaymentMethod !== 'paypal'}
                                />
                                <SubheadingM title="Credit/Debit Card" styles="pl-3 " />
                            </div>
                            <img src={VisaImg} alt="VisaImg" />

                        </div>
                    </label>

                    {

                        selectedPaymentMethod === 'visa' &&
                        < div className="flex flex-col pt-4 gap-4">
                            <div>
                                <label htmlFor="nameCard">
                                    <SmallText title="State/Union Territory" styles="flex inline-flex cursor-pointer" />
                                </label>
                                <input id="nameCard" type="text" placeholder="Name of card" name="nameCard" className="inputs-checkout input-shadow " required />
                            </div>
                            <div>
                                <label htmlFor="cardNumber">
                                    <SmallText title="Card Number" styles="flex inline-flex cursor-pointer" />
                                </label>
                                <input id="cardNumber" type="text" placeholder="Card Number" name="cardNumber" className="inputs-checkout input-shadow " required />
                            </div>
                            <div className="flex flex-col tb:flex-row tb:justify-between gap-17w ">
                                <div className="flex-col w-full">
                                    <label htmlFor="expiryDate">
                                        <SmallText title="Expiry Date" styles="flex inline-flex cursor-pointer" />
                                    </label>
                                    <input id="expiryDate" placeholder="Expiry Date" type="text" name="expiry-date" className="inputs-checkout input-shadow " required />
                                </div>
                                <div className=" flex-col w-full ">
                                    <label htmlFor="cvc" >
                                        <SmallText title="CVC/CVV" styles="flex inline-flex cursor-pointer" />
                                    </label>
                                    <input id="cvc" type="text" minLength='3'
                                        name="CVC/CVV" placeholder="CVC/CVV" className="inputs-checkout input-shadow " required />
                                </div>
                            </div>
                        </div>
                    }



                </div >
            </form >
            <div className={` ${style} mt-4`}>
                <label className={styles["checkbox-wrapper"]} htmlFor={id}>
                    <div className="flex  w-full">
                        <input
                            className={styles["checkbox-element-paypal"]} type="checkbox" checked={selectedPaymentMethod === 'paypal'} onChange={() => handlePaymentMethod('paypal')} id={id} required={selectedPaymentMethod !== 'visa' && selectedPaymentMethod !== 'paypal'}
                        />

                        <div className="flex w-full justify-between items-center pl-3">
                            <SubheadingM title="PayPal" />
                            <img src={PayPalImg} alt="PayPal" />
                        </div>
                    </div>
                </label>
            </div>
        </div>

    );
};

export default CheckBoxRound;
