
import starSolid from '../assets/resources/icons/btm/star-solid.svg';
import graph from '../assets/resources/icons/course/graph.svg';
import calendarWeekSolid from '../assets/resources/icons/course/calendar-week-solid.svg';
import clockRegular from '../assets/resources/icons/course/clock-regular.svg';
import lockSolid from '../assets/resources/icons/course/lock-solid.svg';
import expandMoreBlack24dp from '../assets/resources/icons/course/expand_more_black_24dp.svg';
import React, { useEffect, useState } from 'react';
import { get } from '../helper/util';


class Courses extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            course:[],
            rating:0
        }
    }

    componentDidMount(){
        let response = get('course/get_course').then(res=>{
            this.setState({course:res.data})
            console.log(res.data);
        });
        
        console.log('ff')
    }
    
    // let [course,setCourse] = useState({})
    // let rating = useState([]);

    

    // useEffect(()=>{
    //     (async () => {
    //         let response = await get('course/get_course');
    //         setCourse(response.data)
    //         console.log(response.data);
    //       })()
    //     console.log('hee');
    // },[])
    

    render(){
        return(<div className="course-details">
            <div className="course-details-col1" >
                <div className="course-detail-card" style={{backgroundImage:this.state.course.imgUrl}}>
                    <h2 className="course-headline">{this.state.course.strCourseName}</h2>
                    <div className="ratingholder">
                        <p className="course-author">By {this.state.course.strMentorName}</p>
                    </div>
                    <p className="course-descri">Lorem ipsum dolor sit, amet consectetur adipisicing elit.Nihil porro, eaque ducimus ea numquam distinctio quis sunt explicabo quae illum? Molestias dicta minima odit sint sed porro voluptatum eveniet! Accusantium.</p>
                    <button className="start-course">Start Course</button>
                </div>
                <div>
                    <p className="course-descri-head">Description</p>
                    <p className="course-descri course-descri-btm">Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempore cupiditate aut at sint? Necessitatibus, architecto fugiat numquam ipsum nesciunt voluptatum natus labore incidunt, recusandae, distinctio id perspiciatis in impedit nemo!</p>
                </div>
            </div>
            <div className="course-details-col2">
                <div className="course-learn-status">
                    <div className="course-learn-status-section-head">
                        <p className="course-learn-status-text">{this.state.course.strCourseName}</p>
                        <img src={expandMoreBlack24dp} alt="" className="course-learn-status-dropdown" />
                    </div>
                    {
                        this.state.course?.arrLevels?.map(item=>{
                            return(
                                <div className="course-learn-status-section-sub" key={item.id}>
                                    <img src={lockSolid} alt="" className="course-learn-status-section-lock" />
                                    <p className="course-learn-status-subtext">{item.strName}</p>
                                    <p className="course-learn-status-time"></p>
                                </div>
                            )
                        })
                    }
                    
                </div>
                <div className="courseinfo">
                <p className="courseinfo-head course-descri-head">Course Info</p>
                <div className="courseinfo-row">
                    <p className="courseinfo-text">Rating</p>
                    <div className="ratingholder">
                        
                    </div>
                </div>

                <div className="courseinfo-row">
                    <p className="courseinfo-text">Level</p>
                    <div className="courseinfo-row-holder">
                        <p className="courseinfo-text courseinfo-value">{this.state.course?.jsnDetails?.Level}</p>
                        <img src={graph} alt="" className="rating-star" />
                    </div>
                </div>

                <div className="courseinfo-row">
                    <p className="courseinfo-text">Updated</p>
                    <div className="courseinfo-row-holder">
                        <p className="courseinfo-text courseinfo-value">{this.state.course?.jsnDetails?.Updated}</p>
                        <img src={calendarWeekSolid} alt="" className="rating-star" />
                    </div>
                </div>

                <div className="courseinfo-row">
                    <p className="courseinfo-text">Duration</p>
                    <div className="courseinfo-row-holder">
                        <p className="courseinfo-text courseinfo-value">{this.state.course?.jsnDetails?.Duration}</p>
                        <img src={clockRegular} alt="" className="rating-star" />
                    </div>
                </div>
            </div>
            </div>
        </div>
        )
    }
}

export default Courses;