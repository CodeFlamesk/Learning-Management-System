/* import React, { useState } from 'react';

const Test = () => {
    const [image, setImage] = useState(null);
    const [previewUrl, setPreviewUrl] = useState(null);
    const [fileName, setFileName] = useState(''); // Додаємо стан для збереження назви файлу

    const handleImageUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            setImage(file);
            setFileName(file.name); // Зберігаємо назву файлу
            const url = URL.createObjectURL(file);
            setPreviewUrl(url);
        }
    };

    const handleImageSave = () => {
        if (image) {
            // Логіка збереження зображення на сервер
            console.log('Image saved:', image);
        }
    };

    return (
        <div className="flex flex-col items-start">
            <div className="w-72 h-48 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center mb-4">
                {previewUrl ? (
                    <img src={previewUrl} alt="Preview" className="w-full h-full object-cover rounded-lg" />
                ) : (
                    <div className="text-gray-500">Image Preview</div>
                )}
            </div>

            <div className="flex items-center gap-4">
                <div className="flex-grow">
                    <label htmlFor="image-upload" className="block text-sm font-medium text-gray-700">
                        Add/Change Image
                    </label>
                    <input
                        type="text"
                        value={fileName}
                        placeholder="Label"
                        readOnly
                        className="mt-1 block w-full pl-3 pr-12 sm:text-sm border-gray-300 rounded-md"
                    />
                </div>

                <div>
                    <label htmlFor="image-upload" className="border border-gray-300 px-4 py-2 rounded-md cursor-pointer">
                        Upload Image
                    </label>
                    <input
                        type="file"
                        id="image-upload"
                        onChange={handleImageUpload}
                        className="hidden"
                    />
                </div>

                <button
                    onClick={handleImageSave}
                    className="bg-blue-600 text-white px-4 py-2 rounded-md"
                >
                    Save Image
                </button>
            </div>
        </div>
    );
};

export default Test;
 */