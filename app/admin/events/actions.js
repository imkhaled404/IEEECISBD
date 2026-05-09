'use server';

import { prisma } from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createEvent(formData) {
    const title = formData.get('title');
    const description = formData.get('description');
    const date = new Date(formData.get('date'));
    const venue = formData.get('venue');
    const imageUrl = formData.get('imageUrl');
    const registrationLink = formData.get('registrationLink');
    const type = formData.get('type');

    await prisma.event.create({
        data: {
            title,
            description,
            date,
            venue,
            imageUrl,
            registrationLink,
            type,
        },
    });

    revalidatePath('/admin/events');
    revalidatePath('/events');
}

export async function updateEvent(id, formData) {
    const title = formData.get('title');
    const description = formData.get('description');
    const date = new Date(formData.get('date'));
    const venue = formData.get('venue');
    const imageUrl = formData.get('imageUrl');
    const registrationLink = formData.get('registrationLink');
    const type = formData.get('type');

    await prisma.event.update({
        where: { id },
        data: {
            title,
            description,
            date,
            venue,
            imageUrl,
            registrationLink,
            type,
        },
    });

    revalidatePath('/admin/events');
    revalidatePath('/events');
}

export async function deleteEvent(id) {
    await prisma.event.delete({
        where: { id },
    });

    revalidatePath('/admin/events');
    revalidatePath('/events');
}
