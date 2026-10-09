import { createFileRoute } from '@tanstack/react-router';
import { PolicyPage, policies } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/safeguarding')({head:()=>pageHead(policies.safeguarding.name,'Draft policy information and approval status for DS-A Foundation.','/safeguarding'),component:()=> <PolicyPage type="safeguarding"/>});
