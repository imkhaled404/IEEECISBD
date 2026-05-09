'use client';
import { useState } from 'react';
import BlogForm from '../components/BlogForm';
import { deleteBlogPost } from './actions';

export default function BlogsClient({ initialPosts }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingPost, setEditingPost] = useState(null);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this post?')) {
            try {
                await deleteBlogPost(id);
            } catch (error) {
                alert('Failed to delete post');
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                {!isAdding && !editingPost && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAdding(true)}
                    >
                        New Post
                    </button>
                )}
            </div>

            {(isAdding || editingPost) && (
                <div style={{ marginBottom: '2rem' }}>
                    <BlogForm
                        post={editingPost}
                        onClose={() => {
                            setIsAdding(false);
                            setEditingPost(null);
                        }}
                    />
                </div>
            )}

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Author</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialPosts.map((post) => (
                            <tr key={post.id}>
                                <td>
                                    <div style={{ fontWeight: '600' }}>{post.title}</div>
                                    <div style={{ fontSize: '0.8125rem', color: '#666' }}>{post.excerpt}</div>
                                </td>
                                <td>{post.author}</td>
                                <td>{new Date(post.date).toLocaleDateString()}</td>
                                <td>
                                    <div className="admin-actions">
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                                            onClick={() => setEditingPost(post)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#fee2e2', color: '#dc2626' }}
                                            onClick={() => handleDelete(post.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {initialPosts.length === 0 && (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No blog posts found. Write your first insight!</p>
                )}
            </div>
        </>
    );
}
