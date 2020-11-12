import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import LectureList from './LectureList';
import LectureContent from './LectureContent';
import axios from 'axios';
function LecturesPage(props) {
  //categories-> current state, setCategories->function to update state
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState();
  const [selectedLecture, setSelectedLecture] = useState();
  const [lectures, setLectures] = useState([]);
  const [error, setError] = useState();
  const [categoryTitle, setCategoryTitle] = useState("Choose Category");
  const [searchText, setSearchText] = useState("");
  const [message, setMessage] = useState("");

  
  useEffect(() => {
    axios.get('http://192.168.10.195/api/category/list',{
      headers: { 
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      }})
  .then(function (response) {
    // handle success
    
    setCategories(response.data);
    //console.log("Category data is", response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    setError(error);
  })
  .then(function () {
    // always executed
  });
   /*  const fetchCategories = async () => {
      //getting all documents from the collection
      const categoriesData = await db.collection("categories").get();
      //map through data to get the data (name, description, tags)
      setCategories(categoriesData.docs.map((doc) => doc.data()));
    };
    fetchCategories().catch((error) => {
      setError(error);
    });*/
  }, []); 
  //an empty array means the callback will execute only once

  const selectCategory = (category) => {
    //console.log("selected category", category)
    //category is now the selectedCategory
  setSelectedCategory(category);
  setCategoryTitle(category.name);
  //set Lectures to empty so it doesn't display the lecture list from previously chosen category
  setLectures([]);
 

  };
  const selectLecture = (lecture) => {
    setSelectedLecture(lecture);
    //console.log("selected lecture", lecture)
  };
  const handleInput = (evt) => {
    //console.log("in handle input and new value will be: " + evt.target.value);
    setSearchText(evt.target.value);
    
  }
  const clearSearchBar = () => {
      console.log("Remove selection");
      setCategoryTitle("Choose category");
      setSelectedCategory();
    
  }
  const handleClick = () => {
    if(!selectedCategory && !searchText){
      //need to use local var to set the message since this is async 
      let msg="You need to choose a category and/or input search text!";
      setMessage(msg)
      console.log(msg);
      return;
     }
  
        setMessage("");
        console.log("text input is:", searchText);
        let selectedCategoryId=selectedCategory===undefined? undefined : selectedCategory.id;
        //again! category is selectedCategory
        axios.get('http://192.168.10.195/api/lecture/list',{params: {categoryId:selectedCategoryId, tags:searchText} ,
          headers: {
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
          }})
        .then(function (response) {
          // handle success
          setLectures(response.data);
          //console.log("Lectures", response.data);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          setError(error);
        })
  }

  return (
    <div className="container">

           {/*SEARCH BAR*/}
          <div className="container row" style={{marginTop:50}}> 
            <SearchBar onClick={handleClick} 
            error={error}
            categoryTitle={categoryTitle}
            categories={categories}
            selectCategory={selectCategory}
            searchText={searchText}
            onChange={handleInput}
            message={message}
            clearSearchBar={clearSearchBar}
          
            />
         </div>

      {/*LECTURE LIST*/}

      <LectureList 
      lectures={lectures}
      selectLecture={selectLecture}
      selectedLecture={selectedLecture}
      searchText={searchText}
     
      />
        
      {/*LECTURE CONTENT*/}
        <LectureContent selectedLecture={selectedLecture}
       
        />  
      </div>
  );
}
export default LecturesPage;
