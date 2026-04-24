export type ClassMode = 'online' | 'offline' | 'recorded'
export type ClassTone = 'rose' | 'pearl' | 'sand' | 'mauve'
export type UserRole = 'student' | 'admin'

export interface ClassItem {
  id: number
  slug: string
  title: string
  mode: ClassMode
  level: string
  price: string
  duration: string
  schedule: string
  location: string
  nextStart: string
  cohortSize: string
  mentor: string
  rating: string
  tone: ClassTone
  spotlight: boolean
  focusItems: string[]
  shortDescription: string
  description: string
  learnings: string[]
  includes: string[]
}

export interface Testimonial {
  name: string
  role: string
  quote: string
}

export interface Milestone {
  year: string
  title: string
  description: string
}

export const classModeLabels: Record<ClassMode, string> = {
  online: 'Online Live',
  offline: 'Studio Class',
  recorded: 'Recorded Course',
}

export const classes: ClassItem[] = [
  {
    id: 1,
    slug: 'designer-cakes-studio',
    title: 'Designer Cakes Studio',
    mode: 'offline',
    level: 'Beginner to Advanced',
    price: 'Rs. 14,500',
    duration: '6 weeks',
    schedule: 'Tue & Thu, 11:00 AM to 1:30 PM',
    location: 'Ahmedabad Studio',
    nextStart: '12 May 2026',
    cohortSize: '14 seats',
    mentor: 'Radha Patel',
    rating: '4.9/5',
    tone: 'rose',
    spotlight: true,
    focusItems: ['Layer cakes', 'Buttercream florals', 'Ganache finish'],
    shortDescription:
      'Layer cakes, buttercream florals, and bakery-style finishes.',
    description:
      'A hands-on cake class for soft sponges, smooth frosting, and premium celebration finishes.',
    learnings: [
      'Soft sponge and stable cake layers',
      'Buttercream smoothing and neat edges',
      'Simple floral piping and finish styling',
      'Bakery-style cake planning for birthdays',
    ],
    includes: [
      'Printed recipe journal',
      'Ingredient notes and substitutions',
      '1 bonus revision session',
      'Certificate of completion',
    ],
  },
  {
    id: 2,
    slug: 'pastries-and-dessert-jars-live',
    title: 'Pastries & Dessert Jars Live',
    mode: 'online',
    level: 'Intermediate',
    price: 'Rs. 8,900',
    duration: '4 weeks',
    schedule: 'Sat & Sun, 5:00 PM to 6:30 PM',
    location: 'Live on Zoom',
    nextStart: '18 May 2026',
    cohortSize: '24 seats',
    mentor: 'Radha Patel',
    rating: '4.8/5',
    tone: 'pearl',
    spotlight: true,
    focusItems: ['Puff pastry', 'Dessert jars', 'Mini tarts'],
    shortDescription:
      'Flaky pastries, mousse jars, and pretty cafe-style desserts.',
    description:
      'Live bakery sessions for learners who want pastries and plated dessert jars that look cafe-ready.',
    learnings: [
      'Pastry layers and clean baking',
      'Mousse and dessert jar assembly',
      'Mini tart filling balance',
      'Easy plating and garnish ideas',
    ],
    includes: [
      'Live Q&A after every class',
      '7-day class replay',
      'Printable ingredient prep list',
      'Private student WhatsApp support',
    ],
  },
  {
    id: 3,
    slug: 'cheesecake-bar-library',
    title: 'Cheesecake Bar Library',
    mode: 'recorded',
    level: 'All levels',
    price: 'Rs. 5,500',
    duration: '18 lessons',
    schedule: 'Self-paced access',
    location: 'Private student portal',
    nextStart: 'Instant access',
    cohortSize: 'Unlimited',
    mentor: 'Radha Patel',
    rating: '4.9/5',
    tone: 'sand',
    spotlight: true,
    focusItems: ['Baked cheesecake', 'No-bake cheesecake', 'Sauce toppings'],
    shortDescription:
      'Creamy baked and no-bake cheesecakes with easy toppings.',
    description:
      'A self-paced dessert library focused on smooth cheesecake textures, biscuit bases, and simple bakery presentation.',
    learnings: [
      'Classic baked cheesecake texture',
      'No-bake fillings and chilled setting',
      'Biscuit bases and clean slicing',
      'Sauces, crumbs, and topping finishes',
    ],
    includes: [
      '12 months of access',
      'Recipe PDF collection',
      'Cheesecake troubleshooting sheet',
      'Quarterly bonus lesson drops',
    ],
  },
  {
    id: 4,
    slug: 'cafe-shakes-and-cold-desserts',
    title: 'Cafe Shakes & Cold Desserts',
    mode: 'offline',
    level: 'Intermediate',
    price: 'Rs. 9,800',
    duration: '2 weekends',
    schedule: 'Sat, 10:00 AM to 2:00 PM',
    location: 'Ahmedabad Studio',
    nextStart: '28 May 2026',
    cohortSize: '10 seats',
    mentor: 'Chef Meera Shah',
    rating: '4.8/5',
    tone: 'mauve',
    spotlight: false,
    focusItems: ['Cold coffee', 'Oreo shakes', 'Dessert cups'],
    shortDescription:
      'Thick shakes, cold coffee, dessert cups, and sweet cafe treats.',
    description:
      'A weekend bakery cafe class built around shakes, chilled desserts, and visual serving ideas.',
    learnings: [
      'Balanced cafe-style shakes',
      'Cold coffee texture and sweetness control',
      'Dessert cup layering and topping',
      'Serving ideas for home parties and menus',
    ],
    includes: [
      'Recipe printouts',
      'Hands-on plating practice',
      'Cold dessert troubleshooting sheet',
      'Certificate of participation',
    ],
  },
  {
    id: 5,
    slug: 'tea-cakes-cookies-and-brownies',
    title: 'Tea Cakes, Cookies & Brownies',
    mode: 'online',
    level: 'Beginner Friendly',
    price: 'Rs. 6,900',
    duration: '3 weeks',
    schedule: 'Wed, 4:30 PM to 6:00 PM',
    location: 'Live online',
    nextStart: '02 June 2026',
    cohortSize: '30 seats',
    mentor: 'Chef Nidhi Rao',
    rating: '4.7/5',
    tone: 'rose',
    spotlight: false,
    focusItems: ['Tea cakes', 'Cookies', 'Brownies'],
    shortDescription:
      'Soft loaf cakes, crisp cookies, and rich fudgy brownies.',
    description:
      'A warm online class for classic bakery favourites that are easy to bake, pack, and gift.',
    learnings: [
      'Moist loaf cake texture',
      'Cookie spread and crisp edges',
      'Brownie shine and fudgy centers',
      'Flavor variations for everyday baking',
    ],
    includes: [
      'Live class handout',
      'Replay for one week',
      'Beginner substitutions guide',
      'Feedback on your final bake photo',
    ],
  },
  {
    id: 6,
    slug: 'celebration-cakes-masterclass',
    title: 'Celebration Cakes Masterclass',
    mode: 'recorded',
    level: 'Intermediate to Advanced',
    price: 'Rs. 7,900',
    duration: '14 lessons',
    schedule: 'Self-paced access',
    location: 'Private student portal',
    nextStart: 'Instant access',
    cohortSize: 'Unlimited',
    mentor: 'Radha Patel',
    rating: '4.9/5',
    tone: 'pearl',
    spotlight: false,
    focusItems: ['Tier cakes', 'Smooth frosting', 'Floral decor'],
    shortDescription:
      'Tier cakes, smooth frosting, and elegant celebration finishes.',
    description:
      'A recorded cake course for polished celebration cakes, floral decoration, and clean bakery presentation.',
    learnings: [
      'Leveling and stacking tier cakes',
      'Smooth buttercream finishes',
      'Simple floral decor placement',
      'Cake planning for custom orders',
    ],
    includes: [
      'Full recorded syllabus',
      'Downloadable costing sheet',
      'Decor reference gallery',
      'Certificate on completion',
    ],
  },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Asha Desai',
    role: 'Home baker, Ahmedabad',
    quote:
      'My cakes and cheesecakes finally look bakery-ready.',
  },
  {
    name: 'Priya Menon',
    role: 'Online student, Bengaluru',
    quote:
      'The pastry classes felt easy to follow and beautiful to plate.',
  },
  {
    name: 'Kavita Shah',
    role: 'Returning learner since 2016',
    quote:
      'Even the shake and dessert lessons felt polished but beginner-friendly.',
  },
]

export const milestones: Milestone[] = [
  {
    year: '2009',
    title: 'A small bakery class begins',
    description:
      'The journey started with intimate cake and bakery batches for local home bakers.',
  },
  {
    year: '2014',
    title: 'Bakery favourites expand',
    description:
      'Cakes, pastries, cookies, and celebration workshops became the heart of the studio.',
  },
  {
    year: '2020',
    title: 'Online sweet classes open',
    description:
      'Live bakery sessions reached students across India with the same soft, guided teaching style.',
  },
  {
    year: 'Today',
    title: 'A full bakery-first class brand',
    description:
      'Students now choose studio, online, and recorded bakery classes across cakes, cheesecakes, pastries, and more.',
  },
]

export const userStats = [
  { label: 'Active classes', value: '03', detail: 'Mix of live and recorded learning' },
  { label: 'Completion rate', value: '82%', detail: 'Strong weekly consistency' },
  { label: 'Recipe journals', value: '28', detail: 'Saved inside your student hub' },
]

export const userEnrollments = [
  { title: 'Pastries & Dessert Jars Live', progress: 72, nextStep: 'Module 4 live tart session on Saturday' },
  { title: 'Cheesecake Bar Library', progress: 38, nextStep: 'Lesson 7: baked cheesecake texture review' },
  { title: 'Celebration Cakes Masterclass', progress: 91, nextStep: 'Final costing worksheet review' },
]

export const upcomingSessions = [
  { day: 'Sat', date: '25 Apr', title: 'Live pastry folds and tart shells', time: '5:00 PM IST' },
  { day: 'Tue', date: '28 Apr', title: 'Designer cake sponge and layering practice', time: '11:00 AM IST' },
  { day: 'Fri', date: '01 May', title: 'Cheesecake toppings and photo feedback', time: '6:30 PM IST' },
]

export const adminMetrics = [
  { label: 'Active learners', value: '348', detail: '+18 this month' },
  { label: 'Live batches', value: '09', detail: 'Across online and studio formats' },
  { label: 'Average rating', value: '4.9', detail: 'Based on 1,200+ reviews' },
  { label: 'Revenue snapshot', value: 'Rs. 4.2L', detail: 'Dummy data for the admin preview' },
]

export const adminBatches = [
  { title: 'Designer Cakes Studio', seats: '12 / 14 filled', mentor: 'Radha Patel', start: '12 May 2026' },
  { title: 'Tea Cakes, Cookies & Brownies', seats: '21 / 30 filled', mentor: 'Chef Nidhi Rao', start: '02 June 2026' },
  { title: 'Pastries & Dessert Jars Live', seats: '19 / 24 filled', mentor: 'Radha Patel', start: '18 May 2026' },
]

export const recentEnrollments = [
  { name: 'Neha Joshi', className: 'Cheesecake Bar Library', channel: 'Instagram' },
  { name: 'Ritu Sharma', className: 'Designer Cakes Studio', channel: 'Referral' },
  { name: 'Mansi Kapoor', className: 'Tea Cakes, Cookies & Brownies', channel: 'Website' },
  { name: 'Devika Iyer', className: 'Celebration Cakes Masterclass', channel: 'WhatsApp' },
]
