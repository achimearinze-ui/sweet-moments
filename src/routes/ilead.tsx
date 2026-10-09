import { createFileRoute } from '@tanstack/react-router';
import { IleadPage } from '@/components/content-pages';
import { pageHead } from '@/lib/foundation';
export const Route=createFileRoute('/ilead')({head:()=>pageHead('iLead Youth Leadership Programme','iChoose, iDo and iLead: values, responsible action and influence.','/ilead'),component:IleadPage});
