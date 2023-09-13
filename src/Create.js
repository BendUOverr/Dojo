import { useState } from "react"
import { useHistory } from 'react-router-dom'

export const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Yoshi');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();
  
  const handleSubmit = (e) => {
  e.preventDefault();
  const blog = {title, body, author};
  setIsPending(true);
  
  fetch('http://localhost:8000/blogs', {
    method: 'POST',
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(blog)
  })
  .then(() => {
    console.log("Blog added to data")
    setIsPending(false)
    history.push('/')
  })
  };
  
  
    return (
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text"
                required
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
                <label>Blog Body:</label>
                <textarea
                required
                value={body}
                onChange={e => setBody(e.target.value)}>
                </textarea>
                <label>Blog Author:</label>
                <select
                value={author}
                onChange={e => setAuthor(e.target.value)}
                >
                    <option valuue="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Adding Blog...</button>}

            </form>
        </div>
    )
}