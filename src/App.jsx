import { Postcomponent } from "./post";

function App(){
  function addPost(){

  }

  return (
    <div style={{background:"black",height:"100vh"}}>
      <button onClick={addPost}>Add post</button>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          <Postcomponent
            name={"piyush"}
            subtitle={"111111 followers"}
            time={"2m ago"}
            image={"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg"}
            description={"what am i doing"}
          />
        </div>
      </div>
    </div>
  )
}

export default App
