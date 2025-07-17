import { z } from "zod";



export const createTourZodSchema = z.object({
    title: z.string(),
    description: z.string(),
    location: z.string(),
    costFrom: z.number(),
    startDate: z.string(),
    endDate: z.string(),
    tourType: z.string(), // <- changed here
    included: z.array(z.string()),
    excluded: z.array(z.string()),
    amenities: z.array(z.string()),
    tourPlan: z.array(z.string()),
    maxGuests: z.number(),
    minAge: z.number(),
    division: z.string(),
});

export const updateTourZodSchema = z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    location: z.string().optional(),
    costFrom: z.number().optional(),
    startDate: z.string().optional().optional(),
    endDate: z.string().optional().optional(),
    tourType: z.string().optional(),// <- changed here
    included: z.array(z.string()).optional(),
    excluded: z.array(z.string()).optional(),
    anenities: z.array(z.string()).optional(),
    tourPlan: z.array(z.string()).optional(),
    maxGuests: z.number().optional(),
    minAge: z.number().optional(),
});

export const createTourTypeZodSchema = z.object({
    name: z.string(),
});
