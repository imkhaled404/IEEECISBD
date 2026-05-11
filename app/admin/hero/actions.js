"use server";
import { prisma } from "../../../lib/prisma";
import { revalidatePath } from "next/cache";

export async function addSliderItem(formData) {
    const item = await prisma.heroSlider.create({
        data: {
            title: formData.get('title'),
            subtitle: formData.get('subtitle'),
            imageUrl: formData.get('imageUrl'),
            link: formData.get('link'),
            order: parseInt(formData.get('order')) || 0,
        }
    });
    revalidatePath("/");
    revalidatePath("/admin/hero");
    return item;
}

export async function updateSliderItem(id, formData) {
    const item = await prisma.heroSlider.update({
        where: { id },
        data: {
            title: formData.get('title'),
            subtitle: formData.get('subtitle'),
            imageUrl: formData.get('imageUrl'),
            link: formData.get('link'),
            order: parseInt(formData.get('order')) || 0,
        }
    });
    revalidatePath("/");
    revalidatePath("/admin/hero");
    return item;
}

export async function deleteSliderItem(id) {
    await prisma.heroSlider.delete({
        where: { id }
    });
    revalidatePath("/");
    revalidatePath("/admin/hero");
}
