import { useParams } from "react-router-dom";
import blogData from "../../mockdatabase/blogs.json";
import BlogSidebar from "./BlogSidebar";
import Headline from "../shared/Headline";
import "./Blogs.css";

const Blog = () => {
  const { title } = useParams();
  const formatedTitle = title.replace(/-/g, " ");

  const blog = blogData.blogs.find(
    (blog) => blog.title.toLowerCase() === formatedTitle.toLowerCase()
  );

  return (
    <>
      <div className="container-fluid SingleBlog">
        <div>
          <div className="row">
            <div className="col-md-9 col-sm-12">
              <div className="container my-5 ">
                <Headline spacer="0" text={formatedTitle} align="center" />
                <div className="BlogDetails">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="img-fluid"
                  />
                  <div className="TagsContainer">
                    <p className="text-muted">Posted on: {blog.date}</p>
                    <div>
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="badge bg-secondary me-2">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="BlogContent">
                    {/* split blog content into paragraphs */}
                    {blog.content.split("\n").map((paragraph, index) => (
                      <p key={index}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-sm-12">
              <BlogSidebar />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
