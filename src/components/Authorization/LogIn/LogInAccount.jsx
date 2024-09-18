
import HeadindS from "@components/ui/HeadingS";
import LogInImg from "@components/Authorization/img/LogIn.webp";
import React, { useState } from "react";
import ArrowButton from "@components/ui/buttons/icon/ArrowButton";
import Facebook from "@components/Authorization/img/facebook.webp";
import Microsoft from "@components/Authorization/img/microsoft.webp";
import Google from "@components/Authorization/img/google.webp";
import SmallText from "@components/ui/SmallText";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from "react-router-dom";

const LogInAcc = () => {
    const [emailValue, setEmailValue] = useState();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleAuth = () => {
        dispatch({ type: 'LOG_IN' });
        dispatch({ type: 'SET_EMAIL', payload: emailValue });
        navigate("/")
    };


    return (
        <div className="flex flex-col relative  h-full lg:flex-row lg:gap-16">
            <div className="flex mx-auto  flex-col relative z-30 w-full ft:w-420 lg:w-690   px-5 ">
                <HeadindS title={"Log in to your account"} styles={'mx-auto pt-16 md:pt-[23%]'} />
                <form className="flex flex-col " onSubmit={(e) => { e.preventDefault(); handleAuth(); }} >
                    <label htmlFor="emailLog">
                        <h5 className="heading-5pt">Email</h5>
                    </label>
                    <input id="emailLog" type="email"
                        placeholder="Email ID"
                        className="inputs input-shadow"
                        value={emailValue}
                        onChange={(e) => setEmailValue(e.target.value)}
                        required />

                    <div>
                        <label htmlFor="password">
                            <h5 className="heading-5pt">Password</h5>
                        </label>
                        <input id="password" type="password"
                            placeholder="Enter Password"
                            minLength="6"
                            maxLength="13"
                            className="inputs input-shadow " required />
                    </div>






                    <button type='submit' className="button-account md:w-139" >
                        <div>Continue</div>

                        <div> <ArrowButton /> </div>
                    </button >
                </form>


                <div class="flex gap-3 pt-9">
                    <span class="basis-[38%] ft:basis-[43%] inline-flex relative">
                        <div class="w-full h-[2px] mt-2.5 bg-primary-500  lg:bg-grey-disableColor">
                        </div>
                    </span>
                    <div class="basis-[95px] small-text text-center text-primary-500 lg:text-grey-disableColor">Sign in with</div>
                    <span class="basis-[38%] ft:basis-[44%] inline-flex">
                        <div class="w-full h-[2px] mt-2.5 bg-primary-500  lg:bg-grey-disableColor">
                        </div>
                    </span>
                </div>
                <div class="flex flex-col sm:flex-row gap-4 pt-6 pb-16 md:pb-279 justify-center">
                    <a href="https://example.com" target="_blank" class="flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border  duration-300 transition-all hover:border-primary-500 w-full" >
                        <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                        <SmallText title={"Facebook"} styles={" text-primary-500 "} />
                    </a>
                    <a href="https://example.com" target="_blank" class="flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-orange w-full" >
                        <img src={Google} alt="Google" className="w-6 h-6" />
                        <SmallText title={"Google"} styles={" text-orange "} />
                    </a>
                    <a href="https://example.com" target="_blank" class="flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-black w-full" >
                        <img src={Microsoft} alt="Microsoft" className="w-6 h-6" />
                        <SmallText title={"Microsoft"} styles={" text-black "} />
                    </a>
                </div>

            </div>
            <div className="flex lg:basis-[43%] absolute lg:relative  z-20 w-full h-full ">
                <img className='object-cover w-full h-full lg:h-959  opacity-40 lg:opacity-100' src={LogInImg} alt="instructors-img" />
            </div>
        </div >

    );
}
export default LogInAcc;