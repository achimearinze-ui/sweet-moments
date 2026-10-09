import { createFileRoute } from '@tanstack/react-router';
import { ProgrammesPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/programmes')({head:()=>pageHead('Our Programmes','Youth leadership, education, mentorship and community engagement.','/programmes'),component:ProgrammesPage});
