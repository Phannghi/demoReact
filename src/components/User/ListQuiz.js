import { useEffect, useState } from "react";
import { getQuizByUser } from "../../services/apiService";
import './ListQuiz.scss'
import { useNavigate } from "react-router-dom";
const ListQuiz = (props) => {
    const navigate = useNavigate();
    const [arrQuiz, setArrQuiz] = useState([]);
    useEffect(() => {
        getQuizData();
    }, [])

    const getQuizData = async () => {
        const res = await getQuizByUser();
        //console.log('quiz data res: ', res);

        if (res && res.EC === 0) {
            setArrQuiz(res.DT);
        }
    }
    return (
        <div className="container">
            <div className="list-quiz-container row g-4">
                {arrQuiz && arrQuiz.length > 0 &&
                    arrQuiz.map((quiz, index) => {
                        return (
                            <div key={`${index}-quiz`} className="col-md-6 col-lg-4">
                                <div className="card h-100">
                                    <img src={`data:image/jpeg;base64, ${quiz.image}`} className="card-img-top" alt="..." />
                                    <div className="card-body">
                                        <h5 className="card-title">Quiz {index + 1}</h5>
                                        <p className="card-text">{quiz.description}</p>
                                        <button className="btn btn-primary"
                                            onClick={() => navigate(`/quiz/${quiz.id}`)}>Start now</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
                {
                    arrQuiz && arrQuiz.length === 0 &&
                    <div>You don't have any quiz now...</div>
                }
            </div>
        </div>
    )
}
export default ListQuiz;