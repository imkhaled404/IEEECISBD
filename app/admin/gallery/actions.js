'use server';

import { prisma } from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createGalleryImage(formData) {
    const title = formData.get('title');
    const imageUrl = formData.get('imageUrl');
    const caption = formData.get('caption');

    await prisma.galleryImage.create({
        data: {
            title,
            imageUrl,
            caption,
        },
    });

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    revalidatePath('/');
}

export async function updateGalleryImage(id, formData) {
    const title = formData.get('title');
    const imageUrl = formData.get('imageUrl');
    const caption = formData.get('caption');

    await prisma.galleryImage.update({
        where: { id },
        data: {
            title,
            imageUrl,
            caption,
        },
    });

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    revalidatePath('/');
}

export async function deleteGalleryImage(id) {
    await prisma.galleryImage.delete({
        where: { id },
    });

    revalidatePath('/admin/gallery');
    revalidatePath('/gallery');
    revalidatePath('/');
}
