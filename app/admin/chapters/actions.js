'use server';

import { prisma } from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createChapter(formData) {
    const name = formData.get('name');
    const chair = formData.get('chair');
    const advisor = formData.get('advisor');
    const emails = formData.get('emails');
    const websiteUrl = formData.get('websiteUrl');
    const imageUrl = formData.get('imageUrl');

    await prisma.chapter.create({
        data: {
            name,
            chair,
            advisor,
            emails,
            websiteUrl,
            imageUrl,
        },
    });

    revalidatePath('/admin/chapters');
    revalidatePath('/chapters');
}

export async function updateChapter(id, formData) {
    const name = formData.get('name');
    const chair = formData.get('chair');
    const advisor = formData.get('advisor');
    const emails = formData.get('emails');
    const websiteUrl = formData.get('websiteUrl');
    const imageUrl = formData.get('imageUrl');

    await prisma.chapter.update({
        where: { id },
        data: {
            name,
            chair,
            advisor,
            emails,
            websiteUrl,
            imageUrl,
        },
    });

    revalidatePath('/admin/chapters');
    revalidatePath('/chapters');
}

export async function deleteChapter(id) {
    await prisma.chapter.delete({
        where: { id },
    });

    revalidatePath('/admin/chapters');
    revalidatePath('/chapters');
}
