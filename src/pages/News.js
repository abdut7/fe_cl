import { useState, useEffect } from "react";
import {post} from '../helper/util';

function News(){
    
    let [newsList,setNewsList] = useState([]);

    useEffect(() => {
      post('news/get_news').then(res=>{
         setNewsList(res.data.arrList);
    })
    },[])
    return(
        <div className="news">
            <div className="news-sec">
              {
                newsList.map((obj,index)=>{
                  return(
                    <div className="newscard" key={index}>
                      <div className="newscard-top">
                        <p className="newscard-top-usertext">{obj.jsnDetails.strHead}</p>
                        <p className="newscard-top-time">{obj.createdTime}</p>
                      </div>
                      <div style={{display:'flex'}}>
                        <p className="newscard-content">{obj.jsnDetails.strDiscription}</p>
                        <img style={{float: 'right',margin: '12px'}} src={obj.jsnDetails.strUrl} alt="" className="newscard-content-img"/>
                      </div>
                      </div>
                  )
                })
              }
              
             
            </div>
            <div className="news-side"></div>
          </div>
    );
}

export default News;