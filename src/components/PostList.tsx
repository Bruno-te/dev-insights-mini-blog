import type { Post as PostType } from '../types/Post';
import Post from './Post';
import '../styles/PostList.css';

const samplePosts: PostType[] = [
  {
    id: 1,
    title: 'Getting Started with TypeScript Generics',
    author: 'Alice Mwangi',
    content: 'Generics let you write reusable, type-safe components and functions without giving up type checking. In this post we walk through practical examples you can use today.',
    datePosted: new Date().toISOString().slice(0, 10),
  },
  {
    id: 2,
    title: 'Why We Moved from REST to GraphQL',
    author: 'James Okafor',
    content: 'After six months running both APIs in parallel, here is what we learned about query flexibility, caching, and developer experience trade-offs.',
    datePosted: '2026-09-10',
  },
  {
    id: 3,
    title: 'Debugging Memory Leaks in Node.js',
    author: 'Sarah Chen',
    content: 'A step-by-step walkthrough of using heap snapshots and Chrome DevTools to track down a leak that was slowly crashing our production servers.',
    datePosted: '2026-08-28',
  },
];

const PostList: React.FC = () => {
  return (
    <section className="post-list">
      {samplePosts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
};

export default PostList;