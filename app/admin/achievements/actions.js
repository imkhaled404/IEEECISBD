'use server';

import { prisma } from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createAchievement(formData) {
    const title = formData.get('title');
    const year = formData.get('year');
    const category = formData.get('category');
    const winner = formData.get('winner');
    const imageUrl = formData.get('imageUrl');

    await prisma.achievement.create({
        data: {
            title,
            year,
            category,
            winner,
            imageUrl,
        },
    });

    revalidatePath('/admin/achievements');
    revalidatePath('/achievements');
}

export async function updateAchievement(id, formData) {
    const title = formData.get('title');
    const year = formData.get('year');
    const category = formData.get('category');
    const winner = formData.get('winner');
    const imageUrl = formData.get('imageUrl');

    await prisma.achievement.update({
        where: { id },
        data: {
            title,
            year,
            category,
            winner,
            imageUrl,
        },
    });

    revalidatePath('/admin/achievements');
    revalidatePath('/achievements');
}

export async function deleteAchievement(id) {
    await prisma.achievement.delete({
        where: { id },
    });

    revalidatePath('/admin/achievements');
    revalidatePath('/achievements');
}
