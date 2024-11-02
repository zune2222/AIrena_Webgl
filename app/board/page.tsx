// app/board/page.tsx

"use client";
import React, { useState, useEffect, useRef } from "react";

interface Post {
  id: number;
  name: string;
  image: string;
}

const BoardPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    fetchPosts(page);
  }, [page]);

  const fetchPosts = async (pageNum: number) => {
    const newPosts: Post[] = Array.from({ length: 10 }, (_, index) => ({
      id: (pageNum - 1) * 10 + index + 1,
      name: `User ${index + 1 + (pageNum - 1) * 10}`,
      image: `https://picsum.photos/seed/${(pageNum - 1) * 10 + index + 1}/200`,
    }));

    setPosts((prev) => [...prev, ...newPosts]);
  };

  const lastPostRef = (node: HTMLDivElement) => {
    if (observer.current) observer.current.disconnect();
    observer.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage((prev) => prev + 1);
      }
    });
    if (node) observer.current.observe(node);
  };

  return (
    <div className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-5 mt-5">게시판</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <div
            key={post.id}
            ref={index === posts.length - 1 ? lastPostRef : null}
            className="bg-gray-800 rounded-lg overflow-hidden"
          >
            <img
              src={post.image}
              alt={post.name}
              className="w-full h-48 object-cover" // 이미지를 카드 상단에 꽉 채우도록 설정
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-center">{post.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BoardPage;
