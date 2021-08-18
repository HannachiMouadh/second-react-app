import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
    <h1 style={{display: 'flex', justifyContent:'center', alignItems:'center'}} className="title red">Hannachi Mouadh</h1>
    
    <br/>
    <img style={{ maxWidth:"100%",maxHeight:"100%"}} src='/assets/imageInSrc.jpg' alt="elefant"></img>
    </div>
       <br/>
    <img src="/assets/imageInPublic.jpg" alt="elefant"></img>
   
   <video width="320" height="240" controls>
    <source src="myVideo.mp4" type="video/mp4" ></source>
   </video>
   </div>
  );
}

export default App;
