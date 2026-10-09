import { createFileRoute } from '@tanstack/react-router';
import { PolicyPage, policies } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/accessibility')({head:()=>pageHead(policies.accessibility.name,'Draft policy information and approval status for DS-A Foundation.','/accessibility'),component:()=> <PolicyPage type="accessibility"/>});
