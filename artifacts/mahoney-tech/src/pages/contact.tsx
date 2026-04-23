import { Layout } from "@/components/layout/Layout";
import { Tag } from "@/components/ui/tag";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, User, Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contact: z.string().min(5, "Phone or Email is required"),
  service: z.string().min(1, "Please select a service"),
  message: z.string().min(10, "Please provide a brief description"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const { toast } = useToast();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      contact: "",
      service: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const err = await res.json().catch(() => ({})) as { error?: string };
        throw new Error(err.error || "Failed to send message.");
      }

      const result = await res.json() as { clientConfirmationSent?: boolean };
      toast({
        title: "Message Sent!",
        description: result.clientConfirmationSent
          ? "Kylar will follow up shortly. A confirmation has been sent to your email."
          : "Kylar will follow up shortly by phone — remote support available 24/7.",
      });
      form.reset();
    } catch (err) {
      toast({
        title: "Something went wrong",
        description: err instanceof Error ? err.message : "Please try again or call 409-996-3178.",
        variant: "destructive",
      });
    }
  };

  return (
    <Layout>
      {/* HEADER */}
      <section className="bg-rust py-20 px-[5%] border-b-[3px] border-ink">
        <div className="max-w-[1200px] mx-auto text-center md:text-left">
          <Tag variant="white" className="mb-6 border-white/40 text-white/80">Reach Out</Tag>
          <h1 className="font-display text-[clamp(3.5rem,8vw,6rem)] leading-[0.92] tracking-[0.02em] text-white mb-4">
            GET IN<br />TOUCH
          </h1>
          <p className="font-mono text-[0.8rem] text-white/70 tracking-[0.1em] uppercase">
            Call &middot; Text &middot; Or Fill Out The Form Below
          </p>
        </div>
      </section>

      {/* CONTACT LAYOUT */}
      <section className="py-20 px-[5%] max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[2px] bg-line border-2 border-line mb-20 shadow-xl">

          {/* Info Side */}
          <div className="bg-bg2 p-8 md:p-12">
            <Tag variant="rust" className="mb-10">Contact Info</Tag>

            <div className="flex flex-col gap-6">
              <div className="flex gap-6 items-start pb-6 border-b border-line">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-1">Phone / Text</div>
                  <div className="font-display text-[1.6rem] tracking-[0.02em] leading-none text-white hover:text-rust transition-colors">
                    <a href="tel:4099963178">409-996-3178</a>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start pb-6 border-b border-line">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-1">Service Area</div>
                  <div className="font-display text-[1.6rem] tracking-[0.02em] leading-none text-white">
                    Galveston, TX
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start pb-6 border-b border-line">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-1">Specialist</div>
                  <div className="font-display text-[1.6rem] tracking-[0.02em] leading-none text-white">
                    Kylar Mahoney
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-rust flex items-center justify-center shrink-0 text-white mt-1">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-mono text-[0.6rem] tracking-[0.15em] uppercase text-steel mb-2">Availability</div>
                  <div className="font-sans font-semibold text-[1.1rem] leading-[1.4] text-white">
                    Remote: 24/7<br />
                    <span className="text-steel font-normal">On-Site: Call Ahead</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side */}
          <div className="bg-[#070d1a] p-8 md:p-12">
            <Tag className="mb-10 text-rust2 border-rust2">Send a Message</Tag>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">

                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-steel">Your Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="John Smith"
                          className="bg-[#0d1929] border-line text-white font-mono text-[0.85rem] focus:border-rust rounded-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-rust2 text-[0.75rem]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-steel">Phone or Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="409-555-0100 or you@example.com"
                          className="bg-[#0d1929] border-line text-white font-mono text-[0.85rem] focus:border-rust rounded-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-rust2 text-[0.75rem]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="service"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-steel">Service Needed</FormLabel>
                      <FormControl>
                        <select
                          className="w-full h-10 bg-[#0d1929] border border-line text-white font-mono text-[0.85rem] px-3 focus:outline-none focus:border-rust rounded-none"
                          {...field}
                        >
                          <option value="">Select a service...</option>
                          <option value="Computer & Laptop Troubleshooting">Computer &amp; Laptop Troubleshooting</option>
                          <option value="Wi-Fi & Network Issues">Wi-Fi &amp; Network Issues</option>
                          <option value="Printer Setup & Fixes">Printer Setup &amp; Fixes</option>
                          <option value="Software & Updates">Software &amp; Updates</option>
                          <option value="Email & Account Help">Email &amp; Account Help</option>
                          <option value="POS & Office Systems">POS &amp; Office Systems</option>
                          <option value="Cybersecurity">Cybersecurity</option>
                          <option value="Other">Other</option>
                        </select>
                      </FormControl>
                      <FormMessage className="text-rust2 text-[0.75rem]" />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem className="space-y-2">
                      <FormLabel className="font-mono text-[0.62rem] tracking-[0.15em] uppercase text-steel">Describe Your Issue</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us what's going on..."
                          rows={4}
                          className="bg-[#0d1929] border-line text-white font-mono text-[0.85rem] focus:border-rust rounded-none resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage className="text-rust2 text-[0.75rem]" />
                    </FormItem>
                  )}
                />

                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                  {form.formState.isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </Form>
          </div>
        </div>
      </section>
    </Layout>
  );
}
