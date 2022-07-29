import "./About.scss";

import testPicture from "../../assets/IMG_9537.JPG";

import deanBook from "../../assets/deanBook.jpeg";
import { Link } from "react-router-dom";
import { useState } from "react";

export function About() {
  const [hideP, setHideP] = useState(true);

  return (
    <div className="container-about">
      <section className="author-section">
        <article className="info-about">
        <br />
          <h3>Welcome to</h3>
          <h2  onClick={() => setHideP(!hideP)}>Gospel Road 66</h2>
           <p  className={"hidden-p " + (hideP && " hide")} onClick={() => setHideP(!hideP)}>
            My name is Dean, I am a married man in my 30s. I came to the Lord
            Jesus out of a world of drugs and wild living. In 2016 I took a leap
            of faith to move from my home country England to Portugal to serve
            the Lord.
         <br/>
         <hr />
            I... also love writing, I also write music and dance, I speak
            Portuguese and I have a passion for Jesus who rescued me. My mission
            in life is to love God and love people.
          </p>

         
       
                    <em>
            You can find my most recent book <Link to="*">here</Link>, free on Kindle or purchased
            via <b>this link</b>!
          </em>
        </article>
        <article className="sell-section">
       {/*    <Link to="*">
            <img src={deanBook} alt="" />{" "}
          </Link> */}
        </article>
      </section>
      {/*    <section className="sell-section">
  
     <Link to="*"><img src={deanBook} alt="" /> </Link> 
      <h3>Click on the Image!</h3>
      </section> */}
    </div>
  );
}
