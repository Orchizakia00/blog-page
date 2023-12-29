import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
    const [blogs, setBlogs] = useState();

    useEffect(() => {
        fetch('/data.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
            .catch(error => console.error('Error fetching blogs:', error));
    }, []);

    console.log(blogs);

    return (
        <div className="lg:w-[1250px] mx-auto w-[90%]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {blogs && blogs.map(blog => <Blog key={blog.id} blog={blog} />)}
            </div>
        </div>
    );
};

export default Blogs;
