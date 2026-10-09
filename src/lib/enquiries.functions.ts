import { createServerFn } from '@tanstack/react-start';
import { enquirySchema } from './enquiry-schema';
export const submitEnquiry = createServerFn({ method: 'POST' }).inputValidator(enquirySchema).handler(async ({ data }) => {
 const { createClient } = await import('@supabase/supabase-js');
 const url = process.env['SUPABASE_URL']; const key = process.env['SUPABASE_PUBLISHABLE_KEY'];
 if (!url || !key) return { ok: false, message: 'Enquiries are temporarily unavailable. Please try again later.' };
 const client = createClient(url,key,{ auth: { persistSession:false, autoRefreshToken:false }, global: { fetch: (input,init) => { const headers=new Headers(init?.headers); if(key.startsWith('sb_')) headers.delete('Authorization'); headers.set('apikey',key);return fetch(input,{...init,headers}); } } });
 const { website: _website, ...submission } = data;
 const { error } = await client.from('enquiries').insert(submission);
 if(error) { console.error('Enquiry storage failed',error.code);return { ok:false,message:'Your enquiry could not be saved. Please try again later.' }; }
 return { ok:true,message:'Your enquiry has been received securely. Thank you for getting in touch.' };
});
