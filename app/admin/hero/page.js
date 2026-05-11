import { prisma } from '../../../lib/prisma';
import HeroClient from './HeroClient';

export const dynamic = "force-dynamic";

export default async function HeroPage() {
    const items = await prisma.heroSlider.findMany({
        orderBy: {
            order: 'asc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Hero Slider Management</h1>
                <p style={{ color: 'var(--admin-text-muted)' }}>Manage the items displayed in the homepage hero section.</p>
            </div>

            <HeroClient initialItems={items} />
        </div>
    );
}
