import { prisma } from '../../../lib/prisma';
import BlogsClient from './BlogsClient';

export default async function BlogsPage() {
    const posts = await prisma.blogPost.findMany({
        orderBy: {
            date: 'desc',
        },
    });

    return (
        <div>
            <div className="admin-header">
                <h1>Blog Management</h1>
            </div>

            <BlogsClient initialPosts={posts} />
        </div>
    );
}
