import { useState, useEffect } from 'react'
import { useParams } from 'react-router';
import swal from 'sweetalert';
import { post } from '../helper/util';

function Quiz(){

    let [question, setQuestion] = useState([])
    let urlParams = useParams();
    let load = async ()=>{
        let response = await post('course/get_questens',{fkLevelId:urlParams.level_id,fkCourseId:urlParams.course_id});
        console.log(response.data.arrList);
        setQuestion(response.data.arrList)
    }

    var  submitQuiz = async ()=>{
        let answers = document.querySelectorAll('.radio-answer:checked');
        let questionLeft =  question.length - answers.length;
        let answerList = [];
        if(questionLeft>0){
            swal("Answer all questions",questionLeft+" Question(s) Remains");
            return ;
        }

        for(let i of answers)
            answerList.push({id:i.dataset.id,strAnswer:i.value});
    
        await post('course/create_answer',{'fkLevelId':urlParams.level_id,'fkCourseId':urlParams.course_id,'arrAnswer':answerList}).then(res=>{
            console.log(res);
            let data = res.data.arrResult;
            for(let ans of data){
                let i = document.querySelector('#correct-answer-'+ans.id)
                console.log(i.textContent = "Correct Answer : "+ans.strAnswer);
            }
            swal(res.data.strMessage);
        });
    }

    useEffect(() => {
        load()
    },[])

    return(
        <div id="quiz">
             <div>
                {
                    question.map((item,index)=>{
                        return(
                            <div className="question" key={index}>
                                <h2>{item.jsnQuesten.strQuesten}</h2>
                                <div>
                                    <input id={'choices-'+index+'1'} type="radio" className="radio-answer" name={'radio-'+index} data-id={item.id} value="A"/><label  htmlFor={'choices-'+index+'1'} className="option">{item.jsnQuesten?.A}</label>
                                    <input id={'choices-'+index+'2'} type="radio" className="radio-answer" name={'radio-'+index} data-id={item.id} value="B"/><label  htmlFor={'choices-'+index+'2'} className="option">{item.jsnQuesten?.B}</label>
                                    <input id={'choices-'+index+'3'} type="radio" className="radio-answer" name={'radio-'+index} data-id={item.id} value="C"/><label  htmlFor={'choices-'+index+'3'} className="option">{item.jsnQuesten?.C}</label>
                                    <input id={'choices-'+index+'4'} type="radio" className="radio-answer" name={'radio-'+index} data-id={item.id} value="D"/><label  htmlFor={'choices-'+index+'4'} className="option">{item.jsnQuesten?.D}</label>
                                    <br/>
                                    <label id={'correct-answer-'+item.id} className="correct-answer"></label>
                                </div>
                            </div>
                        )
                    })
                }
                
            </div>
            <div style={{textAlign:'right'}}>
                <button id="submit-button" onClick={submitQuiz}>Submit Answers</button>
            </div>
        </div>
    )
}

export default Quiz;