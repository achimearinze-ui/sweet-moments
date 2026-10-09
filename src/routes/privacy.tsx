import { createFileRoute } from '@tanstack/react-router';
import { PolicyPage, policies } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/privacy')({head:()=>pageHead(policies.privacy.name,'Draft policy information and approval status for DS-A Foundation.','/privacy'),component:()=> <PolicyPage type="privacy"/>});
