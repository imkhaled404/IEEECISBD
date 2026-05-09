'use client';
import { useState } from 'react';
import EventForm from '../components/EventForm';
import { deleteEvent } from './actions';

export default function EventsClient({ initialEvents }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingEvent, setEditingEvent] = useState(null);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this event?')) {
            try {
                await deleteEvent(id);
            } catch (error) {
                alert('Failed to delete event');
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                {!isAdding && !editingEvent && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAdding(true)}
                    >
                        Add Event
                    </button>
                )}
            </div>

            {(isAdding || editingEvent) && (
                <div style={{ marginBottom: '2rem' }}>
                    <EventForm
                        event={editingEvent}
                        onClose={() => {
                            setIsAdding(false);
                            setEditingEvent(null);
                        }}
                    />
                </div>
            )}

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Date</th>
                            <th>Venue</th>
                            <th>Type</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialEvents.map((event) => (
                            <tr key={event.id}>
                                <td>
                                    <div style={{ fontWeight: '600' }}>{event.title}</div>
                                    <div style={{ fontSize: '0.8125rem', color: '#666', maxWidth: '300px', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
                                        {event.description}
                                    </div>
                                </td>
                                <td>{new Date(event.date).toLocaleDateString()}</td>
                                <td>{event.venue}</td>
                                <td>
                                    <span className={`badge ${event.type === 'upcoming' ? 'badge-blue' : 'badge-orange'}`}>
                                        {event.type}
                                    </span>
                                </td>
                                <td>
                                    <div className="admin-actions">
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                                            onClick={() => setEditingEvent(event)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#fee2e2', color: '#dc2626' }}
                                            onClick={() => handleDelete(event.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {initialEvents.length === 0 && (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No events found. Add your first event!</p>
                )}
            </div>
        </>
    );
}
