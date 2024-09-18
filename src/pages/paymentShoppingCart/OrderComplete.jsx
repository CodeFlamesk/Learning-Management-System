import Container from "@components/ui/Container";
import ComplateImg from "@/components/CheckOut/img/CompleteImg.png"
const OrderComplate = () => {
    return (

        <Container styles="flex justify-center items-center flex-col mt-[80px] h-full">
            <div className=" flex bg-green-600 rounded-full w-36 h-36 sm:w-200w sm:h-200w items-center justify-center pb-5 ">
                <p className="w-16 h-20  bg-green-600 box-border  border-white border-r-[18px]  border-b-[17px] rotate-45 "></p>

            </div>



            <p className="font-bold text-3xl sm:text-40 text-center  text-grey-900 pt-4">Order Complete</p>
            <p className="font-semibold  text-center text-xl sm:text-2xl text-grey-900 pt-2 pb-14">You Will Receive a confirmation email soon! </p>
        </Container>

    );
};
export default OrderComplate;