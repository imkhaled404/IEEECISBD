import { prisma } from '../../../lib/prisma';
import GalleryClient from './GalleryClient';

export const dynamic = "force-dynamic";

export default async function GalleryPage() {
    const images = await prisma.galleryImage.findMany({
        orderBy: {
            createdAt: 'desc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Gallery Management</h1>
            </div>

            <GalleryClient initialImages={images} />
        </div>
    );
}
