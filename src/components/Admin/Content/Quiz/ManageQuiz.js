import Select from 'react-select';
import './ManageQuiz.scss';
import { useEffect, useState } from 'react';
import { FcPlus } from 'react-icons/fc';
import { postCreateNewQuiz } from '../../../../services/apiService';
import { toast } from 'react-toastify';
import TableQuiz from './TableQuiz';
import Accordion from 'react-bootstrap/Accordion';
import { getAllQuizAdmin } from "../../../../services/apiService";
import QuizQA from './QuizQA';
import AssignQuiz
    from './AssignQuiz';
const ManageQuiz = () => {
    const options = [
        { value: 'EASY', label: 'EASY' },
        { value: 'MEDIUM', label: 'MEDIUM' },
        { value: 'HARD', label: 'HARD' }
    ]
    const [listQuiz, setListQuiz] = useState([]);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [type, setType] = useState('');
    const [image, setImage] = useState('');
    const [previewImage, setPreviewImage] = useState("");

    useEffect(() => {
        fetchAllQuiz();
    }, [])

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

    const fetchAllQuiz = async () => {
        let res = await getAllQuizAdmin();
        if (res && res.EC === 0) {
            setListQuiz(res.DT);
        }
    }

    const handleSubmitQuiz = async () => {
        let res = await postCreateNewQuiz(description, name, type?.value, image)
        if (res && res.EC === 0) {
            toast.success(res.EM)
            await fetchAllQuiz();
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
            <h2 className="title mb-3">Manage Quiz</h2>
            <hr />
            <Accordion>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h5 className='mb-0'>Add new quiz</h5></Accordion.Header>
                    <Accordion.Body>
                        <div className="add-new mt-3">
                            <fieldset className="border rounded-2 p-3">
                                <legend className="float-none w-auto px-3">Form add:</legend>
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
                                        placeholder={"Quiz type..."} />
                                </div>
                                <div className="mb-3 d-flex align-items-center justify-content-between gap-4">
                                    <label className='form-label-img' htmlFor='labelUploadManage'>
                                        <FcPlus /> Upload file Image
                                    </label>
                                    <input type="file" id='labelUploadManage' hidden onChange={(event) => handleUpLoadImage(event)} />
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
                        <div className="list-detail mt-3">
                            <h3 className='title mb-3 mt-2'>List quizzes</h3>
                            <TableQuiz
                                listQuiz={listQuiz}
                                fetchAllQuiz={fetchAllQuiz}
                            />
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h5 className='mb-0'>Updated Question/Answer</h5></Accordion.Header>
                    <Accordion.Body>
                        <QuizQA />
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header><h5 className='mb-0'>Assign Quiz to Users</h5></Accordion.Header>
                    <Accordion.Body>
                        <AssignQuiz />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    )
}
export default ManageQuiz;