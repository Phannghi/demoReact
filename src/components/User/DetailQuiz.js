import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getDataQuiz } from "../../services/apiService";
import _ from 'lodash';
const DetailQuiz = (props) => {
    const params = useParams();
    //console.log('check params: ', params);
    const quizId = params.id;
    useEffect(() => {
        fetchQuestion();
    }, [quizId]);
    const fetchQuestion = async () => {
        const res = await getDataQuiz(quizId)
        //console.log('check quesiton', res);
        if (res && res.EC === 0) {
            let raw = res.DT;
            let data = _.chain(raw)
                .groupBy("id")
                .map((value, key) => {
                    let answersArr = [];
                    let description, image = null;
                    console.log('key: ', key, ' value: ', value);
                    value.forEach((item, index) => {
                        if (index === 0) {
                            //chỉ cần lặp 1 lần để lấy des và image vì các lần sau des và 
                            // image cũng giống nhau 
                            description = item.description;
                            image = item.image;
                        }
                        answersArr.push(item.answers);
                    })
                    return { questionId: key, answersArr, description, image }
                })
                .value()
            console.log(data);
        }
    }
    return (
        <div className="detail-quiz-container">
            detail quiz
        </div>
    )
}
export default DetailQuiz;