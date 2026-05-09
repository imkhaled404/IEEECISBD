'use server';

import { prisma } from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createBlogPost(formData) {
    const title = formData.get('title');
    const author = formData.get('author');
    const excerpt = formData.get('excerpt');
    const content = formData.get('content');
    const imageUrl = formData.get('imageUrl');

    await prisma.blogPost.create({
        data: {
            title,
            author,
            excerpt,
            content,
            imageUrl,
            date: new Date(),
        },
    });

    revalidatePath('/admin/blogs');
    revalidatePath('/blogs');
    revalidatePath('/');
}

export async function updateBlogPost(id, formData) {
    const title = formData.get('title');
    const author = formData.get('author');
    const excerpt = formData.get('excerpt');
    const content = formData.get('content');
    const imageUrl = formData.get('imageUrl');

    await prisma.blogPost.update({
        where: { id },
        data: {
            title,
            author,
            excerpt,
            content,
            imageUrl,
        },
    });

    revalidatePath('/admin/blogs');
    revalidatePath('/blogs');
    revalidatePath('/');
}

export async function deleteBlogPost(id) {
    await prisma.blogPost.delete({
        where: { id },
    });

    revalidatePath('/admin/blogs');
    revalidatePath('/blogs');
    revalidatePath('/');
}
