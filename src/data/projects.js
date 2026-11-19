// Data terpusat: tambah proyek baru cukup dengan menambah objek dalam array.
export const projects = [
  {
    id: 'rata', name: 'Rata.in', visualTitle: 'Rata.in', visualSubtitle: 'Road damage reporting', visualFoot: 'REPORT / ANALYZE / TRACK', symbol: '⌁',
    role: 'Project Manager + Backend Developer', type: 'Civic Tech · Web App',
    description: 'Platform pelaporan dan pemantauan kerusakan jalan berbantuan AI dengan peta lokasi dan dashboard admin; masih dalam pengembangan.',
    stack: ['React', 'Node.js', 'SQLite', 'YOLO11s'],
    categories: ['Development'], featured: true,
    github: 'https://github.com/NBFiidly/rata-in-web',
  },
  {
    id: 'univtalk', name: 'UnivTalk', visualTitle: 'UnivTalk', visualSubtitle: 'Connect · Discuss · Collaborate', visualFoot: 'CAMPUS / COMMUNITY', symbol: '✳',
    role: 'Frontend + Bug Hunter', type: 'Community · Web App',
    description: 'Aplikasi komunitas untuk mahasiswa agar dapat terhubung, berdiskusi, dan berkolaborasi melalui forum kampus.',
    stack: ['TypeScript', 'Go', 'PostgreSQL'],
    categories: ['Development'], featured: false,
    github: 'https://github.com/Ariffansyah/UnivTalk',
  },
  {
    id: 'school', name: 'Smart School Learning Platform', visualTitle: 'Smart School', visualSubtitle: 'Learning experience, reimagined', visualFoot: 'DESIGN / EDUCATION', symbol: '◈',
    role: 'Designer + Frontend Developer', type: 'EdTech · School Platform',
    description: 'Platform profil sekolah SDN Bangah No. 383 dan workspace guru untuk konten, materi pembelajaran, ulangan, serta penilaian.',
    stack: ['Next.js', 'React', 'PostgreSQL'],
    categories: ['Development', 'Design'], featured: false,
    github: 'https://github.com/0xfrq/miniproject',
  },
  {
    id: 'oishigiri', name: 'Oishigiri', visualTitle: 'OISHIGIRI', visualSubtitle: 'Onigiri ordering experience', visualFoot: 'FOOD / COMMERCE', symbol: '◕',
    role: 'Dummy Data Contributor', type: 'Food Commerce · Web App',
    description: 'Proyek aplikasi pemesanan onigiri berbasis React. Kontribusi saya berfokus pada penyusunan data dummy untuk kebutuhan pengembangan.',
    stack: ['React', 'React Router', 'CSS Modules'],
    categories: ['Data'], featured: false,
    github: 'https://github.com/vihaikel/Oishigiri',
  },
];
