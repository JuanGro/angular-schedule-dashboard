/* Home */
const Home = {
    text: 'Inicio',
    link: '/home',
    icon: 'icon-home'
};

/* Admin */
const DepartamentDirectors = {
    text: 'Departamentos',
    link: '/admin/department-director-list',
    icon: 'icon-briefcase'
};

/* Career director */
const Students = {
    text: 'Estudiantes',
    link: '/career-director/student-list',
    icon: 'icon-people'
};

const StudyProgramList = {
    text: 'Editar planes',
    link: '/career-director/study-program-list',
    icon: 'icon-note'
};

/* General user */
const Help = {
    text: 'Ayuda',
    link: '/general-user/help',
    icon: 'icon-question'
};

const Search = {
    text: 'Búsqueda alumnos',
    link: '/general-user/student-search',
    icon: 'icon-magnifier'
};

const StudyProgram = {
    text: 'Plan de estudios',
    link: '/general-user/study-program',
    icon: 'icon-bag'
};

const PersonalInfo = {
    text: 'Información personal',
    link: '/general-user/update-personal-information',
    icon: 'icon-user'
};

/* Student */
const AcademicRecord = {
    text: 'Historial académico',
    link: '/student/academic-record',
    icon: 'icon-book-open'
};

const ClasesToTake = {
    text: 'Siguiente semestre',
    link: '/student/classes-to-take',
    icon: 'icon-notebook'
};

export let menu = [
    Home,
    // ClasesToTake,
    // AcademicRecord,
    // StudyProgram,
    StudyProgramList,
    // Students,
    // DepartamentDirectors,
    // Search,
    // PersonalInfo,
    // Help
];
