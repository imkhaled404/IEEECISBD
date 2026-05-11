import { prisma } from "../../lib/prisma";
import Link from "next/link";
import "../pages.css";

export const dynamic = "force-dynamic";

export default async function Blogs() {
    let posts = [];
    try {
        posts = await prisma.blogPost.findMany({
            orderBy: {
                date: 'desc',
            },
        });
    } catch (e) {
        console.error("Blog Fetch Error:", e);
    }

    return (
        <div className="page-container">
            <section className="page-hero bg-grid">
                <div className="container">
                    <h1 className="text-gradient">Blogs & Insights</h1>
                    <p className="large-text">Technical articles, event recaps, and thought leadership from our community.</p>
                </div>
            </section>

            <section className="section">
                <div className="container">
                    <div className="blogs-layout">
                        {posts.length > 0 ? (
                            <div className="blogs-list">
                                {posts.map((post) => (
                                    <div key={post.id} className="blog-post-card">
                                        <div className="post-content">
                                            <div className="post-meta">
                                                <span className="author">By {post.author}</span>
                                                <span className="dot"></span>
                                                <span className="date">{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                            </div>
                                            <h2>{post.title}</h2>
                                            <p>{post.excerpt}</p>
                                            <Link href={`/blogs/${post.id}`} className="read-more">Read Full Article &rarr;</Link>
                                        </div>
                                        {post.imageUrl && (
                                            <div className="post-image">
                                                <img src={post.imageUrl} alt={post.title} />
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-12">
                                <p className="large-text" style={{ color: '#666' }}>No blog posts yet. Check back soon for the latest insights!</p>
                            </div>
                        )}

                        <div className="blogs-sidebar">
                            <div className="sidebar-widget">
                                <h3>About Our Blog</h3>
                                <p>The IEEE CIS BDC blog features technical insights from leading researchers and professionals in Bangladesh.</p>
                            </div>
                            <div className="sidebar-widget">
                                <h3>Technical Areas</h3>
                                <ul className="categories-list">
                                    <li>Neural Networks</li>
                                    <li>Fuzzy Systems</li>
                                    <li>Evolutionary Computation</li>
                                    <li>Machine Learning</li>
                                    <li>Robotics & AI</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
