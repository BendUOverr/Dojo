import { useParams, useHistory } from 'react-router-dom'
import { useFetch } from './useFetch';

export const BlogDetails  = () => {
    const { param } = useParams();
    console.log(param);
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + param);
    const history = useHistory();
    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/')
        }
        )
    }
      return (
        <div className="blog-details">
            { isPending && <div>itvirteba...</div> }
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h2>{ blog.title}</h2>
                    <p>Written by { blog.author }</p>
                    <div>{ blog.body }</div>
                    <button onClick= {handleClick}>DELETE</button>
                </article>
            )}
        </div>
      )
}