import { createFileRoute } from '@tanstack/react-router';
import { ImpactPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/impact')({head:()=>pageHead('Our Impact','Verified historical school engagement milestones.','/impact'),component:ImpactPage});
