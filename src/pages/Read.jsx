import React from "react";
import ReadNavbar from "../components/ReadNavbar";

import Footer from "../components/Footer";
import News from "../components/News";

const Read = ({loading,setCatogery,news,setLang,setNews, setLoading,lang,}) => {
 
  return (
    <>
      <ReadNavbar setCatogery={setCatogery} setLang={setLang} setNews={setNews} setLoading={setLoading} lang={lang} />
      <News loading={loading} news={news} />
      <Footer />
    </>
  );
};

export default Read;
