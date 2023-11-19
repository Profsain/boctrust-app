import blogdata from "../../mockdatabase/blogs.json";
import Headline from "../shared/Headline";
import "./Blogs.css";

const BlogSidebar = () => {
  const blogs = blogdata.blogs;

  // create object with category as key and array of blogs as value
  const blogCategories = blogs.reduce((acc, blog) => {
    if (acc[blog.category]) {
      acc[blog.category].push(blog);
    } else {
      acc[blog.category] = [blog];
    }
    return acc;
  }, {});

  return (
    <div className="BlogSidebar">
      <Headline text="Popular Category" align="left" />
      <div>
        {blogCategories &&
          Object.keys(blogCategories).map((category) => (
            <div key={category}>
              <Headline
                fontSize="16px"
                text={category.toUpperCase()}
                align="left"
              />
              <ul>
                {blogCategories[category].map((blog) => {
                  if (blog.isFeatured === true)
                    return (
                      <li key={blog.id}>
                        <a href={`/blog/${blog.title.replaceAll(" ", "-")}`}>
                          {blog.title}
                        </a>
                      </li>
                    );
                })}
              </ul>
            </div>
          ))}
      </div>
    </div>
  );
};

export default BlogSidebar;
