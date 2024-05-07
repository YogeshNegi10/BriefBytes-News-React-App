import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Read from "./pages/Read";

const App = () => {
  const [catogery,setCatogery] = useState('general')
  const [lang,setLang] = useState('en')
  const [loading,setLoading] = useState(false)
  const [news,setNews] = useState([])


 
  



     const fetchnews = async () =>{
   
    setLoading(true)
    let url = ` https://newsapi.org/v2/everything?q=${catogery.toLowerCase()}&language=${lang}&latest&apiKey=b87a6c0823fb40b78e1691c3d4820f90` 
  
  
      try {
        const response = await fetch(url)
        const data = await response.json()
        setNews(data.articles)
        setLoading(false)
    

      } catch (error) {
        
           console.log(error)
           setLoading(true)
      }
                
      }   
      

  useEffect(()=>{

   
  fetchnews()
 
  },[catogery,lang])


  

 



  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/read" element={<Read loading={loading} setCatogery={setCatogery} news={news} setLang={setLang} setNews={setNews} setLoading={setLoading} lang={lang}   />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
