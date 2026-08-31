"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  stage: z.string().min(2, "Tell us your current stage."),
  message: z.string().min(12, "Please share a little more detail."),
});

type ContactValues = z.infer<typeof contactSchema>;

export function BookForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 rounded-2xl border border-[var(--teal)]/25 bg-[var(--bone)] p-6">
      <div>
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <input id="name" {...register("name")} className="mt-1 w-full rounded-xl border border-[var(--teal)]/30 px-3 py-2 text-sm" />
        {errors.name ? <p className="mt-1 text-xs text-[var(--clay)]">{errors.name.message}</p> : null}
      </div>
      <div>
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <input id="email" type="email" {...register("email")} className="mt-1 w-full rounded-xl border border-[var(--teal)]/30 px-3 py-2 text-sm" />
        {errors.email ? <p className="mt-1 text-xs text-[var(--clay)]">{errors.email.message}</p> : null}
      </div>
      <div>
        <label htmlFor="stage" className="text-sm font-medium">
          Where are you in your career right now?
        </label>
        <input id="stage" {...register("stage")} className="mt-1 w-full rounded-xl border border-[var(--teal)]/30 px-3 py-2 text-sm" />
        {errors.stage ? <p className="mt-1 text-xs text-[var(--clay)]">{errors.stage.message}</p> : null}
      </div>
      <div>
        <label htmlFor="message" className="text-sm font-medium">
          What is in your way right now?
        </label>
        <textarea id="message" rows={4} {...register("message")} className="mt-1 w-full rounded-xl border border-[var(--teal)]/30 px-3 py-2 text-sm" />
        {errors.message ? <p className="mt-1 text-xs text-[var(--clay)]">{errors.message.message}</p> : null}
      </div>
      <button type="submit" className="rounded-full bg-[var(--clay)] px-5 py-2 text-sm font-semibold text-[var(--bone)]">
        Send message
      </button>
      {submitted ? <p className="text-sm text-[var(--teal)]">Thanks - this demo form is ready to connect to your inbox workflow.</p> : null}
    </form>
  );
}
