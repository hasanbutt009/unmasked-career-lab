"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});

type FormValues = z.infer<typeof schema>;

export function ToolkitForm() {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
  });

  const onSubmit = () => {
    setSubmitted(true);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-3" aria-label="The Unmasked Career toolkit form">
      <label htmlFor="toolkit-email" className="text-sm font-medium">
        Email
      </label>
      <div className="flex flex-col gap-2 md:flex-row">
        <input
          id="toolkit-email"
          type="email"
          {...register("email")}
          placeholder="you@example.com"
          className="w-full rounded-full border border-[var(--teal)]/30 bg-[var(--bone)] px-4 py-3 text-sm"
        />
        <button type="submit" className="rounded-full bg-[var(--clay)] px-5 py-3 text-sm font-semibold text-[var(--bone)]">
          Send me the toolkit
        </button>
      </div>
      {errors.email ? <p className="text-sm text-[var(--clay)]">{errors.email.message}</p> : null}
      {submitted ? (
        <p className="text-sm text-[var(--teal)]">
          Thanks - this demo form is wired for validation. Connect your email provider before launch.
        </p>
      ) : null}
    </form>
  );
}
