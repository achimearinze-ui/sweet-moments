import { createFileRoute } from '@tanstack/react-router';
import { AboutPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/about')({head:()=>pageHead('About Us','Our story and youth leadership focus.','/about'),component:AboutPage});
