'use server';

import { prisma } from '../../../lib/prisma';
import { revalidatePath } from 'next/cache';

export async function createMember(formData) {
    const name = formData.get('name');
    const role = formData.get('role');
    const year = formData.get('year');
    const category = formData.get('category');
    const imageUrl = formData.get('imageUrl');
    const university = formData.get('university');
    const email = formData.get('email');
    const linkedinUrl = formData.get('linkedinUrl');

    const order = parseInt(formData.get('order') || '0');

    await prisma.committeeMember.create({
        data: {
            name,
            role,
            year,
            category,
            imageUrl,
            university,
            email,
            linkedinUrl,
            order,
        },
    });

    revalidatePath('/admin/team');
    revalidatePath('/team');
}

export async function updateMember(id, formData) {
    const name = formData.get('name');
    const role = formData.get('role');
    const year = formData.get('year');
    const category = formData.get('category');
    const imageUrl = formData.get('imageUrl');
    const university = formData.get('university');
    const email = formData.get('email');
    const linkedinUrl = formData.get('linkedinUrl');

    const order = parseInt(formData.get('order') || '0');

    await prisma.committeeMember.update({
        where: { id },
        data: {
            name,
            role,
            year,
            category,
            imageUrl,
            university,
            email,
            linkedinUrl,
            order,
        },
    });

    revalidatePath('/admin/team');
    revalidatePath('/team');
}

export async function deleteMember(id) {
    await prisma.committeeMember.delete({
        where: { id },
    });

    revalidatePath('/admin/team');
    revalidatePath('/team');
}
