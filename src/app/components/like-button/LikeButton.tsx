"use client"
import { useState } from "react"

export default function LikeButton() {
    const [likes, setLikes] = useState(0);

    const handleLike = () => setLikes(like => like + 1);

    return <button onClick={handleLike}>Like {likes}</button>
}