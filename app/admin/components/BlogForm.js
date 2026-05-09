'use client';
import { useState } from 'react';
import { createBlogPost, updateBlogPost } from '../blogs/actions';

export default function BlogForm({ post, onClose }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData) {
        setLoading(true);
        try {
            if (post) {
                await updateBlogPost(post.id, formData);
            } else {
                await createBlogPost(formData);
            }
            onClose();
        } catch (error) {
            console.error('Failed to save post:', error);
            alert('Failed to save post');
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="admin-card" style={{ position: 'relative' }}>
            <button
                onClick={onClose}
                style={{ position: 'absolute', top: '1rem', right: '1rem', border: 'none', background: 'none', cursor: 'pointer', fontSize: '1.5rem' }}
            >
                ×
            </button>
            <h2>{post ? 'Edit Blog Post' : 'Add New Blog Post'}</h2>
            <form action={handleSubmit} className="admin-form" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                    <label>Title*</label>
                    <input name="title" defaultValue={post?.title} required placeholder="Post Title" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Author*</label>
                        <input name="author" defaultValue={post?.author} required placeholder="Author Name" />
                    </div>
                    <div className="form-group">
                        <label>Image URL</label>
                        <input name="imageUrl" defaultValue={post?.imageUrl} placeholder="https://example.com/blog.jpg" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Excerpt*</label>
                    <textarea name="excerpt" defaultValue={post?.excerpt} required rows={2} placeholder="Brief summary for the list view..." />
                </div>

                <div className="form-group">
                    <label>Content (Text/HTML)*</label>
                    <textarea name="content" defaultValue={post?.content} required rows={10} placeholder="Write your blog content here..." />
                </div>

                <div className="admin-actions" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : post ? 'Update Post' : 'Create Post'}
                    </button>
                    <button type="button" className="btn" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
