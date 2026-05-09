'use client';
import { useState } from 'react';
import MemberForm from '../components/MemberForm';
import { deleteMember } from './actions';

export default function CommitteeClient({ initialMembers }) {
    const [isAdding, setIsAdding] = useState(false);
    const [editingMember, setEditingMember] = useState(null);

    const handleDelete = async (id) => {
        if (confirm('Are you sure you want to delete this member?')) {
            try {
                await deleteMember(id);
            } catch (error) {
                alert('Failed to delete member');
            }
        }
    };

    return (
        <>
            <div style={{ marginBottom: '2rem' }}>
                {!isAdding && !editingMember && (
                    <button
                        className="btn btn-primary"
                        onClick={() => setIsAdding(true)}
                    >
                        Add Member
                    </button>
                )}
            </div>

            {(isAdding || editingMember) && (
                <div style={{ marginBottom: '2rem' }}>
                    <MemberForm
                        member={editingMember}
                        onClose={() => {
                            setIsAdding(false);
                            setEditingMember(null);
                        }}
                    />
                </div>
            )}

            <div className="admin-card">
                <table className="admin-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Role</th>
                            <th>Year</th>
                            <th>Category</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {initialMembers.map((member) => (
                            <tr key={member.id}>
                                <td>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                        {member.imageUrl && (
                                            <img
                                                src={member.imageUrl}
                                                alt={member.name}
                                                style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }}
                                            />
                                        )}
                                        <span>{member.name}</span>
                                    </div>
                                </td>
                                <td>{member.role}</td>
                                <td>{member.year}</td>
                                <td>
                                    <span className={`badge ${member.category === 'EXCOM' ? 'badge-blue' : 'badge-orange'}`}>
                                        {member.category}
                                    </span>
                                </td>
                                <td>
                                    <div className="admin-actions">
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem' }}
                                            onClick={() => setEditingMember(member)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="btn"
                                            style={{ padding: '0.25rem 0.5rem', fontSize: '0.875rem', backgroundColor: '#fee2e2', color: '#dc2626' }}
                                            onClick={() => handleDelete(member.id)}
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {initialMembers.length === 0 && (
                    <p style={{ textAlign: 'center', padding: '2rem', color: '#666' }}>No members found. Add your first member!</p>
                )}
            </div>
        </>
    );
}
