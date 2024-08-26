import FotoIcon from "./icon/FotoIcon";
import SubheadingM from "@components/ui/SubheadingM";
import styles from "./styleImgUploader.module.css";
import { useState } from "react";

const ImageUploader = ({ uploading }) => {
    const [fileName, setFileName] = useState('Label');
    const [imagePreviewUrl, setImagePreviewUrl] = useState(null);
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            const previewUrl = URL.createObjectURL(file);
            setImagePreviewUrl(previewUrl);
        } else {
            setFileName('Choose a file');
            setImagePreviewUrl(null);
        }
    }
    return (
        <>
            <div className="p-4 border rounded-2xl max-w-[425px] min-h-[250px] max-h-[350px] w-full border-grey-border mt-1.5">
                <div className="flex flex-col border border-grey-border h-full  object-cover  py-4  px-4 rounded-2xl items-center justify-center  bg-grey-border">
                    {imagePreviewUrl ? (<img src={imagePreviewUrl} alt="Preview" className=" rounded-2xl  w-full h-full object-cover " />) : (< FotoIcon />)}

                </div>
            </div>
            <label htmlFor="file-upload" className="mt-10 inline-flex max-w-max">
                <SubheadingM title={uploading} styles="xs:text-lg text-grey-900 cursor-pointer inline-flex" />
            </label>

            <div className="flex sm:flex-row flex-col  gap-4 sm:items-center">
                <input type="text" className="inputs-checkout  max-w-600w" value={fileName} placeholder="Label" readOnly />
                <label htmlFor="file-upload" className={styles["custom-file-button"]} >Upload&nbsp;Image</label>
                <input id="file-upload" type="file" className={styles["input-uploaud"]} onChange={handleFileChange} accept="image/*" />
            </div>
            <button htmlFor="file-upload" className="bg-grey-900 text-white font-medium text-sm px-4 py-3 sm:w-[126px] mt-4 rounded-lg hover:bg-white hover:text-grey-900 box-border border  hover:border-grey-900 duration-300 transition-all ">Save Image</button>

        </>
    );
};

export default ImageUploader;
