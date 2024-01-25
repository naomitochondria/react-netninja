import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('mario');
  const [ isPending, setPending ] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setPending(true);
    const blog = { title, body, author };

    fetch("http://localhost:8000/blogs", {
        method: "POST",
        headers: {
            "Content-type": "application/json",
        },
        body: JSON.stringify(blog)
    }).then(() => {
        setPending(false);
        console.log("Blog added!");
        navigate("/");
    });
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <form onSubmit={ handleSubmit }>
        <label>Blog title:</label>
        <input 
          type="text" 
          required 
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Blog body:</label>
        <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <label>Blog author:</label>
        <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}>
          <option value="mario">mario</option>
          <option value="yoshi">yoshi</option>
        </select>
        { !isPending && <button>Add Blog</button> }
        { isPending && <button disabled>Adding blog...</button> }
      </form>
    </div>
  );
}
 
export default Create;