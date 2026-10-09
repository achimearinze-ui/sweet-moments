import { createFileRoute } from '@tanstack/react-router';
import { MediaPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/media')({head:()=>pageHead('Media Centre','Stories, news, events and gallery publication status.','/media'),component:MediaPage});
