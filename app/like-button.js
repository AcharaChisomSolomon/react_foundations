'use client'

import { useState } from 'react';

export default function LikeButton() {
    const [likes, setLikes] = useState(0);
    
    const handleCLick = () => setLikes(likes + 1);
    
    return <button onClick={handleCLick}>Likes ({likes})</button>;
}