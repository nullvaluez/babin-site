"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Send, Loader2, ShieldCheck, CheckCircle2, Phone,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema } from "@/lib/validators/contact";
import { primaryPhone, primaryPhoneTel } from "@/lib/data/offices";

const caseTypes = [
  { value: "", label: "Select a case type..." },
  { value: "personal-injury", label: "Personal Injury" },
  { value: "car-accident", label: "Car Accident" },
  { value: "truck-accident", label: "Truck Accident" },
  { value: "motorcycle-accident", label: "Motorcycle Accident" },
  { value: "mass-tort", label: "Mass Tort / Dangerous Drugs" },
  { value: "sexual-abuse", label: "Sexual Abuse & Assault" },
  { value: "human-trafficking", label: "Human Trafficking" },
  { value: "class-action", label: "Class Action" },
  { value: "unpaid-wages", label: "Unpaid Wages / Employment" },
  { value: "wrongful-death", label: "Wrongful Death" },
  { value: "other", label: "Other" },
];

const referralSources = [
  { value: "", label: "How did you hear about us?" },
  { value: "google", label: "Google / Search Engine" },
  { value: "referral", label: "Referral from Friend or Family" },
  { value: "attorney-referral", label: "Referral from Another Attorney" },
  { value: "social-media", label: "Social Media" },
  { value: "news", label: "News / Media" },
  { value: "advertisement", label: "Advertisement" },
  { value: "other", label: "Other" },
];

const selectClasses =
  "h-10 w-full rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:opacity-50";

export function ConsultationForm({ compact = false, className = "" }) {
  const [status, setStatus] = useState("idle");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      caseType: "",
      preferredContact: "either",
      bestTimeToCall: "",
      howDidYouHear: "",
      isExistingClient: "no",
      message: "",
      consent: false,
    },
  });

  async function onSubmit(data) {
    setStatus("submitting");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setStatus("success");
      reset();
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  }

  if (status === "success") {
    return (
      <div className={className}>
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
          <h3 className="mt-4 text-xl font-bold text-green-900">
            Thank You for Contacting Us
          </h3>
          <p className="mx-auto mt-2 max-w-md text-sm text-green-700">
            We&apos;ve received your inquiry and a member of our legal team will
            reach out within 24 hours. If your matter is urgent, call us
            directly.
          </p>
          <a
            href={`tel:${primaryPhoneTel}`}
            className="mt-4 inline-flex items-center gap-2 text-sm font-bold text-green-800 hover:underline"
          >
            <Phone className="h-4 w-4" />
            {primaryPhone}
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-5 flex items-center gap-2">
        <ShieldCheck className="h-4 w-4 text-blue-primary" />
        <span className="text-xs font-semibold text-gray-500">
          Free &amp; Confidential — Protected by Attorney-Client Privilege
        </span>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        {/* ── Section: Personal Information ── */}
        {!compact && (
          <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
            Your Information
          </p>
        )}
        <div className={compact ? "space-y-3" : "grid gap-4 sm:grid-cols-2"}>
          <FieldGroup label="First Name" error={errors.firstName}>
            <Input
              placeholder="First Name"
              {...register("firstName")}
              className={`h-10 ${errors.firstName ? "border-red-400" : ""}`}
            />
          </FieldGroup>
          <FieldGroup label="Last Name" error={errors.lastName}>
            <Input
              placeholder="Last Name"
              {...register("lastName")}
              className={`h-10 ${errors.lastName ? "border-red-400" : ""}`}
            />
          </FieldGroup>
        </div>

        <div className={compact ? "space-y-3" : "grid gap-4 sm:grid-cols-2"}>
          <FieldGroup label="Phone Number" error={errors.phone}>
            <Input
              placeholder="(555) 555-5555"
              type="tel"
              {...register("phone")}
              className={`h-10 ${errors.phone ? "border-red-400" : ""}`}
            />
          </FieldGroup>
          <FieldGroup label="Email Address" error={errors.email}>
            <Input
              placeholder="you@email.com"
              type="email"
              {...register("email")}
              className={`h-10 ${errors.email ? "border-red-400" : ""}`}
            />
          </FieldGroup>
        </div>

        {/* ── Section: Case Details ── */}
        {!compact && (
          <div className="border-t border-gray-100 pt-5">
            <p className="text-xs font-bold uppercase tracking-widest text-gray-400">
              Case Details
            </p>
          </div>
        )}

        <div className={compact ? "space-y-3" : "grid gap-4 sm:grid-cols-2"}>
          <FieldGroup label="Type of Case" error={errors.caseType}>
            <select
              {...register("caseType")}
              className={`${selectClasses} ${errors.caseType ? "border-red-400" : ""}`}
            >
              {caseTypes.map((ct) => (
                <option key={ct.value} value={ct.value}>
                  {ct.label}
                </option>
              ))}
            </select>
          </FieldGroup>
          <FieldGroup label="Preferred Contact Method">
            <select {...register("preferredContact")} className={selectClasses}>
              <option value="either">No Preference</option>
              <option value="phone">Phone Call</option>
              <option value="email">Email</option>
              <option value="text">Text Message</option>
            </select>
          </FieldGroup>
        </div>

        {!compact && (
          <div className="grid gap-4 sm:grid-cols-2">
            <FieldGroup label="Best Time to Reach You">
              <select {...register("bestTimeToCall")} className={selectClasses}>
                <option value="">Any Time</option>
                <option value="morning">Morning (9 AM – 12 PM)</option>
                <option value="afternoon">Afternoon (12 PM – 5 PM)</option>
                <option value="evening">Evening (5 PM – 8 PM)</option>
              </select>
            </FieldGroup>
            <FieldGroup label="How Did You Hear About Us?">
              <select {...register("howDidYouHear")} className={selectClasses}>
                {referralSources.map((rs) => (
                  <option key={rs.value} value={rs.value}>
                    {rs.label}
                  </option>
                ))}
              </select>
            </FieldGroup>
          </div>
        )}

        {!compact && (
          <FieldGroup label="Are You a Current Client?">
            <div className="flex gap-4">
              {[
                { value: "no", label: "No, I am a new client" },
                { value: "yes", label: "Yes, I have an existing case" },
              ].map((opt) => (
                <label key={opt.value} className="flex items-center gap-2 text-sm text-gray-700">
                  <input
                    type="radio"
                    value={opt.value}
                    {...register("isExistingClient")}
                    className="h-4 w-4 border-gray-300 text-blue-primary focus:ring-blue-primary"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </FieldGroup>
        )}

        <FieldGroup label="Describe Your Case" error={errors.message}>
          <Textarea
            placeholder="Please provide as much detail as possible about your situation, including when the incident occurred, injuries sustained, and any other relevant information..."
            rows={compact ? 3 : 5}
            {...register("message")}
            className={errors.message ? "border-red-400" : ""}
          />
        </FieldGroup>

        {/* ── Consent ── */}
        <FieldGroup error={errors.consent}>
          <label className="flex items-start gap-3">
            <input
              type="checkbox"
              {...register("consent")}
              className="mt-1 h-4 w-4 rounded border-gray-300 text-blue-primary focus:ring-blue-primary"
            />
            <span className="text-xs leading-relaxed text-gray-500">
              By submitting this form, I consent to being contacted by Babin
              Law, LLC regarding my inquiry. I understand that submitting this
              form does not create an attorney-client relationship.
            </span>
          </label>
        </FieldGroup>

        {status === "error" && (
          <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-sm text-red-600">
            Something went wrong. Please try again or call us directly at{" "}
            <a href={`tel:${primaryPhoneTel}`} className="font-bold underline">
              {primaryPhone}
            </a>
            .
          </div>
        )}

        <Button
          type="submit"
          disabled={status === "submitting"}
          className="w-full"
          size="lg"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Submitting Your Inquiry...
            </>
          ) : (
            <>
              <Send className="mr-2 h-4 w-4" />
              Submit Free Case Evaluation
            </>
          )}
        </Button>

        <p className="text-center text-[0.65rem] text-gray-400">
          Your information is encrypted and will never be shared. All
          consultations are 100% free and confidential.
        </p>
      </form>
    </div>
  );
}

function FieldGroup({ label, error, children }) {
  return (
    <div>
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      {children}
      {error && (
        <p className="mt-1 text-xs text-red-500">{error.message}</p>
      )}
    </div>
  );
}
