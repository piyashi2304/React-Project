
import { useContext } from "react"
import { Store } from "./StoreCompo"
import { Link } from "react-router-dom"

function Food(){
    const [data] = useContext(Store)
    console.log(data)
    return(
        <div className="bollyWoodContainer">
    
        <div>
        
        <h1 className="line">Food</h1>
        
        
        {data.filter((data) => data.cat==="Food").map((item,index) =>{
            // console.log(item)
            
        
            return(
                <>
                
                <div key={index} className="bollySet">
                <Link to = {`/details/${item.id}`}>
                
                <img src={item.img} alt="not found" className="BollyImage"  />
                </Link>
                <div className="content" >
                <h2>{item.title}</h2>
                <p>{item.cont.slice(0,70)}</p>
                <p>{item.cat}</p>
                
                </div>
                
                </div>
                <hr />
                </>
                
                
                
                
            )
         })} 
        </div>
        <div>
        
        <h1 className="line">Top Post</h1>
                {data.filter((data) => data.cat === "Food" && data.id%2==0).map((item, index) => {
                    if (item.id == 50) {
                        return (

                            <div key={index}>

                                <Link to={`/details/${item.id}`}>

                                    <img src={item.img} alt="not found" className="topPostBig" />
                                </Link>
                                <div>
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    {/* <h2 className="number">{++count}</h2> */}
                                </div>
                            </div>
                        )
                    } else if (item.id >=51 && item.id <= 59) {
                        return (
                            <div key={index} className="topPostContent">
                                <Link to={`/details/${item.id}`}>
                                    <img src={item.img} alt="not found" className="topPostImg"/>
                                </Link>
                                <div className="topPostContent2">
                                    <div className="content2">
                                    <h2>{item.title}</h2>
                                    <p>{item.cat}</p>
                                    </div>
                                    {/* <h2>{++count}</h2> */}
                                </div>
                            </div>
                        )
                    }
                })}
         <h1>Advertisement</h1>
         <img src="https://img.freepik.com/free-vector/flat-design-food-facebook-ad_23-2149167379.jpg" width={"470"} height={"625"} />
        </div>
        </div>
    )

}
export default Food