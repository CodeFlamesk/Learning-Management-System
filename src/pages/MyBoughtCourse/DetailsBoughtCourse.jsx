import Subheading from "@/components/ui/Subheading";
import Paragraph from "@/components/ui/Paragraph";

const DetailsBoughtCourse = () => {
    return (
        <div className="flex pt-6 pb-6">
            <div className=" border-t pb-6  border-grey-border">
                <Subheading styles="pt-6" title="Course Description" />
                <Paragraph styles="pt-1">Embark on a transformative journey into the dynamic world of User Experience (UX) Design with our comprehensive course, "Introduction to User Experience Design." This course is meticulously crafted to provide you with a foundational understanding of the principles, methodologies, and tools that drive exceptional user experiences in the digital landscape. </Paragraph>
                <Subheading styles="pt-6" title="Key Learning Objectives" />

                <ul className="list-disc pl-6 flex flex-col ">
                    <li>
                        <Paragraph > Gain a clear understanding of what User Experience (UX) Design entails and its importance in today's digital world.
                        </Paragraph>       </li>
                    <li>
                        <Paragraph > Explore the fundamental principles of user-centered design and how to apply them to create intuitive and user-friendly interfaces.
                        </Paragraph>      </li>
                    <li>
                        <Paragraph > Learn about the various elements that contribute to a positive user experience, including information architecture, interaction design, and visual design.       </Paragraph>    </li>
                </ul>
            </div>

        </div>

    )
}
export default DetailsBoughtCourse;