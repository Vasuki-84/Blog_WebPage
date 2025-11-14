import React, { useState, useEffect } from "react";

function Comments() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // Load comments from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("travel_comments")) || [];
    setComments(stored);
  }, []);

  // Save comments in localStorage
  useEffect(() => {
    localStorage.setItem("travel_comments", JSON.stringify(comments));
  }, [comments]);

  const handlePost = () => {
    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      text: comment,
      date: new Date().toLocaleString(),
    };

    setComments([newComment, ...comments]);
    setComment("");
  };

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-2xl font-bold mb-4">Comments</h2>

      <textarea
        className="w-full border p-3 rounded-md"
        rows="3"
        placeholder="Write your comment..."
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>

      <button
        onClick={handlePost}
        className="bg-blue-600 mt-3 text-white px-4 py-2 rounded-md"
      >
        Post Comment
      </button>

      <div className="mt-6 space-y-4">
        {comments.map((c) => (
          <div key={c.id} className="border p-3 rounded-md bg-gray-50">
            <p>{c.text}</p>
            <p className="text-sm text-gray-500 mt-2">{c.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Comments;
