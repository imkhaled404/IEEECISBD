'use client';
import { useState } from 'react';
import { createMember, updateMember } from '../team/actions';

export default function MemberForm({ member, onClose }) {
    const [loading, setLoading] = useState(false);

    async function handleSubmit(formData) {
        setLoading(true);
        try {
            if (member) {
                await updateMember(member.id, formData);
            } else {
                await createMember(formData);
            }
            onClose();
        } catch (error) {
            console.error('Failed to save member:', error);
            alert('Failed to save member');
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
            <h2>{member ? 'Edit Member' : 'Add New Member'}</h2>
            <form action={handleSubmit} className="admin-form" style={{ marginTop: '1.5rem' }}>
                <div className="form-group">
                    <label>Name*</label>
                    <input name="name" defaultValue={member?.name} required placeholder="Full Name" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Role*</label>
                        <input name="role" defaultValue={member?.role} required placeholder="e.g. Chair" />
                    </div>
                    <div className="form-group">
                        <label>Year*</label>
                        <input name="year" defaultValue={member?.year || '2024'} required placeholder="e.g. 2024" />
                    </div>
                </div>

                <div className="form-group">
                    <label>Category*</label>
                    <select name="category" defaultValue={member?.category || 'EXCOM'}>
                        <option value="EXCOM">EXCOM</option>
                        <option value="SAC">SAC</option>
                        <option value="SPARK">SPARK</option>
                    </select>
                </div>

                <div className="form-group">
                    <label>Image URL</label>
                    <input name="imageUrl" defaultValue={member?.imageUrl} placeholder="https://example.com/image.jpg" />
                </div>

                <div className="form-group">
                    <label>University</label>
                    <input name="university" defaultValue={member?.university} placeholder="University Name" />
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                    <div className="form-group">
                        <label>Email</label>
                        <input name="email" type="email" defaultValue={member?.email} placeholder="email@example.com" />
                    </div>
                    <div className="form-group">
                        <label>Priority Order (0 for top)</label>
                        <input name="order" type="number" defaultValue={member?.order || 0} placeholder="e.g. 0, 1, 2" />
                    </div>
                </div>

                <div className="form-group">
                    <label>LinkedIn URL</label>
                    <input name="linkedinUrl" defaultValue={member?.linkedinUrl} placeholder="https://linkedin.com/in/..." />
                </div>

                <div className="admin-actions" style={{ marginTop: '1rem' }}>
                    <button type="submit" className="btn btn-primary" disabled={loading}>
                        {loading ? 'Saving...' : member ? 'Update Member' : 'Create Member'}
                    </button>
                    <button type="button" className="btn" onClick={onClose} disabled={loading}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
}
