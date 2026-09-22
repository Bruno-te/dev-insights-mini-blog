import { memo } from 'react';
import type { Post as PostType } from '../types/Post';
import '../styles/Post.css';

interface PostProps {
  post: PostType;
}

const HIGHLIGHTED_AUTHOR = 'Alice Mwangi';

function getPreview(content: string, wordCount: number = 12): string {
  const words = content.split(' ');
  return words.slice(0, wordCount).join(' ') + (words.length > wordCount ? '...' : '');
}

function isPostNew(datePosted: string): boolean {
  const postDate = new Date(datePosted);
  const now = new Date();
  const diffHours = (now.getTime() - postDate.getTime()) / (1000 * 60 * 60);
  return diffHours >= 0 && diffHours <= 24;
}

const Post: React.FC<PostProps> = ({ post }) => {
  const isHighlighted = post.author === HIGHLIGHTED_AUTHOR;
  const isNew = isPostNew(post.datePosted);

  return (
    <article
      className="post"
      style={isHighlighted ? { backgroundColor: '#fff8dc' } : undefined}
    >
      <div className="post-header">
        <h2 className="post-title">{post.title}</h2>
        {isNew && <span className="post-badge">New!</span>}
      </div>
      <p className="post-meta">By {post.author} · {post.datePosted}</p>
      <p className="post-preview">{getPreview(post.content)}</p>
    </article>
  );
};

export default memo(Post);