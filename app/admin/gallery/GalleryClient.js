'use client';
import { useState } from 'react';
import GalleryForm from '../components/GalleryForm';
import { deleteGalleryImage } from './actions';

export default function GalleryClient({ initialImages }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingImage, setEditingImage] = useState(null);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this image?')) {
            try {
                await deleteGalleryImage(id);
            } catch (error) {
                alert('Failed to delete image');
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                {!isAdding && !editingImage && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAdding(true)}
                    >
                        Add Photo
                    </button>
                )}
            </div>

            {(isAdding || editingImage) && (
                <div style={{ marginBottom: '2rem' }}>
                    <GalleryForm
                        image={editingImage}
                        onClose={() => {
                            setIsAdding(false);
                            setEditingImage(null);
                        }}
                    />
                </div>
            )}

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {initialImages.map((image) => (
                    <div key={image.id} className="admin-card" style={{ padding: '0', overflow: 'hidden' }}>
                        <div style={{ height: '200px', width: '100%', position: 'relative' }}>
                            <img
                                src={image.imageUrl}
                                alt={image.title || 'Gallery image'}
                                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                            />
                        </div>
                        <div style={{ padding: '1rem' }}>
                            <h3 style={{ fontSize: '1rem', marginBottom: '0.25rem' }}>{image.title || 'Untitled'}</h3>
                            <p style={{ fontSize: '0.8125rem', color: '#666', marginBottom: '1rem' }}>{image.caption}</p>
                            <div className="admin-actions">
                                <button
                                    className="btn"
                                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', flex: 1 }}
                                    onClick={() => setEditingImage(image)}
                                >
                                    Edit
                                </button>
                                <button
                                    className="btn"
                                    style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#fee2e2', color: '#dc2626', flex: 1 }}
                                    onClick={() => handleDelete(image.id)}
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {initialImages.length === 0 && (
                <div className="admin-card" style={{ textAlign: 'center', padding: '3rem' }}>
                    <p style={{ color: '#666' }}>No photos in the gallery. Upload your first highlight!</p>
                </div>
            )}
        </>
    );
}
