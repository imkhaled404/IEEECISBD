import { prisma } from "../../../lib/prisma";
import MemberCard from "../../../components/MemberCard";

export const dynamic = "force-dynamic";

export default async function TeamPage({ params }) {
    const { category } = params;

    const members = await prisma.committeeMember.findMany({
        where: { category },
        orderBy: { order: 'asc' }
    });

    const categoryTitles = {
        excom: "Executive Committee",
        sac: "Student Activities Committee",
        secretariat: "Secretariat",
        spark: "SPARK",
    };

    return (
        <div className="page-wrapper">
            <section className="page-header bg-grid">
                <div className="container">
                    <h1 className="text-gradient">
                        {categoryTitles[category] || category.toUpperCase()}
                    </h1>
                    <p>The dedicated members working behind the scenes.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {members.length > 0 ? (
                        <div className="grid-3">
                            {members.map(member => (
                                <MemberCard key={member.id} member={member} />
                            ))}
                        </div>
                    ) : (
                        <div className="empty-state">
                            <p>No members found for this category.</p>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
}
