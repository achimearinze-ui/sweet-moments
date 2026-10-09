import { createFileRoute } from '@tanstack/react-router';
import { InvolvedPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/get-involved')({head:()=>pageHead('Get Involved','Partner, volunteer, mentor or enquire about school engagement.','/get-involved'),component:InvolvedPage});
