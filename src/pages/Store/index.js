import "./Store.scss";
import deanBook from "../../assets/deanBook.jpeg";

import { Link } from "react-router-dom";

export function Store() {
  return (
    <div className="container-store">
      <section className="left">

      <a href="https://amzn.to/3zhppfp">
        <img src={deanBook} alt="" />
        </a>
      </section>
      <section className="right">
        <article className="article-store">

            <p>
            For quite some time a secret dream of mine is to be an author 
            and write a book. This dream recently became a reality as 
            I have now published my first book on Amazon! You can read 
            the book for free on Kindle or purchase at a nice reasonable 
            price on Amazon. If you want to know what the book is about 
            click the image by this post. 
            <br />
            I thank God for finally finishing and publishing it! 
            More books are lined up so I will keep you posted. 
            If you do read it, please give feedback as I
             truly appreciate it!
            </p>
        </article>
      </section>

    </div>
  );
}
