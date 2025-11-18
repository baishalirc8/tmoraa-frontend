"use server";

import { sendContactEmail } from "@/lib/mail";

export async function submitContactForm(formData: FormData) {
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const country = formData.get("country") as string;
  const company = formData.get("company") as string;
  const message = formData.get("message") as string;

  await sendContactEmail({
    firstName,
    lastName,
    email,
    phone,
    country,
    company,
    message,
  });
}
