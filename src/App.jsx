
function App() {

  return (
    <div style={{background: "#c8dceb", height:"100vh"}}>
      <div style={{display:"flex",justifyContent:"center"}}>
        <div>
          <div>
            <br />
            <Postcomponent/>
          </div>
          <div>
            <br />
            <Postcomponent/>
          </div>
          <div>
            <br />
            <Postcomponent/>
          </div>
        </div>
      </div>
    </div>
  )
}

const style = {width : 200 , backgroundColor:"white",borderRadius:10,borderColor:"gray",borderWidth:1,padding:20}

function Postcomponent(){
  return <div style={style}>
   <div style={{display:"flex"}}>
    <img src="https://appx-wsb-gcp.akamai.net.in/subject/2023-01-17-0.17044360120951185.jpg" style={{
      width:20,
      height:20,
      borderRadius:20
    }} />
    <div style={{fontSize:10,marginLeft:10}}>
      <b>
        100xdevs
      </b>
      <div>865498</div>
      <div>12m</div>
    </div>
  </div>
  <div>
    what is your goal
  </div>
</div>
}

export default App
