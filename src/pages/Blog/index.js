import { AiOutlineFileAdd } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./Blog.scss";

export function Blog() {
  return (
    <div className="blog-container">
      <div className="header-blog">
        <h1>Welcome to my Blog</h1>
        <em>Little sentence where you talk about what you write about</em>
      </div>

      <section className="body-section">
        <div className="body-header">
          <input placeholder="search" /> <Link to="*"> New Post </Link>
        </div>
        <hr />
        <article className="body-article">
          <div className="post-dates">
            <ul>
              <li> 20/05/2021</li>
              <li> 05/02/2020</li>
              <li> 09/12/2019</li>
            </ul>
            <hr />
          </div>

          <div className="post-list">
            <div className="blog-post">
              <h3>The End Times</h3>
              <p>
                Covid, war, famine, inflation - some may say the four horsemen
                of the apocalypse have already been unleashed! How can a
                believer stand in these last days? What makes current events
                different to other times in history? How can we (...)
             
              </p>
              <a href="*">Read Post</a>
              <hr />
            </div>
            <div className="blog-post">
              <h3>The End Times</h3>
              <p>
                Covid, war, famine, inflation - some may say the four horsemen
                of the apocalypse have already been unleashed! How can a
                believer stand in these last days? What makes current events
                different to other times in history? How can we (...)

              </p>
              <a href="*">Read Post</a>
              <hr />
            </div>
            <div className="blog-post">
              <h3>The End Times</h3>
              <p>
                Covid, war, famine, inflation - some may say the four horsemen
                of the apocalypse have already been unleashed! How can a
                believer stand in these last days? What makes current events
                different to other times in history? How can we (...)

              </p>
              <a href="*">Read Post</a>
              <hr />
            </div>
            <div className="blog-post">
              <h3>The End Times</h3>
              <p>
                Covid, war, famine, inflation - some may say the four horsemen
                of the apocalypse have already been unleashed! How can a
                believer stand in these last days? What makes current events
                different to other times in history? How can we (...)

              </p>
              <a href="*">Read Post</a>
              <hr />
            </div>
            
          </div>
        </article>
      </section>
    </div>
  );
}
