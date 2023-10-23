import React, { useContext } from "react"
import { Link, useNavigate, useParams } from "react-router-dom"
import { Store } from "../Component/StoreCompo"
import man from "../Mask Group 16.png"
import facebook from "../facebook.png"
import youtube from "../youtube.png"
import twitter from "../twitter.jpeg"
import instagram from "../instagram.jpeg"
import share from "../share.svg"
import clap from "../rythm.svg"
function DynamicCompo() {
  const id = useParams().id;
  const [contextData] = useContext(Store);
  const Navi = useNavigate();
  console.log(id)
  console.log(contextData)
  return (
    <div>
      {contextData.filter((data) => data.id === id).map((item, index) => {
        console.log(item)
        return (
          <div className="dynamic">
            <div className="clap">
              <img src={clap} alt="not found"/>
              <p>9.3k</p>
            </div>
            <div className="share">
              <img src={share} alt="not found" />
              <p>Share this Article</p>
            </div>
            <div className="SocialSet">
            <div className="singleMan">
              <img src={man} alt="not fount" />
              <div>
                <h4>Piyashi Saha</h4>
                <p>Oct 22 2023-10 min read</p>
              </div>
            </div>
            <div className="socialMedia">
            <img src={facebook} alt="not found" className="socialSize" />
            <img src={youtube} alt="not found" className="socialSize" />
            <img src={twitter} alt="not found" className="socialSize" />
            <img src={instagram} alt="not found" className="socialSize" />
            </div>
            </div>
            <h2>{item.title}</h2>
            <img src={item.img} alt="not found" className="dynamicImage" />
            <h2 className="dynamicContant">{item.cont}</h2>

            <button onClick={() => Navi(-1)} className="DynamicBtn">Back</button>
          </div>
        )
      })}
      <h3>The More Siren</h3>
      <div className="dynamicBack">
      <div className="latest">

{contextData.filter((data) => data.cat === "Home").map((item, index) => {
    // console.log(item)
    if (item.id >= 4 && item.id <= 6)

        return (
            <div className="latest">

                <div key={index} className="homeSet">
                    <Link to={`/details/${item.id}`}>

                        <img src={item.img} alt="not found" className="homeImage" />
                    </Link>
                    <div className="homeContent">
                        <h2>{item.title}</h2>
                        <p>{item.cont.slice(0, 70)}</p>
                        <p>{item.cat}</p>
                    </div>
                    <div className="singleMan">
              <img src={man} alt="not fount" />
              <div>
                <h4>Piyashi Saha</h4>
                <p>Oct 22 2023-10 min read</p>
              </div>
            </div>
                </div>

            </div>
        )
})}

</div>
      </div>
    </div>
  )
}
export default DynamicCompo