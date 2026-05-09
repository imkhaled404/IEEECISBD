'use client';
import { useState } from 'react';
import { createEvent, updateEvent } from '../events/actions';

export default function EventForm({ event, onClose }) {
    const [loading, setLoading] = useState(false);

    // Format date for input: YYYY-MM-DD
    const formatDate = (date) => {
        if (!date) return '';
        const d = new Date(date);
        return d.toISOString().split('T')[0];
    };

    async function handleSubmit(formData) {
        setLoading(true);
        try {
            if (event) {
                await updateEvent(event.id, formData);
            } else {
                await createEvent(formData);
            }
            onClose();
        } catch (error) {
            console.error('Failed to save event:', error);
            alert('Failed to save event');
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
            <h2>{event ? 'Edit Event' : 'Add New Event'}</h2>
            <form action={handleSubmit} className="admin-form" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                    <label>Title*</label>
                    <input name="title" defaultValue={event?.title} required placeholder="Event Title" />
                </div>

                <div className="form-group">
                    <label>Description</label>
                    <textarea name="description" defaultValue={event?.description} rows={3} placeholder="Brief description..." />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Date*</label>
                        <input name="date" type="date" defaultValue={formatDate(event?.date)} required />
                    </div>
                    <div className="form-group">
                        <label>Venue</label>
                        <input name="venue" defaultValue={event?.venue} placeholder="e.g. Online, University Hall" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Type*</label>
                    <select name="type" defaultValue={event?.type || 'upcoming'}>
                        <option value="upcoming">Upcoming</option>
                        <option value="previous">Previous</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input name="imageUrl" defaultValue={event?.imageUrl} placeholder="https://example.com/event.jpg" />
                </div>

                <div className="form-group">
                    <label>Registration Link</label>
                    <input name="registrationLink" defaultValue={event?.registrationLink} placeholder="https://forms.gle/..." />
                </div>

                <div className="admin-actions" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : event ? 'Update Event' : 'Create Event'}
                    </button>
                    <button type="button" className="btn" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
