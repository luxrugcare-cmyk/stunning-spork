"use client";

import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion, AnimatePresence } from "framer-motion";
import {
  Hotel,
  Building2,
  Heart,
  GraduationCap,
  Drama,
  Home,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Send,
  Loader2,
  User,
  type LucideIcon,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FacebookIcon,
  InstagramIcon,
  YoutubeIcon,
  LinkedinIcon,
  TiktokIcon,
  PinterestIcon,
  TwitterIcon,
} from "@/components/social-icons";
import { SITE_CONFIG, SECTORS, AREAS } from "@/lib/site-data";

// ── Icon resolver ──
const SECTOR_ICON_MAP: Record<string, LucideIcon> = {
  Hotel,
  Building2,
  Heart,
  GraduationCap,
  Drama,
  Home,
};

const SOCIAL_LINKS = [
  { icon: FacebookIcon, href: SITE_CONFIG.social.facebook, label: "Facebook" },
  { icon: InstagramIcon, href: SITE_CONFIG.social.instagram, label: "Instagram" },
  { icon: YoutubeIcon, href: SITE_CONFIG.social.youtube, label: "YouTube" },
  { icon: LinkedinIcon, href: SITE_CONFIG.social.linkedin, label: "LinkedIn" },
  { icon: TiktokIcon, href: SITE_CONFIG.social.tiktok, label: "TikTok" },
  { icon: PinterestIcon, href: SITE_CONFIG.social.pinterest, label: "Pinterest" },
  { icon: TwitterIcon, href: SITE_CONFIG.social.twitter, label: "X / Twitter" },
];

// ── Zod schema ──
const contactSchema = z.object({
  sector: z.string().min(1, "Please select a sector"),
  area: z.string().min(1, "Please select your area"),
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(7, "Please enter a valid phone number"),
  propertyType: z.string().min(1, "Please select a property type"),
  windowCount: z.string().min(1, "Please select number of windows"),
  notes: z.string().optional(),
  popiaConsent: z.literal(true, {
    errorMap: () => ({ message: "You must consent to proceed" }),
  }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const PROPERTY_TYPES = [
  "Private Home",
  "Townhouse / Complex",
  "Estate / Large Property",
  "Hotel / B&B",
  "Office Building",
  "Medical Facility",
  "School / University",
  "Theatre / Venue",
  "Other",
];

const WINDOW_COUNTS = [
  "1–5",
  "6–10",
  "11–20",
  "21–50",
  "50+",
];

// ── Step labels ──
const STEP_LABELS = ["Your Sector", "Your Area", "Your Details", "Confirmation"];

// ── Slide animation variants ──
const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? 80 : -80,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    x: direction > 0 ? -80 : 80,
    opacity: 0,
  }),
};

// ── Component ──
export default function ContactSection() {
  const [currentStep, setCurrentStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      sector: "",
      area: "",
      name: "",
      email: "",
      phone: "",
      propertyType: "",
      windowCount: "",
      notes: "",
      popiaConsent: undefined as unknown as true,
    },
    mode: "onChange",
  });

  const { control, trigger, watch, formState: { errors }, getValues } = form;
  const watchedValues = watch();

  // ── Step validation ──
  const validateStep = async (step: number): Promise<boolean> => {
    switch (step) {
      case 0:
        return trigger("sector");
      case 1:
        return trigger("area");
      case 2:
        return trigger(["name", "email", "phone", "propertyType", "windowCount"]);
      case 3:
        return trigger("popiaConsent");
      default:
        return true;
    }
  };

  const goNext = async () => {
    const isValid = await validateStep(currentStep);
    if (isValid) {
      setDirection(1);
      setCurrentStep((prev) => Math.min(prev + 1, 3));
    }
  };

  const goBack = () => {
    setDirection(-1);
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const onSubmit = async () => {
    const isValid = await validateStep(3);
    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const data = getValues();
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Failed to submit. Please try again.");
      }

      setSubmitSuccess(true);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong");
    } finally {
      setIsSubmitting(false);
    }
  };

  // ── Helper: find sector/area label from id ──
  const getSectorLabel = (id: string) => SECTORS.find((s) => s.id === id)?.title ?? id;
  const getAreaLabel = (id: string) => AREAS.find((a) => a.id === id)?.title ?? id;

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative w-full bg-brand-surface-ivory py-20 md:py-28"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ── Heading ── */}
        <div className="mb-14 text-center">
          <h2
            id="contact-heading"
            className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl"
          >
            Get Your Free Assessment
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-brand-bronze" aria-hidden="true" />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground">
            Book a free, no-obligation assessment with one of our certified technicians.
          </p>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid gap-8 lg:grid-cols-3">
          {/* ── Form (2/3) ── */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card shadow-md">
              <CardHeader className="border-b border-border pb-4">
                {/* ── Progress bar ── */}
                <div className="mb-2 flex items-center justify-between text-sm text-muted-foreground">
                  <span>Step {currentStep + 1} of 4</span>
                  <span className="font-medium text-brand-emerald">
                    {STEP_LABELS[currentStep]}
                  </span>
                </div>
                <div className="relative flex gap-2" aria-hidden="true">
                  {STEP_LABELS.map((_, idx) => (
                    <div
                      key={idx}
                      className={`h-2 flex-1 rounded-full transition-colors duration-300 ${
                        idx <= currentStep
                          ? "bg-brand-emerald"
                          : "bg-brand-surface-dim"
                      }`}
                    />
                  ))}
                </div>
              </CardHeader>

              <CardContent className="min-h-[340px] pt-6">
                {submitSuccess ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <CheckCircle2 className="mb-4 h-16 w-16 text-brand-emerald" />
                    <h3 className="mb-2 text-2xl font-bold text-foreground">
                      Thank You!
                    </h3>
                    <p className="max-w-md text-muted-foreground">
                      Your assessment request has been received. Kathy or a member of our team will contact you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <AnimatePresence mode="wait" custom={direction}>
                    <motion.div
                      key={currentStep}
                      custom={direction}
                      variants={slideVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      {/* ── Step 1: Your Sector ── */}
                      {currentStep === 0 && (
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">
                            Which sector best describes your property?
                          </h3>
                          <p className="mb-6 text-sm text-muted-foreground">
                            Select the option that best matches your needs.
                          </p>
                          <Controller
                            name="sector"
                            control={control}
                            render={({ field }) => (
                              <RadioGroup
                                value={field.value}
                                onValueChange={field.onChange}
                                className="grid gap-3 sm:grid-cols-2"
                              >
                                {SECTORS.map((sector) => {
                                  const Icon = SECTOR_ICON_MAP[sector.icon] ?? Home;
                                  const isSelected = field.value === sector.id;
                                  return (
                                    <label
                                      key={sector.id}
                                      className={`flex cursor-pointer items-start gap-3 rounded-lg border p-4 transition-all ${
                                        isSelected
                                          ? "border-brand-emerald bg-brand-emerald/5 shadow-sm"
                                          : "border-border bg-card hover:border-brand-bronze/40 hover:shadow-sm"
                                      }`}
                                    >
                                      <RadioGroupItem
                                        value={sector.id}
                                        className="mt-0.5 shrink-0"
                                      />
                                      <div className="flex items-start gap-3">
                                        <div
                                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${
                                            isSelected
                                              ? "bg-brand-emerald/15"
                                              : "bg-muted"
                                          }`}
                                        >
                                          <Icon
                                            className={`h-5 w-5 ${
                                              isSelected
                                                ? "text-brand-emerald"
                                                : "text-muted-foreground"
                                            }`}
                                          />
                                        </div>
                                        <div>
                                          <span className="text-sm font-medium text-foreground">
                                            {sector.title}
                                          </span>
                                          <p className="mt-0.5 text-xs text-muted-foreground line-clamp-2">
                                            {sector.shortDesc}
                                          </p>
                                        </div>
                                      </div>
                                    </label>
                                  );
                                })}
                              </RadioGroup>
                            )}
                          />
                          {errors.sector && (
                            <p className="mt-3 text-sm text-destructive">{errors.sector.message}</p>
                          )}
                        </div>
                      )}

                      {/* ── Step 2: Your Area ── */}
                      {currentStep === 1 && (
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">
                            Which area are you located in?
                          </h3>
                          <p className="mb-6 text-sm text-muted-foreground">
                            Select the region closest to your property.
                          </p>
                          <Controller
                            name="area"
                            control={control}
                            render={({ field }) => (
                              <div className="space-y-4">
                                <Select
                                  value={field.value}
                                  onValueChange={field.onChange}
                                >
                                  <SelectTrigger className="w-full">
                                    <SelectValue placeholder="Select your area" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {AREAS.map((area) => (
                                      <SelectItem key={area.id} value={area.id}>
                                        {area.title}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>

                                {/* Show suburbs for selected area */}
                                {field.value && (
                                  <div className="rounded-lg border border-border bg-muted/50 p-4">
                                    <p className="mb-2 text-sm font-medium text-foreground">
                                      Suburbs served in {getAreaLabel(field.value)}:
                                    </p>
                                    <div className="flex flex-wrap gap-1.5">
                                      {AREAS.find((a) => a.id === field.value)?.suburbs.map((suburb) => (
                                        <span
                                          key={suburb}
                                          className="inline-block rounded-md bg-brand-emerald/8 px-2 py-0.5 text-xs font-medium text-brand-emerald"
                                        >
                                          {suburb}
                                        </span>
                                      ))}
                                    </div>
                                    <p className="mt-2 text-xs text-muted-foreground">
                                      {AREAS.find((a) => a.id === field.value)?.focus}
                                    </p>
                                  </div>
                                )}
                              </div>
                            )}
                          />
                          {errors.area && (
                            <p className="mt-3 text-sm text-destructive">{errors.area.message}</p>
                          )}
                        </div>
                      )}

                      {/* ── Step 3: Your Details ── */}
                      {currentStep === 2 && (
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">
                            Tell us about yourself
                          </h3>
                          <p className="mb-6 text-sm text-muted-foreground">
                            We&apos;ll use this to arrange your free assessment.
                          </p>
                          <div className="grid gap-5 sm:grid-cols-2">
                            {/* Name */}
                            <div className="space-y-2">
                              <Label htmlFor="contact-name">
                                Full Name <span className="text-destructive">*</span>
                              </Label>
                              <div className="relative">
                                <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                  id="contact-name"
                                  placeholder="e.g. Sarah Mokoena"
                                  className="pl-9"
                                  {...form.register("name")}
                                  aria-invalid={!!errors.name}
                                />
                              </div>
                              {errors.name && (
                                <p className="text-xs text-destructive">{errors.name.message}</p>
                              )}
                            </div>

                            {/* Email */}
                            <div className="space-y-2">
                              <Label htmlFor="contact-email">
                                Email Address <span className="text-destructive">*</span>
                              </Label>
                              <div className="relative">
                                <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                  id="contact-email"
                                  type="email"
                                  placeholder="e.g. sarah@company.co.za"
                                  className="pl-9"
                                  {...form.register("email")}
                                  aria-invalid={!!errors.email}
                                />
                              </div>
                              {errors.email && (
                                <p className="text-xs text-destructive">{errors.email.message}</p>
                              )}
                            </div>

                            {/* Phone */}
                            <div className="space-y-2">
                              <Label htmlFor="contact-phone">
                                Phone Number <span className="text-destructive">*</span>
                              </Label>
                              <div className="relative">
                                <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                                <Input
                                  id="contact-phone"
                                  type="tel"
                                  placeholder="e.g. 072 123 4567"
                                  className="pl-9"
                                  {...form.register("phone")}
                                  aria-invalid={!!errors.phone}
                                />
                              </div>
                              {errors.phone && (
                                <p className="text-xs text-destructive">{errors.phone.message}</p>
                              )}
                            </div>

                            {/* Property Type */}
                            <div className="space-y-2">
                              <Label>
                                Property Type <span className="text-destructive">*</span>
                              </Label>
                              <Controller
                                name="propertyType"
                                control={control}
                                render={({ field }) => (
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="Select type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {PROPERTY_TYPES.map((type) => (
                                        <SelectItem key={type} value={type}>
                                          {type}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              {errors.propertyType && (
                                <p className="text-xs text-destructive">{errors.propertyType.message}</p>
                              )}
                            </div>

                            {/* Window Count */}
                            <div className="space-y-2 sm:col-span-2">
                              <Label>
                                Number of Windows <span className="text-destructive">*</span>
                              </Label>
                              <Controller
                                name="windowCount"
                                control={control}
                                render={({ field }) => (
                                  <Select
                                    value={field.value}
                                    onValueChange={field.onChange}
                                  >
                                    <SelectTrigger className="w-full">
                                      <SelectValue placeholder="How many windows?" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {WINDOW_COUNTS.map((count) => (
                                        <SelectItem key={count} value={count}>
                                          {count} windows
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                )}
                              />
                              {errors.windowCount && (
                                <p className="text-xs text-destructive">{errors.windowCount.message}</p>
                              )}
                            </div>

                            {/* Notes */}
                            <div className="space-y-2 sm:col-span-2">
                              <Label htmlFor="contact-notes">Additional Notes</Label>
                              <Textarea
                                id="contact-notes"
                                placeholder="Any special requirements, preferred times, or questions..."
                                className="min-h-[80px]"
                                {...form.register("notes")}
                              />
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── Step 4: Confirmation ── */}
                      {currentStep === 3 && (
                        <div>
                          <h3 className="mb-1 text-lg font-semibold text-foreground">
                            Review &amp; Confirm
                          </h3>
                          <p className="mb-6 text-sm text-muted-foreground">
                            Please review your details before submitting.
                          </p>

                          {/* Summary card */}
                          <div className="rounded-lg border border-border bg-muted/30 p-5">
                            <div className="grid gap-4 text-sm sm:grid-cols-2">
                              <div>
                                <span className="font-medium text-muted-foreground">Sector</span>
                                <p className="mt-0.5 text-foreground">{getSectorLabel(watchedValues.sector)}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">Area</span>
                                <p className="mt-0.5 text-foreground">{getAreaLabel(watchedValues.area)}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">Name</span>
                                <p className="mt-0.5 text-foreground">{watchedValues.name}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">Email</span>
                                <p className="mt-0.5 text-foreground">{watchedValues.email}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">Phone</span>
                                <p className="mt-0.5 text-foreground">{watchedValues.phone}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">Property Type</span>
                                <p className="mt-0.5 text-foreground">{watchedValues.propertyType}</p>
                              </div>
                              <div>
                                <span className="font-medium text-muted-foreground">Windows</span>
                                <p className="mt-0.5 text-foreground">{watchedValues.windowCount}</p>
                              </div>
                              {watchedValues.notes && (
                                <div className="sm:col-span-2">
                                  <span className="font-medium text-muted-foreground">Notes</span>
                                  <p className="mt-0.5 text-foreground">{watchedValues.notes}</p>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* POPIA Consent */}
                          <div className="mt-6 rounded-lg border border-border p-4">
                            <div className="flex items-start gap-3">
                              <Controller
                                name="popiaConsent"
                                control={control}
                                render={({ field }) => (
                                  <Checkbox
                                    id="popia-consent"
                                    checked={field.value as boolean}
                                    onCheckedChange={field.onChange}
                                    className="mt-0.5"
                                    aria-invalid={!!errors.popiaConsent}
                                  />
                                )}
                              />
                              <Label
                                htmlFor="popia-consent"
                                className="text-sm leading-relaxed text-muted-foreground cursor-pointer"
                              >
                                I consent to On The Spot Curtain Cleaning Specialists collecting and processing my personal information in accordance with the Protection of Personal Information Act (POPIA). My data will only be used to respond to my enquiry and will not be shared with third parties.
                              </Label>
                            </div>
                            {errors.popiaConsent && (
                              <p className="ml-7 mt-2 text-xs text-destructive">
                                {errors.popiaConsent.message}
                              </p>
                            )}
                          </div>

                          {/* Submit error */}
                          {submitError && (
                            <div className="mt-4 rounded-md bg-destructive/10 p-3 text-sm text-destructive">
                              {submitError}
                            </div>
                          )}
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>
                )}

                {/* ── Navigation Buttons ── */}
                {!submitSuccess && (
                  <div className="mt-8 flex items-center justify-between border-t border-border pt-4">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={goBack}
                      disabled={currentStep === 0}
                      className="gap-1"
                    >
                      <ChevronLeft className="h-4 w-4" />
                      Back
                    </Button>

                    {currentStep < 3 ? (
                      <Button
                        type="button"
                        onClick={goNext}
                        className="gap-1 bg-brand-emerald text-white hover:bg-brand-emerald/90"
                      >
                        Next
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    ) : (
                      <Button
                        type="button"
                        onClick={onSubmit}
                        disabled={isSubmitting}
                        className="gap-2 bg-brand-bronze text-white hover:bg-brand-bronze/90"
                      >
                        {isSubmitting ? (
                          <>
                            <Loader2 className="h-4 w-4 animate-spin" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Send className="h-4 w-4" />
                            Submit Request
                          </>
                        )}
                      </Button>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* ── Contact Info Sidebar (1/3) ── */}
          <div className="lg:col-span-1">
            <Card className="border-border bg-card shadow-md">
              <CardContent className="p-6">
                {/* Director */}
                <div className="mb-6 text-center">
                  <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-brand-emerald/10">
                    <User className="h-8 w-8 text-brand-emerald" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    Kathy Dunlop
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Managing Director
                  </p>
                </div>

                {/* Contact details */}
                <div className="space-y-3">
                  {/* Phone */}
                  <a
                    href={`tel:${SITE_CONFIG.phoneLink}`}
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-brand-emerald/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10">
                      <Phone className="h-4 w-4 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Phone</p>
                      <p className="text-sm font-medium text-foreground">{SITE_CONFIG.phone}</p>
                    </div>
                  </a>

                  {/* Office */}
                  <a
                    href={`tel:${SITE_CONFIG.officePhoneLink}`}
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-brand-emerald/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10">
                      <Phone className="h-4 w-4 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Office</p>
                      <p className="text-sm font-medium text-foreground">{SITE_CONFIG.officePhone}</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href={`mailto:${SITE_CONFIG.email}`}
                    className="flex items-center gap-3 rounded-lg p-2 transition-colors hover:bg-brand-emerald/5"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10">
                      <Mail className="h-4 w-4 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium text-foreground">{SITE_CONFIG.email}</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="flex items-start gap-3 rounded-lg p-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10">
                      <MapPin className="h-4 w-4 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Address</p>
                      <p className="text-sm font-medium text-foreground">{SITE_CONFIG.address}</p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-3 rounded-lg p-2">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand-emerald/10">
                      <Clock className="h-4 w-4 text-brand-emerald" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Operating Hours</p>
                      <p className="text-sm font-medium text-foreground">{SITE_CONFIG.hours.weekday}</p>
                      <p className="text-sm font-medium text-foreground">{SITE_CONFIG.hours.saturday}</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-border" />

                {/* Social icons */}
                <div>
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    Follow Us
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SOCIAL_LINKS.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:border-brand-bronze hover:bg-brand-bronze/10 hover:text-brand-bronze"
                      >
                        <social.icon className="h-4 w-4" />
                      </a>
                    ))}
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-border" />

                {/* WhatsApp CTA */}
                <a
                  href={SITE_CONFIG.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#25D366] px-4 py-3 text-sm font-semibold text-white shadow-md transition-all hover:bg-[#20bd5a] hover:shadow-lg"
                >
                  <MessageCircle className="h-5 w-5" />
                  WhatsApp Us
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
