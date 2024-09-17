import Paragraph from "@components/ui/Paragraph";
import SmallText from "@components/ui/SmallText";
import Subheading from "@components/ui/Subheading";
import MentorAvatar from "./img/MentorAvatar.webp"
const MentorInfo = () => {
    return (
        <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-6 pt-10">
            <div className="flex flex-col sm:basis-[70%] " >
                <SmallText title="Instructor" />
                <p className="text-grey-900 font-semibold text-32fz pt-1">Ronald Richards</p>
                <SmallText title="Web developer, UX/UI Designer, and Teacher" />
                <div className="flex gap-x-[120px]  flex-wrap pt-4 max-w-279 justify-evenly">
                    <div className="flex flex-col">
                        <SmallText title="Total Students" />
                        <p className="text-2xl text-grey-900 font-semibold">1000</p>
                    </div>

                    <div className="flex flex-col ">
                        <SmallText title="Reviews" />
                        <p className="text-2xl text-grey-900 font-semibold  ">154</p>
                    </div>
                </div>

                <Subheading title="About Ronald Richard" styles="pt-10 " />
                <Paragraph>Ronald Richard is a highly skilled UX/UI Designer with over a decade of experience in crafting user-centric digital solutions. With a background in graphic design and a keen eye for detail, Ronald specializes in creating intuitive interfaces that delight users and drive business results.</Paragraph>
                <Subheading title="Areas of Expertise" styles="pt-4 " />
                <ul className="list-disc pl-5 pt-1">
                    <li> <Paragraph>User Experience (UX) Design</Paragraph></li>
                    <li> <Paragraph>User Interface (UI) Design    </Paragraph></li>
                    <li> <Paragraph>Information Architecture   </Paragraph></li>
                    <li> <Paragraph>Interaction Design        </Paragraph></li>
                    <li> <Paragraph>Visual Design         </Paragraph></li>
                    <li> <Paragraph>Usability Testing </Paragraph></li>
                    <li> <Paragraph>Wireframing and Prototyping </Paragraph></li>
                    <li> <Paragraph>Design Thinking</Paragraph></li>
                </ul>
                <Subheading title="Professional Experience" styles="pt-10 " />
                <Paragraph>Ronald Richard has an extensive professional background in UX/UI design, having worked with renowned companies such as [Company Name] and [Company Name]. His portfolio includes a diverse range of projects spanning web applications, mobile apps, and e-commerce platforms.</Paragraph>

            </div>
            <div className="sm:w-[200px] flex flex-col gap-7 items-center">
                <img src={MentorAvatar} alt="MentorAvatar" className="rounded-full w-48" />
                <div className="flex justify-evenly flex-wrap sm:flex-col gap-3.5 sm:pt-[27px] w-full">
                    <a href="https://github.com/CodeFlamesk" target="_blank" className="flex justify-center w-[200px]  h-[48px] border border-text-dark rounded-lg box-border hover:bg-sl-blue  hover:text-white duration-500 transition-all text-sm font-medium items-center">Website</a>
                    <a href="https://x.com/?lang-en=" target="_blank" className="flex justify-center items-center w-[200px]  h-[48px] border border-text-dark rounded-lg box-border hover:bg-text-dark   hover:text-white duration-500 transition-all text-sm font-medium">Twitter</a>
                    <a href="https://www.youtube.com/watch?v=3AkZazth0a0" target="_blank" className="flex justify-center items-center w-[200px]  h-[48px] border border-text-dark rounded-lg  hover:bg-red-youtube  hover:text-white duration-500 transition-all text-sm font-medium text-center">Youtube</a>
                </div>

            </div>
        </div>
    );
};
export default MentorInfo;