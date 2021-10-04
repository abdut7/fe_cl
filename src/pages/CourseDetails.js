
import play from '../assets/resources/icons/course/play-active.svg';
import question from '../assets/resources/icons/course/download.svg';
import unlock from  '../assets/resources/icons/course/unlock.svg';

import {  useEffect, useState, useRef } from 'react';
import { get } from '../helper/util';
import { useHistory } from 'react-router';


function CourseDetails(){

    let [course,setCourse] = useState({})
    let [levels, setLevels] = useState([])
    let [currentVideo, setCurrentVideo] = useState([])
    let history = useHistory()

    let videoControl  = useRef()
    
    let load = async ()=>{
        let response = await get('course/get_course');
        setCourse(response.data)
        setLevels(response.data.arrLevels)
        setCurrentVideo("http://65.0.249.156:3001/video?videoPath=" + response.data.arrLevels[0]?.arrVedios[0]?.strUrl)
    }

    let playVideo = (type,course,level,video)=>{
        if(type === 'Q'){
            history.push('/quiz/'+course+'/'+level);
            return ;
        }
        setCurrentVideo("http://65.0.249.156:3001/video?videoPath=" +  video);
    }
    
    useEffect(()=>{
        load();
    },[])
    return(
        <div className="course-details">
            <div className="course-details-col1" >
               
                <div>
                    <div>
                        <video ref={videoControl} width="650"  controls autoPlay  style={{width:'100%'}}>
                            <source src={currentVideo} type="video/mp4" />
                    </video>
                    </div>
                    <div style={{display:'none'}}>
                        <div className="box box-primary direct-chat direct-chat-primary">
                            <div className="box-body">
                                <div className="direct-chat-messages">
                                    <div className="direct-chat-msg">
                                        <div className="direct-chat-info clearfix">
                                            <div className="direct-chat-text">Discussion</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="box-footer">
                            <div className="input-group">
                                <input type="text" placeholder="Type Message ..." className="form-control"/>
                                    <span className="input-group-btn">
                                        <button type="submit" className="btn btn-primary btn-flat" style={{backgroundColor:'rgb(137, 156, 202)'}}>Send</button>
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="course-details-col2 ">
                <div className="player-nav-top player-nav">
                    <p className="player-heading">{course.strCourseName}</p>
                    <p className="player-author">{course.strMentorName}</p>
                    <div className="player-options">
                        <p className="player-options-item player-options-item-active"> Table Of Contents </p>
                    </div>
                </div>
                <div className="level-container">
                    {
                        levels.map((item,index)=> {
                            return(
                                <div key={index}>
                                    <div className="player-steps-head">
                                        <div className="player-steps-icn">
                                            <img src={unlock} alt="" className="player-steps-icn-lock"/>
                                        </div>
                                        <div className="player-steps-text">
                                            <p className="player-steps-head-texthead">{item.strName}</p>
                                            <p className="player-steps-head-texttime">0h 5m 48s</p>
                                        </div>
                                    </div>
                                    {item.arrVedios.map((video,innerIndex)=>{
                                        if(video.type === 'C')
                                            return false;
                                        return(
                                            <div className="player-steps-subcategory" onClick={playVideo.bind(this,video.type,video.fkCourseId,video.fkLevelId,video.strUrl)} key={"inner-div-"+index+"-"+innerIndex}>
                                                <div className="player-steps-icn player-steps-icn-play">
                                                    <img src={video.type === 'V'?play:question} alt=""  className="player-steps-icn-play" data-lid={video.fkLevelId} data-cid={video.fkCourseId} data-videourl={video.strUrl} />
                                                </div>
                                                <div className="player-steps-text-sub" data-lid={video.fkLevelId} data-cid={video.fkCourseId} data-videourl={video.strUrl}>
                                                    <p className="player-steps-head-texthead player-steps-head-texthead-sub"  data-lid={video.fkLevelId} data-cid={video.fkCourseId} data-videourl={video.strUrl}>{video.strVedioName} </p>
                                                    {/* <p className="player-steps-head-texttime player-steps-head-texttime-white"> 0h 6m 38s </p> */}
                                                </div>
                                                {/* <a href="/quiz/1/21" className="" style={{marginLeft: '4px'}}></a> */}
                                            </div>
                                        )
                                    })}
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default CourseDetails;