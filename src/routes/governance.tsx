import { createFileRoute } from '@tanstack/react-router';
import { GovernancePage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/governance')({head:()=>pageHead('Governance and Safeguarding','Governance, safeguarding and accountability information.','/governance'),component:GovernancePage});
