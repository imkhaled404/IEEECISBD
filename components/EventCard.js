import Link from "next/link";

export default function EventCard({ event }) {
  return (
    <div className="event-card" style={{
      background: 'var(--card-bg)',
      borderRadius: '1.5rem',
      overflow: 'hidden',
      border: '1px solid var(--border)',
      transition: 'all 0.3s ease'
    }}>
      <div className="event-image" style={{ position: 'relative', height: '220px' }}>
        {event.imageUrl ? (
          <img src={event.imageUrl} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <div className="placeholder-image" style={{ height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--primary)', color: '#000', fontWeight: 'bold' }}>
            IEEE EVENT
          </div>
        )}
        <div className="event-date" style={{
          position: 'absolute',
          top: '1rem',
          left: '1rem',
          background: 'var(--primary)',
          color: '#000',
          padding: '0.6rem 1rem',
          borderRadius: '1rem',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 'var(--shadow-cyan)'
        }}>
          <span className="day" style={{ fontSize: '1.25rem', fontWeight: '800' }}>{new Date(event.date).getUTCDate()}</span>
          <span className="month" style={{ fontSize: '0.7rem', fontWeight: '700', textTransform: 'uppercase' }}>
            {new Date(event.date).toLocaleString('en-US', { timeZone: 'UTC', month: 'short' })}
          </span>
        </div>
      </div>
      <div className="event-info" style={{ padding: '2rem' }}>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{event.title}</h3>
        <p className="venue" style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', marginBottom: '1rem' }}>📍 {event.venue}</p>
        <p className="desc" style={{ color: 'var(--muted-foreground)', fontSize: '0.95rem', marginBottom: '1.5rem' }}>{event.description}</p>
        <Link href={`/events/${event.id}`} className="btn btn-outline" style={{ display: 'inline-flex', padding: '0.6rem 1.2rem', fontSize: '0.85rem' }}>
          Learn More
        </Link>
      </div>
    </div>
  );
}
