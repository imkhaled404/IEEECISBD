'use client';
import { useState } from 'react';
import { createGalleryImage, updateGalleryImage } from '../gallery/actions';

export default function GalleryForm({ image, onClose }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData) {
        setLoading(true);
        try {
            if (image) {
                await updateGalleryImage(image.id, formData);
            } else {
                await createGalleryImage(formData);
            }
            onClose();
        } catch (error) {
            console.error('Failed to save image:', error);
            alert('Failed to save image');
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
            <h2>{image ? 'Edit Gallery Image' : 'Add Gallery Image'}</h2>
            <form action={handleSubmit} className="admin-form" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                    <label>Title</label>
                    <input name="title" defaultValue={image?.title} placeholder="e.g. IEEE CIS Day 2024" />
                </div>

                <div className="form-group">
                    <label>Image URL*</label>
                    <input name="imageUrl" defaultValue={image?.imageUrl} required placeholder="https://example.com/photo.jpg" />
                </div>

                <div className="form-group">
                    <label>Caption</label>
                    <textarea name="caption" defaultValue={image?.caption} rows={2} placeholder="Brief caption about the photo..." />
                </div>

                <div className="admin-actions" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : image ? 'Update Image' : 'Add Image'}
                    </button>
                    <button type="button" className="btn" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
