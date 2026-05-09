import { prisma } from '../../../lib/prisma';
import ChaptersClient from './ChaptersClient';

export default async function ChaptersPage() {
    const chapters = await prisma.chapter.findMany({
        orderBy: {
            name: 'asc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Chapters</h1>
            </div>

            <ChaptersClient initialChapters={chapters} />
        </div>
    );
}
