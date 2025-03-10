import { useState } from "react"

function App() {

  return (
    <div style={{background: "#c8dceb", height:"100vh"}}>
      <ToggleMessage/>
    </div>
  )
}


const ToggleMessage = () => {

  let [isVisible,setIsInterval]=useState(true);

  function toggle(){
    setIsInterval(!isVisible);
  }

  return (
    <div>
      <button onClick={toggle}>
        toggle Message
      </button>
      {isVisible && <p>this Message is conditionally rendered!</p>}
    </div>
  );
};



export default App

// const style = {width : 300, backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20}

// function Postcomponent({ Name, followerCount, time, image, description,subtitle }){
//   return <div style={style}>
//    <div style={{display:"flex"}}>
//     <img src={image}style={{
//       width:20,
//       height:20,
//       borderRadius:20
//     }} />
//     <div style={{fontSize:10,marginLeft:10}}>
//       <b>
//         {Name}
//       </b>
//       <div>{subtitle}</div>
//       <div>{followerCount} follwers</div>
//       {time !== undefined &&
//         <div style={{display:"flex"}}>
//         <div>{time} </div>
//         <img src={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"} style={{width:10,height:10}}/>
//       </div>}
//     </div>
//   </div>
//   <div>
//     {description}
//   </div>
// </div>
// }

{/* <div style={{display:"flex",justifyContent:"center"}}>
        <div>
        <div>
            <br />
            <Postcomponent
              Name="Piyush"
              followerCount={20}
              time="2m ago"
              image="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              description="What am I doing at 3 AM?"
            />
          </div>
          <div>
            <br />
            <Postcomponent
              Name="John Doe"
              followerCount={50}
              time="10m ago"
              image="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              description="Coding late at night!"
            />
          </div>
          
          <div>
            <br />
            <Postcomponent
              Name="Jane Smith"
              subtitle={"promoted"}
              image="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"
              description="Working on a new project!"
            />
          </div>
        </div>
      </div> */}