import { useState } from "react"

export default function Posts() {

    const [posts, setPosts] = useState([]);

    return(
        <div>
            <p>Posts: </p>
        </div>
    )
}