import { prisma } from '../../../lib/prisma';
import AchievementsClient from './AchievementsClient';

export const dynamic = "force-dynamic";

export default async function AchievementsPage() {
    const achievements = await prisma.achievement.findMany({
        orderBy: {
            year: 'desc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Achievements</h1>
            </div>

            <AchievementsClient initialAchievements={achievements} />
        </div>
    );
}
