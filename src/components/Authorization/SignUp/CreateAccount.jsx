import React, { useState } from "react";
import HeadindS from "@components/ui/HeadingS";
import SignImg from "@components/Authorization/img/SignImg.webp";
import ArrowButton from "@components/ui/buttons/icon/ArrowButton";
import Facebook from "@components/Authorization/img/facebook.webp";
import Microsoft from "@components/Authorization/img/microsoft.webp";
import Google from "@components/Authorization/img/google.webp";
import SmallText from "@components/ui/SmallText";
import { useNavigate } from "react-router-dom";

const CreateAcc = () => {
    const [fullName, setFullName] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match");
            return;
        }
        setErrorMessage("");
        navigate("/login"); // Логіка відправки форми
    };

    return (
        <div className="flex flex-col relative">
            <div className="flex flex-col h-full lg:flex-row lg:gap-16">
                <div className="flex lg:basis-[43%] absolute lg:relative z-20 w-full h-full">
                    <img className='object-cover w-full h-full lg:h-959 opacity-40 lg:opacity-100' src={SignImg} alt="instructors-img" />
                </div>
                <div className="flex mx-auto flex-col relative z-30 w-full ft:w-420 lg:w-690 px-5">
                    <HeadindS title={"Create Your Account"} styles={'mx-auto pt-11 md:pt-94 '} />

                    <form className="flex flex-col" onSubmit={handleSubmit}>
                        <label>
                            <h5 className="heading-5pt">Full Name</h5>
                        </label>
                        <div className="flex flex-col ft:flex-row gap-2 ft:gap-4 " >
                            <input
                                type="text"
                                placeholder="First Name"
                                className="inputs input-shadow "
                                value={fullName}
                                onChange={(e) => setFullName(e.target.value)}
                                required
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="inputs input-shadow "
                                required
                            />
                        </div>

                        <label htmlFor="username">
                            <h5 className="heading-5pt">Username</h5>
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Username"
                            className="inputs input-shadow "
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />

                        <label htmlFor="emailSign">
                            <h5 className="heading-5pt">Email</h5>
                        </label>
                        <input
                            id="emailSign"
                            type="email"
                            placeholder="Email ID"
                            className="inputs input-shadow "
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                        <div className="flex flex-col ft:flex-row ft:gap-4">
                            <div className="w-full">
                                <label htmlFor="password">
                                    <h5 className="heading-5pt" >Password</h5>
                                </label>
                                <input
                                    id="password"
                                    type="password"
                                    placeholder="Enter Password"
                                    className="inputs input-shadow "
                                    minLength="6"
                                    maxLength="13"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                            </div>
                            <div className="w-full">
                                <label htmlFor="confirmPassword">
                                    <h5 className="heading-5pt">Confirm Password</h5>
                                </label>
                                <input
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    className={` ${errorMessage ? 'border-red-youtube inputs input-shadow -password' : 'inputs input-shadow '}`}
                                    minLength="6"
                                    maxLength="13"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                            </div>
                        </div>

                        {errorMessage && (
                            <div className="text-red-500 text-sm pt-2">{errorMessage}</div>
                        )}

                        <button type='submit' className="button-account">
                            <div>Create Account</div>
                            <div><ArrowButton /></div>
                        </button>

                    </form>

                    <div className="flex gap-3 pt-9">
                        <span className="basis-[38%] ft:basis-[44%] inline-flex relative">
                            <div className="w-full h-[2px] mt-2.5 bg-primary-500  lg:bg-grey-disableColor"></div>
                        </span>
                        <div className="basis-[95px] small-text text-center text-primary-500 lg:text-grey-disableColor">Sign in with</div>
                        <span className="basis-[38%] ft:basis-[44%] inline-flex">
                            <div className="w-full h-[2px] mt-2.5 bg-primary-500 lg:bg-grey-disableColor"></div>
                        </span>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 pt-6 pb-11 md:pb-40 justify-center">
                        <a className="flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-primary-500 w-full" href="">
                            <img src={Facebook} alt="Facebook" className="w-6 h-6" />
                            <SmallText title={"Facebook"} styles={" text-primary-500 "} />
                        </a>
                        <a className="flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-orange w-full" href="">
                            <img src={Google} alt="Google" className="w-6 h-6" />
                            <SmallText title={"Google"} styles={" text-orange "} />
                        </a>
                        <a className="flex justify-center items-center bg-white p-3 gap-2 rounded-lg border border-solid border-grey-border duration-300 transition-all hover:border-black w-full" href="">
                            <img src={Microsoft} alt="Microsoft" className="w-6 h-6" />
                            <SmallText title={"Microsoft"} styles={" text-black "} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CreateAcc;
