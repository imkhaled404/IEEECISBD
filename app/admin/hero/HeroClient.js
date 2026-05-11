"use client";
import { useState } from 'react';
import { addSliderItem, updateSliderItem, deleteSliderItem } from './actions';

export default function HeroClient({ initialItems }) {
    const [items, setItems] = useState(initialItems);
    const [isEditing, setIsEditing] = useState(false);
    const [currentItem, setCurrentItem] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        const formData = new FormData(e.target);

        try {
            if (currentItem) {
                const updated = await updateSliderItem(currentItem.id, formData);
                setItems(items.map(item => item.id === updated.id ? updated : item));
            } else {
                const newItem = await addSliderItem(formData);
                setItems([...items, newItem]);
            }
            setIsEditing(false);
            setCurrentItem(null);
        } catch (error) {
            alert('Error saving slider item');
        } finally {
            setIsLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this slider item?')) return;
        try {
            await deleteSliderItem(id);
            setItems(items.filter(item => item.id !== id));
        } catch (error) {
            alert('Error deleting item');
        }
    };

    return (
        <div className="admin-content">
            <div className="admin-actions">
                <button
                    className="btn-primary"
                    onClick={() => {
                        setCurrentItem(null);
                        setIsEditing(true);
                    }}
                >
                    Add Slider Item
                </button>
            </div>

            {isEditing && (
                <div className="modal-overlay">
                    <div className="admin-card modal-content" style={{ maxWidth: '600px', width: '100%' }}>
                        <h2>{currentItem ? 'Edit Slider Item' : 'Add Slider Item'}</h2>
                        <form onSubmit={handleSubmit} className="admin-form">
                            <div className="form-group">
                                <label>Title</label>
                                <input name="title" defaultValue={currentItem?.title} required />
                            </div>
                            <div className="form-group">
                                <label>Subtitle</label>
                                <input name="subtitle" defaultValue={currentItem?.subtitle} />
                            </div>
                            <div className="form-group">
                                <label>Image URL</label>
                                <input name="imageUrl" defaultValue={currentItem?.imageUrl} required />
                            </div>
                            <div className="form-group">
                                <label>Link (Optional)</label>
                                <input name="link" defaultValue={currentItem?.link} />
                            </div>
                            <div className="form-group">
                                <label>Display Order</label>
                                <input name="order" type="number" defaultValue={currentItem?.order || 0} />
                            </div>
                            <div className="form-actions">
                                <button type="button" onClick={() => setIsEditing(false)} className="btn-secondary">Cancel</button>
                                <button type="submit" className="btn-primary" disabled={isLoading}>
                                    {isLoading ? 'Saving...' : 'Save Item'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <div className="admin-table-container">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Image</th>
                            <th>Title</th>
                            <th>Order</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.sort((a, b) => a.order - b.order).map((item) => (
                            <tr key={item.id}>
                                <td>
                                    <img src={item.imageUrl} alt="" style={{ width: '100px', height: '60px', objectFit: 'cover', borderRadius: '4px' }} />
                                </td>
                                <td>
                                    <div>{item.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--admin-text-muted)' }}>{item.subtitle}</div>
                                </td>
                                <td>{item.order}</td>
                                <td>
                                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                                        <button
                                            className="btn-action edit"
                                            onClick={() => {
                                                setCurrentItem(item);
                                                setIsEditing(true);
                                            }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn-action delete"
                                            onClick={() => handleDelete(item.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
