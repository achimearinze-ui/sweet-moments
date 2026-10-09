export const milestone = { students: 800, schools: 6, established: 2022, initialStudents: 45, period: 'within two years' } as const;
export const stages = [
 { name: 'iChoose', subtitle: 'Values and decisions', text: 'Discover your values, strengthen self-awareness and learn to make responsible decisions.' },
 { name: 'iDo', subtitle: 'Values into action', text: 'Turn values into action through accountability, everyday choices and responsible behaviour.' },
 { name: 'iLead', subtitle: 'Influence and responsibility', text: 'Develop the confidence to serve, influence positively and take responsibility.' },
] as const;
export const nav = [['Home','/'],['About Us','/about'],['Our Programmes','/programmes'],['Our Impact','/impact'],['Get Involved','/get-involved'],['Media Centre','/media'],['Resources','/resources'],['Contact Us','/contact']] as const;
export const stories = [
 { slug: 'leadership-in-schools', title: 'Leadership in the classroom', summary: 'A space for an approved story about school engagement and the iLead journey.' },
 { slug: 'community-and-partnership', title: 'Building connections for young people', summary: 'A space for an approved story about community engagement and partnerships.' },
 { slug: 'voices-of-young-leaders', title: 'The voices of a new generation', summary: 'A space for an approved youth leadership story, subject to consent and safeguarding review.' },
] as const;
export function pageHead(title: string, description: string, path: string) {
 const full = `${title} | DS-A Foundation`;
 return { meta: [{ title: full },{ name: 'description', content: description },{ property: 'og:title', content: full },{ property: 'og:description', content: description },{ property: 'og:type', content: 'website' },{ name: 'twitter:card', content: 'summary_large_image' }], links: [{ rel: 'canonical', href: `https://delightsafoundation.com${path}` }] };
}
