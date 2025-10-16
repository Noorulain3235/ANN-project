import React from "react";
import Services from "../../container/services/index";
import NewsSlider from "../../container/Home/NewsSlider";
import Inbox from "../../container/About/inbox"
import Textslider from "../../container/services/textslider"
import Comment from "../../container/Home/comment"
import AIArtGenerator from "../../container/services/Aiimagegenerator";




export default function App() {
  return (
   <>
    <Services/>
    <NewsSlider/>
    <Inbox/>
    <Textslider/>
    <Comment/>
    <AIArtGenerator/>
   </>
  );
}