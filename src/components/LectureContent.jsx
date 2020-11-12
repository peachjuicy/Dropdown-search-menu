import React from "react";

function LectureContent(props) {
//Display Lecture list
return (
  
 <div className="container" style={{ marginTop:30}}>
         
    
     <div className="row">
    <div className="col-9">
          {props.selectedLecture ? (
            <div className="card" style={{ marginTop: 70, width: 1000 }}>
              <div className="card-body">
                <h4 className="card-title">Lecture description</h4>
                <p className="card-text">{props.selectedLecture.description}</p>
                <h5 className="card-title">Lecture content</h5>
                <p className="card-text">{props.selectedLecture.contentValue}</p>
                <p className="card-text">{props.selectedLecture.id}</p>
              </div>
            </div>
          ) : null}
        </div>
     </div>
    
 </div>
)
//Display filtered Lecture list

}

export default LectureContent; 
