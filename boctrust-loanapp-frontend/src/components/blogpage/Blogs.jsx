
import { Row } from "react-bootstrap";
import BlogCard from "./BlogCard";
import blogdata from "../../mockdatabase/blogs.json";
import Headline from "../shared/Headline";
import BlogSidebar from "./BlogSidebar";
import "./Blogs.css";

const Blogs = () => {
  const blogs = blogdata.blogs;
  // open blog in new tab on click
  const openBlog = (title) => {
    window.open(`/blog/${title.replaceAll(" ", "-")}`, "_blank");
  };
  return (
    <>
      <div className="container-fluid">
        <Headline spacer="118px 0 0 30px" text="Blog" align="left" />
        <div className="row">
          <div className="col-md-9 col-sm-12">
            <div className="container my-5 ">
              <Row xs={1} md={2} className="gap-4 px-4">
                {blogs.map((blog) => (
                  <BlogCard
                    func={() => openBlog(blog.title)}
                    key={blog.id}
                    title={blog.title}
                    //  shorten description
                    content={blog.content.substring(0, 300) + "..."}
                    img={blog.image}
                  />
                ))}
              </Row>
            </div>
          </div>
          <div className="col-md-3 col-sm-12 ">
            <BlogSidebar />
          </div>

        </div>
      </div>
    </>
  );
};

export default Blogs;
