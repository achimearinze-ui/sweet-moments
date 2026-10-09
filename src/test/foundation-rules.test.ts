import { describe, it, expect } from 'vitest';
import { milestone } from '@/lib/foundation';
import { enquirySchema } from '@/lib/enquiry-schema';
describe('Foundation verified rules',()=>{
 it('records the historical expansion as 800 students across six schools within two years',()=>{expect(milestone.students).toBe(800);expect(milestone.schools).toBe(6);expect(milestone.period).toBe('within two years');});
 it('records establishment in 2022 and initial participation of 45',()=>{expect(milestone.established).toBe(2022);expect(milestone.initialStudents).toBe(45);});
 it('requires consent before collecting enquiry data',()=>{expect(enquirySchema.safeParse({name:'Test adult',email:'test@example.com',audience:'school',message:'A school partnership enquiry.',consent:false,website:''}).success).toBe(false);});
});
