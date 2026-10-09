import { createFileRoute } from '@tanstack/react-router';
import { PolicyPage, policies } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/terms')({head:()=>pageHead(policies.terms.name,'Draft policy information and approval status for DS-A Foundation.','/terms'),component:()=> <PolicyPage type="terms"/>});
