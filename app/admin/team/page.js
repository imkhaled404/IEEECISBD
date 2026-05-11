import { prisma } from '../../../lib/prisma';
import CommitteeClient from './CommitteeClient';

export const dynamic = "force-dynamic";

export default async function CommitteePage() {
    const members = await prisma.committeeMember.findMany({
        orderBy: {
            order: 'asc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Committee Members</h1>
            </div>

            <CommitteeClient initialMembers={members} />
        </div>
    );
}
