import Home from '../container/Home/front'


import ImageSlider from '../container/Home/slider';
import AlgorithmSection from '../container/Home/collection';
import Gallery from '../container/Home/gallery';
import Comment from '../container/Home/comment';
import AiDev from '../container/Home/Ai-devlop';
import Companies from "../container/Home/aproved-conpanies"
import StyledVideoPlayer from '../container/Home/vedio';
import Style2 from '../components/common/blockstyle2';
import PricingSection from '../container/Home/PricingSection';
import Blockstyle from '../components/common/blockstyle';
import NewsSlider from '../container/Home/NewsSlider';




function App() {
  

  return (
    <>
    
     <Home/>
     
    
      <ImageSlider/>
      <AlgorithmSection/>
      <Gallery/>
      <Comment/>
      <Style2/>
      <AiDev/>
      <Companies/>
      <StyledVideoPlayer/>
      <PricingSection/>
      <Blockstyle/>
      <NewsSlider/>
     
    
    </>
  )
}

export default App
