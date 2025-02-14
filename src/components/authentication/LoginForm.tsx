"use client";
import React, { useId, useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import cn from "classnames"; // Utility for conditional classNames
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { login } from "@/app/actions/auth-actions"; // Removed unused signup import
import { useRouter } from "next/navigation";

// Define validation schema using Zod
const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters long",
  }),
});

function LoginForm({ className }: { className?: string }) {
  // Initialize form using react-hook-form and Zod resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [loading, setLoading] = useState(false);
  const toastId = useId();
  const router = useRouter();

  // Handle form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setLoading(true);
    toast.loading("Logging in, please wait...", { id: toastId });

    // Create FormData and append form values
    const formData = new FormData();
    formData.append("email", values.email);
    formData.append("password", values.password);

    try {
      await login(formData);

      // Show success toast and navigate to dashboard
      toast.success("Logged in successfully!", { id: toastId });
      setLoading(false);
      router.push("/dashboard");
    } catch (error) {
      // Show error toast if login fails
      toast.error(String(error), { id: toastId });
      setLoading(false);
    }
  }

  return (
    <div className={cn("grid gap-6", className)}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          {/* Email Input Field */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="name@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password Input Field */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" placeholder="Enter your password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Submit Button */}
          <Button className="w-full" type="submit" disabled={loading}>
            {loading && <Loader2 className="animate-spin mr-2 h-4" />} Login
          </Button>
        </form>
      </Form>
    </div>
  );
}

export default LoginForm;
