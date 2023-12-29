/* eslint-disable react/prop-types */

const Blog = ({ blog }) => {
    return (
        <div className="card card-compact w-96 bg-base-100 mb-8">
            <figure><img src={blog.image} className="w-[350px] h-[300px] rounded-xl" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className=" font-bold text-xl">{blog.title}</h2>
                <p>{blog.description}</p>
                <div className="card-actions justify-start mt-4">
                    <div className="flex items-center gap-5">
                        <div className="avatar">
                            <div className="w-12 rounded-full">
                               <img src={blog.author_image} />
                            </div>
                        </div>
                        <div>
                            <p className="font-bold">{blog.author_name}</p>
                            <p>{blog.author_designation}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;