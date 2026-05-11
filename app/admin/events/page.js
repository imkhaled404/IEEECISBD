import { prisma } from '../../../lib/prisma';
import EventsClient from './EventsClient';

export const dynamic = "force-dynamic";

export default async function EventsPage() {
    const events = await prisma.event.findMany({
        orderBy: {
            date: 'desc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Events</h1>
            </div>

            <EventsClient initialEvents={events} />
        </div>
    );
}
