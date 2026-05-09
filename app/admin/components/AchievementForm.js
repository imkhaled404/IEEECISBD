'use client';
import { useState } from 'react';
import { createAchievement, updateAchievement } from '../achievements/actions';

export default function AchievementForm({ achievement, onClose }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData) {
        setLoading(true);
        try {
            if (achievement) {
                await updateAchievement(achievement.id, formData);
            } else {
                await createAchievement(formData);
            }
            onClose();
        } catch (error) {
            console.error('Failed to save achievement:', error);
            alert('Failed to save achievement');
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
            <h2>{achievement ? 'Edit Achievement' : 'Add New Achievement'}</h2>
            <form action={handleSubmit} className="admin-form" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                    <label>Achievement Title*</label>
                    <input name="title" defaultValue={achievement?.title} required placeholder="e.g. Best Student Chapter Award" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Winner/Recipient*</label>
                        <input name="winner" defaultValue={achievement?.winner} required placeholder="Who won it?" />
                    </div>
                    <div className="form-group">
                        <label>Year*</label>
                        <input name="year" defaultValue={achievement?.year || '2024'} required placeholder="e.g. 2024" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Category*</label>
                    <input name="category" defaultValue={achievement?.category} required placeholder="e.g. Global, Regional, Local" />
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input name="imageUrl" defaultValue={achievement?.imageUrl} placeholder="https://example.com/award.jpg" />
                </div>

                <div className="admin-actions" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : achievement ? 'Update Achievement' : 'Create Achievement'}
                    </button>
                    <button type="button" className="btn" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
