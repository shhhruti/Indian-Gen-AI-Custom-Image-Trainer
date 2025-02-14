"use server";
import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
// import { redirect } from "next/dist/server/api-utils";  // (You commented this out)
 
interface AuthResponse {
  error: string | null;
  success: boolean;
  data: unknown | null;
}

export async function signup(formData: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  if (!supabase || !supabase.auth) {
    return {
      error: "Supabase client is not initialized!",
      success: false,
      data: null,
    };
  }

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();
  const fullName = formData.get("full_name")?.toString();

  if (!email || !password || !fullName) {
    return {
      error: "All fields are required!",
      success: false,
      data: null,
    };
  }

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { full_name: fullName },
      },
    });

    return {
      error: error?.message || null,
      success: !error,
      data: data ?? null,
    };
  } catch (err) {
    return {
      error: `Unexpected error: ${(err as Error).message}`,
      success: false,
      data: null,
    };
  }
}

export async function login(formData: FormData): Promise<AuthResponse> {
  const supabase = await createClient();

  if (!supabase || !supabase.auth) {
    return {
      error: "Supabase client is not initialized!",
      success: false,
      data: null,
    };
  }

  const email = formData.get("email")?.toString();
  const password = formData.get("password")?.toString();

  if (!email || !password) {
    return {
      error: "All fields are required!",
      success: false,
      data: null,
    };
  }

  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    return {
      error: error?.message || null,
      success: !error,
      data: data ?? null,
    };
  } catch (err) {
    return {
      error: `Unexpected error at login: ${(err as Error).message}`,
      success: false,
      data: null,
    };
  }
}

export async function logout() {
  const supabase = await createClient();
  
  if (!supabase || !supabase.auth) {
    return;
  }

  await supabase.auth.signOut();
  redirect("/login");
}
