import { prisma } from "../../../lib/prisma";
import ExComClient from "./ExComClient";
export const dynamic = 'force-dynamic';

export default async function ExComPage() {
    let dbMembers = [];
    try {
        dbMembers = await prisma.committeeMember.findMany({
            where: { category: "EXCOM" },
            orderBy: [
                { year: "desc" },
                { role: "asc" }
            ]
        });
        console.log("Server fetched members:", dbMembers?.length);
    } catch (e) {
        console.error("Failed to fetch committee members:", e);
    }

    const safeMembers = JSON.parse(JSON.stringify(dbMembers ?? []));
    return <ExComClient dbMembers={safeMembers} />;
}
