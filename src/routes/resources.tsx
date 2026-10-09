import { createFileRoute } from '@tanstack/react-router';
import { ResourcesPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/resources')({head:()=>pageHead('Resources and Reports','Foundation reports, programme resources and policy status.','/resources'),component:ResourcesPage});
