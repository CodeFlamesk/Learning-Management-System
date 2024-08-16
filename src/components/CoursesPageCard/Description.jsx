import Subheading from "@/components/ui/Subheading";
import Paragraph from "@/components/ui/Paragraph";

const Description = () => {
    return (
        <div className="flex pt-6 pb-6">
            <div className=" lg:basis-[65%] border-t pb-6  border-grey-border">
                <Subheading styles="pt-6" title="Course Description" />
                <Paragraph styles="pt-1">This interactive e-learning course will introduce you to User Experience (UX) design, the art of creating products and services that are intuitive, enjoyable, and user-friendly. Gain a solid foundation in UX principles and learn to apply them in real-world scenarios through engaging modules and interactive exercises. </Paragraph>
                <Subheading styles="pt-6" title="Certification" />
                <Paragraph styles="pt-1">At Byway, we understand the significance of formal recognition for your hard work and dedication to continuous learning. Upon successful completion of our courses, you will earn a prestigious certification that not only validates your expertise but also opens doors to new opportunities in your chosen field. </Paragraph>

            </div>

        </div>

    )
}
export default Description;