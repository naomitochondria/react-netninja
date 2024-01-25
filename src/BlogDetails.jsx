import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, isPending, errApi } = useFetch(`http://localhost:8000/blogs/${id}`)
    const navigate = useNavigate();
    const deleteBlog = () => {
        fetch(`http://localhost:8000/blogs/${id}`, {
          method: "DELETE",
          headers: {
            "Content-type": "application/json",
          },
        }).then(() => {
          navigate("/");
        });
    }

    return (
        <div className="blog-details">
            <h2> Blog - { id } </h2>
            { isPending && (<div> Loading... </div> ) }
            { errApi && (<div>{ error }</div>) }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick={ deleteBlog }>Delete</button>
                </article>
            )}
        </div>
    );
};

export default BlogDetails;