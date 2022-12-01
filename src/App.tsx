import React from 'react';
import './App.css';
import { useState, useEffect } from 'react';

function App() {
  //For Category
  //Interface
  interface Category {
    CategoryId: number;
    CategoryName: string;
  }
  let categories: Category[] = [{CategoryId: 0, CategoryName: "All"},{CategoryId: 1, CategoryName: "ASP.NET Core"}];
  categories.push({CategoryId: 2, CategoryName: "HTML"}); 
  categories.push({CategoryId: 3, CategoryName: "JavaScript"}); 

  const [options, setOptions] = useState<Category[]>([]);
  //The following line is for selected (Totally four places)
  //const [options, setOptions] = useState<Category[]>([{CategoryId: 0, CategoryName: "All"}]);

  function FillDropDownList(){
    // Update the options state
    setOptions(
        categories
    )
  }

  //For articles
  interface Article {
    ArticleId: number;
    Title: string;
    CategoryId: number;
  }
  let articleSourceData: Article[] = [{ArticleId: 1, Title: "ASP.NET Core Introduction", CategoryId: 1}];
  articleSourceData.push({ArticleId: 2, Title: "ASP.NET Core EF", CategoryId: 1});
  articleSourceData.push({ArticleId: 3, Title: "ASP.NET Core Identity", CategoryId: 1}); 
  articleSourceData.push({ArticleId: 4, Title: "HTML5 Boilerplate", CategoryId: 2}); 
  articleSourceData.push({ArticleId: 5, Title: "A Beginner's Guide to HTML5", CategoryId: 2}); 
  articleSourceData.push({ArticleId: 6, Title: "Understanding Scope and Scope Chain in JavaScript", CategoryId: 3}); 
  articleSourceData.push({ArticleId: 7, Title: "JavaScript Namespace", CategoryId: 3}); 
 
  const [articles, setArticles] = useState<Article[]>([]);
  function FillArticles(){
    setArticles(
      articleSourceData
    )
  }

  //const [selected, setSelected] = useState(options[0].CategoryId);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>)=> {
    //CategoryId
    //alert(e.target.value);
    //CategoryName
    //alert(e.target.selectedOptions[0].label);
    //setSelected(Number(e.target.value));

    if(Number(e.target.value) != 0)
    {
      let articlesFiltered = articleSourceData.filter(function(article){
        return article.CategoryId == Number(e.target.value);
      })
      setArticles(
        articlesFiltered
      )
      //console.log(articlesFiltered)
    }
    //All
    else{
      setArticles(
        articleSourceData
      )
    }
  };

  /*This happens in the first reload*/
  useEffect(()=>{
    FillDropDownList();
    FillArticles();
  },[]);

  return (
    <div className="App">
      <div>
        <label>Select a Category:</label>
        {/* <select value={selected} onChange={handleChange}> */}
        <select onChange={handleChange}>
        {
            options.map(option => (
                <option key={option.CategoryId} value={option.CategoryId}>{option.CategoryName}</option>
            ))
        }
        </select>
      </div>
      <div>
        {articles.map(
          (article) =>
            <h4 key={article.ArticleId}>
                {article.Title}
            </h4>
          )
        }
      </div>
    </div>
  );
}

export default App;
