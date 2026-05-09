'use client';
import { useState } from 'react';
import AchievementForm from '../components/AchievementForm';
import { deleteAchievement } from './actions';

export default function AchievementsClient({ initialAchievements }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingAchievement, setEditingAchievement] = useState(null);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this achievement?')) {
            try {
                await deleteAchievement(id);
            } catch (error) {
                alert('Failed to delete achievement');
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                {!isAdding && !editingAchievement && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAdding(true)}
                    >
                        Add Achievement
                    </button>
                )}
            </div>

            {(isAdding || editingAchievement) && (
                <div style={{ marginBottom: '2rem' }}>
                    <AchievementForm
                        achievement={editingAchievement}
                        onClose={() => {
                            setIsAdding(false);
                            setEditingAchievement(null);
                        }}
                    />
                </div>
            )}

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Title</th>
                            <th>Winner</th>
                            <th>Year</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialAchievements.map((achievement) => (
                            <tr key={achievement.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        {achievement.imageUrl && (
                                            <img
                                                src={achievement.imageUrl}
                                                alt={achievement.title}
                                                style={{ width: '40px', height: '40px', objectFit: 'contain' }}
                                            />
                                        )}
                                        <span style={{ fontWeight: '600' }}>{achievement.title}</span>
                                    </div>
                                </td>
                                <td>{achievement.winner}</td>
                                <td>{achievement.year}</td>
                                <td>{achievement.category}</td>
                                <td>
                                    <div className="admin-actions">
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                                            onClick={() => setEditingAchievement(achievement)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#fee2e2', color: '#dc2626' }}
                                            onClick={() => handleDelete(achievement.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {initialAchievements.length === 0 && (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No achievements found. Add your first achievement!</p>
                )}
            </div>
        </>
    );
}
