import { useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { Link } from '@tanstack/react-router';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { Button } from './ui/button';
import { enquirySchema } from '@/lib/enquiry-schema';
import { submitEnquiry } from '@/lib/enquiries.functions';

export function EnquiryForm({ audience='general' }:{audience?:string}) {
 const submit=useServerFn(submitEnquiry);const [busy,setBusy]=useState(false);const [status,setStatus]=useState('');const [success,setSuccess]=useState(false);
 return <form className="enquiry-form" onSubmit={async e=>{e.preventDefault();const form=e.currentTarget;const fd=new FormData(form);const parsed=enquirySchema.safeParse({name:fd.get('name'),email:fd.get('email'),audience:fd.get('audience'),message:fd.get('message'),consent:fd.get('consent')==='on',website:fd.get('website')});if(!parsed.success){setStatus(parsed.error.issues[0]?.message??'Please check your details.');return;}setBusy(true);setSuccess(false);setStatus('');try{const result=await submit({data:parsed.data});setStatus(result.message);setSuccess(result.ok);if(result.ok)form.reset();}catch{setStatus('Your enquiry could not be saved. Please try again later.');}finally{setBusy(false);}}}>
 <div className="notice">For your privacy, please do not include a child’s full name, contact details or sensitive personal information. Young people should ask a parent, guardian or educator to enquire on their behalf.</div>
 <div className="form-row"><div><label className="form-label" htmlFor="enquiry-name">Your name</label><input className="field" id="enquiry-name" name="name" autoComplete="name" required minLength={2} maxLength={100}/></div><div><label className="form-label" htmlFor="enquiry-email">Email address</label><input className="field" type="email" id="enquiry-email" name="email" autoComplete="email" required maxLength={254}/></div></div>
 <div><label className="form-label" htmlFor="enquiry-audience">What would you like to discuss?</label><select className="field" id="enquiry-audience" name="audience" defaultValue={audience}><option value="general">General enquiry</option><option value="partner">Corporate, institutional or development partnership</option><option value="school">School or programme enquiry</option><option value="volunteer">Volunteering or mentoring</option><option value="support">Supporting a programme or donating</option><option value="young-person">Youth participation (parent/guardian enquiry)</option><option value="media">Press or media enquiry</option></select></div>
 <div><label className="form-label" htmlFor="enquiry-message">Your message</label><textarea className="field" id="enquiry-message" name="message" minLength={10} maxLength={3000} required/></div><div className="honeypot" aria-hidden="true"><label htmlFor="enquiry-website">Leave this empty</label><input id="enquiry-website" name="website" tabIndex={-1} autoComplete="off" defaultValue=""/></div>
 <label className="consent-label"><input type="checkbox" name="consent" required/><span>I agree that the foundation may securely store these details to respond to my enquiry. I have read the <Link to="/privacy" className="text-primary underline">enquiry privacy notice</Link>.</span></label>
 <div><Button type="submit" disabled={busy}>{busy?'Sending…':'Send Enquiry'}<ArrowRight/></Button></div><div className="form-status" role="status">{success&&<CheckCircle2 className="inline size-4 mr-2"/>}{status}</div>
 </form>;
}