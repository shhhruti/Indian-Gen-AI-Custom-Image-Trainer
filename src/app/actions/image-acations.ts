/* eslint-disable @typescript-eslint/no-explicit-any */
'use server'
import { z } from "zod"
//import { ImageGenerationFormSchema } from "@/components/image-generation/Configurations";
import Replicate from "replicate";
// import { createClient } from "@/lib/supabase/server";
// import { Database } from '@datatypes.types';
// import { imageMeta } from "image-meta";
// import { randomUUID } from "crypto";
// import { getCredits } from "./credit-actions";


const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
  useFileOutput: false,
});

eeinterface ImageResponse{
    error: string | null;
    success: boolean;
    data: any | null;
}

export async function generateImageAction(input: (z.infer<typeof ImageGenerationFormSchema>)):Promise<ImageResponse> {

    if(!process.env.REPLICATE_API_TOKEN){
        return {
            error: "The replicate api token is not set!",
            success: false,
            data: null
        }
    }

    const {data:  credits} = await getCredits();
    if(!credits?.image_generation_count || credits.image_generation_count <= 0){
        return {
            error: "No credits available",
            success: false,
            data: null,
        }
    }

    const modelInput = input.model.startsWith(`${process.env.NEXT_PUBLIC_REPLICATE_USER_NAME}/`) ? 
    {
        model: 'dev',
        prompt: input.prompt,
        lora_scale: 1,
        guidance: input.guidance,
        num_outputs: input.num_outputs,
        aspect_ratio: input.aspect_ratio,
        output_format: input.output_format,
        output_quality: input.output_quality,
        prompt_strength: 0.8,
        num_inference_steps: input.num_inference_steps,
        extra_lora_scale: 0,
    }
    
    : {
        prompt: input.prompt,
        go_fast: true,
        guidance: input.guidance,
        megapixels: "1",
        num_outputs: input.num_outputs,
        aspect_ratio: input.aspect_ratio,
        output_format: input.output_format,
        output_quality: input.output_quality,
        prompt_strength: 0.8,
        num_inference_steps: input.num_inference_steps
      };
      
      try{
        const output = await replicate.run(input.model as `${string}/${string}`, { input: modelInput })
        return {
            error: null,
            success: true,
            data: output
        }
      }catch(error: any){
        return {
            error: error.message || "Failed to generate image!",
            success: false,
            data: null
        }
      }
}
