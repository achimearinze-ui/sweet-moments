import { z } from 'zod';
export const enquirySchema = z.object({
 name: z.string().trim().min(2,'Please enter your name.').max(100),
 email: z.string().trim().email('Please enter a valid email address.').max(254),
 audience: z.enum(['general','partner','volunteer','school','young-person','media','support']),
 message: z.string().trim().min(10,'Please tell us a little more (at least 10 characters).').max(3000),
 consent: z.literal(true, { errorMap: () => ({ message: 'Please agree to the enquiry privacy notice.' }) }),
 website: z.string().max(0,'Unable to submit this enquiry.').default(''),
});
