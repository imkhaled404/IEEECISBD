export default function MemberCard({ member, onOpenProfile = () => { } }) {
  return (
    <div className="member-card" style={{
      textAlign: 'center',
      padding: '2.5rem',
      background: 'var(--card-bg)',
      borderRadius: '1.5rem',
      border: '1px solid var(--border)',
      transition: 'all 0.3s ease',
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}>
      <div className="member-photo" style={{
        width: '160px',
        height: '160px',
        margin: '0 auto 2rem',
        borderRadius: '50%',
        overflow: 'hidden',
        border: '4px solid var(--primary)',
        boxShadow: 'var(--shadow-cyan)',
        flexShrink: 0
      }}>
        {member.imageUrl ? (
          <img src={member.imageUrl} alt={member.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="photo-placeholder" style={{ background: 'var(--card-bg-alt)', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '3.5rem' }}>👤</div>
        )}
      </div>
      <div className="member-info" style={{ flexGrow: 1 }}>
        <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>{member.name}</h3>
        <p className="role" style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.5rem' }}>{member.role}</p>
        <p className="uni" style={{ color: 'var(--muted-foreground)', fontSize: '0.85rem', marginTop: '0.5rem', minHeight: '3rem' }}>{member.university}</p>
      </div>
      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={() => onOpenProfile(member)}
          className="btn btn-outline"
          style={{ width: '100%', padding: '0.6rem', fontSize: '0.85rem' }}
        >
          View Profile
        </button>
      </div>
    </div>
  );
}
