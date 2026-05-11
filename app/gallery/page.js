import { prisma } from "../../lib/prisma";
import Link from "next/link";
import "../pages.css";

export const dynamic = "force-dynamic";

export default async function Gallery() {
    let images = [];
    try {
        images = await prisma.galleryImage.findMany({
            orderBy: {
                createdAt: 'desc',
            },
        });
    } catch (e) {
        console.error("Gallery Fetch Error:", e);
    }

    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <h1 className="text-gradient">Gallery</h1>
                    <p className="large-text">Glimpses of our events, workshops, and community gatherings.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    {images.length > 0 ? (
                        <div className="gallery-grid">
                            {images.map((image) => (
                                <div key={image.id} className="gallery-card">
                                    <div className="gallery-img-wrapper">
                                        <img src={image.imageUrl} alt={image.title || 'Gallery image'} />
                                    </div>
                                    {image.title && (
                                        <div className="gallery-info">
                                            <h3>{image.title}</h3>
                                            <p>{image.caption}</p>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="text-center py-12">
                            <p className="large-text" style={{ color: '#666' }}>No photos available yet. Stay tuned!</p>
                        </div>
                    )}
                </div>
            </section>

            <section className="section bg-card">
                <div className="container text-center">
                    <h2 className="section-title">Contribute to Gallery</h2>
                    <p>Have photos from our events? Share them with us to be featured on the website.</p>
                    <Link href="/contact" className="btn btn-outline" style={{ marginTop: '1.5rem' }}>
                        Upload Photos
                    </Link>
                </div>
            </section>

        </div>
    );
}
