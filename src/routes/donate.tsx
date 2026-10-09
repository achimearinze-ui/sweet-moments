import { createFileRoute } from '@tanstack/react-router';
import { DonatePage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/donate')({head:()=>pageHead('Support Our Work','Support youth leadership and explore donation options.','/donate'),component:DonatePage});
