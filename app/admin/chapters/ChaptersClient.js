'use client';
import { useState } from 'react';
import ChapterForm from '../components/ChapterForm';
import { deleteChapter } from './actions';

export default function ChaptersClient({ initialChapters }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingChapter, setEditingChapter] = useState(null);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this chapter?')) {
            try {
                await deleteChapter(id);
            } catch (error) {
                alert('Failed to delete chapter');
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                {!isAdding && !editingChapter && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAdding(true)}
                    >
                        Add Chapter
                    </button>
                )}
            </div>

            {(isAdding || editingChapter) && (
                <div style={{ marginBottom: '2rem' }}>
                    <ChapterForm
                        chapter={editingChapter}
                        onClose={() => {
                            setIsAdding(false);
                            setEditingChapter(null);
                        }}
                    />
                </div>
            )}

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Chair</th>
                            <th>Advisor</th>
                            <th>Website</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialChapters.map((chapter) => (
                            <tr key={chapter.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        {chapter.imageUrl && (
                                            <img
                                                src={chapter.imageUrl}
                                                alt={chapter.name}
                                                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                                            />
                                        )}
                                        <span style={{ fontWeight: '600' }}>{chapter.name}</span>
                                    </div>
                                </td>
                                <td>{chapter.chair || 'N/A'}</td>
                                <td>{chapter.advisor || 'N/A'}</td>
                                <td>
                                    {chapter.websiteUrl ? (
                                        <a href={chapter.websiteUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--primary)', textDecoration: 'underline' }}>
                                            Visit
                                        </a>
                                    ) : 'N/A'}
                                </td>
                                <td>
                                    <div className="admin-actions">
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                                            onClick={() => setEditingChapter(chapter)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#fee2e2', color: '#dc2626' }}
                                            onClick={() => handleDelete(chapter.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {initialChapters.length === 0 && (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No chapters found. Add your first chapter!</p>
                )}
            </div>
        </>
    );
}
