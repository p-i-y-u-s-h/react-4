import { useState } from "react";
import { Postcomponent } from "./post";

function App(){
  const [ posts, setPosts] = useState([]);

  const postcomponent = posts.map(post => <Postcomponent
    name={post.name}
    subtitle={post.subtitle}
    time={post.time}
    image={post.image}
    description={post.description}
  />)

  function addPost(){
    setPosts([...posts,{
      name:"piyush",
       subtitle:"111111 followers",
       time:"2m ago",
       image:"https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg",
       description:"what am i doing"
    }])
  }

  return (
    <div style={{background:"#dfe6e9",height:"100vh"}}>
      <button onClick={addPost}>Add post</button>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          {postcomponent}
        </div>
      </div>
    </div>
  )
}

export default App