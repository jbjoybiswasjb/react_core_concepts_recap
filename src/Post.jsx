import './Post.css'
export default function Post({post}) {
    const {title, id, userId, body} = post;
    return (
        <div className="box">
            <h3>Title: {title}</h3>
            <p><small>User ID: {userId}</small></p>
            <p><small>Post ID: {id}</small></p>
            {body};
        </div>
    )
}