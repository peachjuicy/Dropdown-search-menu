import React from "react";

function LectureList(props) {
//Display Lecture list
return (
    
 <div className="container" style={{ marginTop: 50 }}>
     <div className="row">
     <div className="col-3">
          <h4 className="text-left">Lectures</h4>
    </div>
    <div className="col-4">
        
        {props.lectures.map((lecture)=> 
        {
            let lectureClassName = "list-group-item list-group-item-action";
            lectureClassName += props.selectedLecture && lecture.id===props.selectedLecture.id ? " active": ""; 
            //lectureClassName = lectureClassName + "nesto";
            return <ul id="myList" className="list-group" role="tablist" key={lecture.name}>
                    <li className={lectureClassName} role="tab" style={{marginTop:25}}
                         onClick={() => props.selectLecture(lecture)}>{lecture.name}
                    </li> 
                </ul>
        })}
         
        </div>
        
     </div>
    
 </div>
 
)
//Display filtered Lecture list
}

export default LectureList; 
