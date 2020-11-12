import React from "react";

function SearchBar(props) {
 
  return (
    <div className="container">
     
       <div className="row" style={{ marginTop: 50 }}>
        <div className="col-3">
          <h4 className="text-left">Categories</h4>
        </div>
        {props.error ? <p>Error</p> : null}
        <div className="col-4">
          <div className="dropdown ">
            <button
              className="btn btn-secondary dropdown-toggle"
              type="button"
              id="dropdownMenuButton"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              {props.categoryTitle}
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <button
                  className="dropdown-item"
                  style={{backgroundColor:"#dc3545"}}
                  href="#"
                  onClick={() => props.clearSearchBar()}
                >
                  Clear categories
                </button>
              {/*map through categories to display data from db*/}
              {props.categories.map((category) => (
                <button
                  onClick={() => props.selectCategory(category)}
                  className="dropdown-item"
                  href="#"
                  key={category.id}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
        </div>

        <div className="row" style={{ marginTop: 50 }}>
        <div className="col-3">
        <h6 className="text-left">Search content by tags</h6>
      </div>
    <div className="col-3">
    <form>
      <div className="form-group">
        
        <input
          type="text"
          className="form-control"
          placeholder="Enter text"
          onChange={props.onChange}
          value={props.searchText}
        ></input>
      </div>
    </form>
    </div>
    <div className="col-3">
         <div >
            <button type="button" className="btn btn-danger" onClick={props.onClick}>Search</button>
          </div> 
          
      </div>
        </div>
   
  
  <div className="row col-6">
  <div>{props.message? (<div>{props.message}</div>): (null) }</div>
  
  </div>
  </div>
    
  );
}
export default SearchBar;
