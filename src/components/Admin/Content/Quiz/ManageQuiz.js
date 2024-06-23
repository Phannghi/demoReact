import Select from 'react-select';
import './ManageQuiz.scss';
import { useState } from 'react';
import { FcPlus } from 'react-icons/fc';
import { postCreateNewQuiz } from '../../../../services/apiService';
import { toast } from 'react-toastify';
const ManageQuiz = () => {
    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' }
    ]
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");

    const handleUpLoadImage = (event) => {
        if (event.target && event.target.files && event.target.files[0]) {
            setPreviewImage(URL.createObjectURL(event.target.files[0]));
            setImage(event.target.files[0]);
        }
    }

    const handleDeleteImage = () => {
        setImage('');
        setPreviewImage('');
    }

    const handleSubmitQuiz = async () => {
        let res = await postCreateNewQuiz(description, name, type?.value, image)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            setName('');
            setDescription('');
            setType('');
            setImage('');
            setPreviewImage('');
        }
        else
            toast.error(res.EM)
    }
    return (
        <div className="quiz-container">
            <h2 className="title">Manage Quiz</h2>
            <div className="add-new mt-3">
                <fieldset className="border rounded-2 p-3">
                    <legend className="float-none w-auto px-3">Add new quiz:</legend>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"
                            id="name" placeholder="Your quiz name"
                            value={name}
                            onChange={(event) => setName(event.target.value)} />
                        <label htmlFor="name">Name</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control"
                            id="desc" placeholder="Description"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)} />
                        <label htmlFor="desc">Description</label>
                    </div>
                    <div className="mb-3">
                        <Select
                            options={options}
                            defaultValue={type}
                            onChange={setType}
                            value={type}
                            id='quizType' placeholder={"Quiz type..."} />
                    </div>
                    <div className="mb-3 d-flex align-items-center justify-content-between gap-4">
                        <label className='form-label-img' htmlFor='labelUpload'>
                            <FcPlus /> Upload file Image
                        </label>
                        <input type="file" id='labelUpload' hidden onChange={(event) => handleUpLoadImage(event)} />
                        <button className='btn btn-outline-danger' onClick={() => handleDeleteImage()}>
                            Delete
                        </button>
                    </div>
                    <div className="img-preview mb-3">
                        {previewImage ? <img src={previewImage} alt="" />
                            : <span>Preview image</span>
                        }
                    </div>
                    <div className="d-flex justify-content-end">
                        <button className='btn btn-primary px-3'
                            onClick={() => handleSubmitQuiz()}>Save</button>
                    </div>
                </fieldset>
            </div>
            <div className="list-detail"></div>
        </div>
    )
}
export default ManageQuiz;