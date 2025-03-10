
const style = { 
    width: 200, 
    backgroundColor: "white", 
    borderRadius: 10, 
    border: "1px solid gray", 
    padding: 20 
  };
  
export function Postcomponent({name,subtitle,time,image,description}){
    return <div style={style}>
        <div style={{display:"flex"}}>
            <img src={image} style={{
                width:30,
                height:30,
                borderRadius:20
            }}/>
            <div style={{fontSize:10, marginLeft:10}}>
                <b>
                    {name}
                </b>
                <div>
                    {subtitle}
                </div>
                {(time !== undefined) ? <div>
                    <div>
                        {time}
                    </div>
                    <img src={"https://www.vecteezy.com/vector-art/4397047-clock-icon-clock-time-symbol-flat-style-design-web-site-icon-logo-app-ui-illustration-vector-eps10"} style={{width:12,height:12}}/>
                </div>:null}
            </div>
        </div>
        <div style={{fontSize:12}}>
            {description}
        </div>
    </div>
}