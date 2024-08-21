import Paragraph from "@components/ui/Paragraph";
import Subheading from "@components/ui/Subheading";

const TotalPrice = ({ children, cardWidth, title, padingTop }) => {
    return (


        <div className={`flex flex-col ${padingTop}`}>
            <p className='font-semibold text-xl text-grey-900 '>{title}</p>
            <div className={`flex flex-col border border-grey-border p-4 relative  gap-4 rounded-lg bg-sl-main  ${cardWidth}`}>
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
                    <Paragraph
                        styles="text-base text-grey-900">
                        Tax
                    </Paragraph>
                    <Subheading title="$20.00" />
                </div>
                <div className='flex justify-between items-center'>
                    <Subheading title="Total" />
                    <Subheading title="$290.00" />
                </div>
            </div>
            {children}

        </div>

    );
};
export default TotalPrice;