'use client';
import { useState } from 'react';
import { createChapter, updateChapter } from '../chapters/actions';

export default function ChapterForm({ chapter, onClose }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData) {
        setLoading(true);
        try {
            if (chapter) {
                await updateChapter(chapter.id, formData);
            } else {
                await createChapter(formData);
            }
            onClose();
        } catch (error) {
            console.error('Failed to save chapter:', error);
            alert('Failed to save chapter');
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
            <h2>{chapter ? 'Edit Chapter' : 'Add New Chapter'}</h2>
            <form action={handleSubmit} className="admin-form" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                    <label>Chapter Name*</label>
                    <input name="name" defaultValue={chapter?.name} required placeholder="e.g. IEEE CIS DU SB Chapter" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Chair Name</label>
                        <input name="chair" defaultValue={chapter?.chair} placeholder="Name of the Chair" />
                    </div>
                    <div className="form-group">
                        <label>Advisor Name</label>
                        <input name="advisor" defaultValue={chapter?.advisor} placeholder="Name of the Advisor" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Emails (Comma separated)</label>
                    <input name="emails" defaultValue={chapter?.emails} placeholder="contact@example.com, info@example.com" />
                </div>

                <div className="form-group">
                    <label>Website URL</label>
                    <input name="websiteUrl" defaultValue={chapter?.websiteUrl} placeholder="https://ieee-du.org" />
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input name="imageUrl" defaultValue={chapter?.imageUrl} placeholder="https://example.com/logo.png" />
                </div>

                <div className="admin-actions" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : chapter ? 'Update Chapter' : 'Create Chapter'}
                    </button>
                    <button type="button" className="btn" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
