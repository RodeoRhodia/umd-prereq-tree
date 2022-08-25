// Data taken from umd io API.
// Updated for the Fall 2022 Semester
// https://api.umd.io/v1/courses/departments

export function getDepartments() {
    return departments;
}

export function getDepartmentsByLetter(letter) {
    const filteredDepartments = departments.filter(departmentItem => {
        return departmentItem.dept_id[0] == letter.toUpperCase();
    });

    return filteredDepartments
}


let departments = [
    {
    "dept_id": "AAPS",
    "department": "Academic Achievement Programs"
    },
    {
    "dept_id": "AASP",
    "department": "African American Studies"
    },
    {
    "dept_id": "AAST",
    "department": "Asian American Studies"
    },
    {
    "dept_id": "AGNR",
    "department": "Agriculture and Natural Resources"
    },
    {
    "dept_id": "AGST",
    "department": "Agricultural Science and Technology"
    },
    {
    "dept_id": "AMSC",
    "department": "Applied Mathematics & Scientific Computation"
    },
    {
    "dept_id": "AMST",
    "department": "American Studies"
    },
    {
    "dept_id": "ANSC",
    "department": "Animal Science"
    },
    {
    "dept_id": "ANTH",
    "department": "Anthropology"
    },
    {
    "dept_id": "AOSC",
    "department": "Atmospheric and Oceanic Science"
    },
    {
    "dept_id": "ARAB",
    "department": "Arabic"
    },
    {
    "dept_id": "ARCH",
    "department": "Architecture"
    },
    {
    "dept_id": "AREC",
    "department": "Agricultural and Resource Economics"
    },
    {
    "dept_id": "ARHU",
    "department": "Arts and Humanities"
    },
    {
    "dept_id": "ARMY",
    "department": "Army"
    },
    {
    "dept_id": "ARSC",
    "department": "Air Science"
    },
    {
    "dept_id": "ARTH",
    "department": "Art History & Archaeology"
    },
    {
    "dept_id": "ARTT",
    "department": "Art Studio"
    },
    {
    "dept_id": "ASTR",
    "department": "Astronomy"
    },
    {
    "dept_id": "BCHM",
    "department": "Biochemistry"
    },
    {
    "dept_id": "BEES",
    "department": "Behavior, Ecology, Evolution and Systematics"
    },
    {
    "dept_id": "BIOE",
    "department": "Bioengineering"
    },
    {
    "dept_id": "BIOL",
    "department": "Biology"
    },
    {
    "dept_id": "BIOM",
    "department": "Biometrics"
    },
    {
    "dept_id": "BIPH",
    "department": "Biophysics"
    },
    {
    "dept_id": "BISI",
    "department": "Biological Sciences"
    },
    {
    "dept_id": "BMGT",
    "department": "Business and Management"
    },
    {
    "dept_id": "BMSO",
    "department": "Online Business MS Programs"
    },
    {
    "dept_id": "BSCI",
    "department": "Biological Sciences Program"
    },
    {
    "dept_id": "BSCV",
    "department": "CIVICUS"
    },
    {
    "dept_id": "BSGC",
    "department": "Global Communities"
    },
    {
    "dept_id": "BSOS",
    "department": "Behavioral and Social Sciences"
    },
    {
    "dept_id": "BSST",
    "department": "Terrorism Studies"
    },
    {
    "dept_id": "BUAC",
    "department": "Accounting and Information Assurance"
    },
    {
    "dept_id": "BUDT",
    "department": "Decision and Information Technologies"
    },
    {
    "dept_id": "BUFN",
    "department": "Finance"
    },
    {
    "dept_id": "BULM",
    "department": "Logistics, Business, and Public Policy"
    },
    {
    "dept_id": "BUMK",
    "department": "Marketing"
    },
    {
    "dept_id": "BUMO",
    "department": "Management and Organization"
    },
    {
    "dept_id": "BUSI",
    "department": "Part-Time MBA Program"
    },
    {
    "dept_id": "BUSM",
    "department": "Full-Time MBA Program"
    },
    {
    "dept_id": "BUSO",
    "department": "Online MBA Program"
    },
    {
    "dept_id": "CBMG",
    "department": "Cell Biology & Molecular Genetics"
    },
    {
    "dept_id": "CCJS",
    "department": "Criminology and Criminal Justice"
    },
    {
    "dept_id": "CHBE",
    "department": "Chemical and Biomolecular Engineering"
    },
    {
    "dept_id": "CHEM",
    "department": "Chemistry"
    },
    {
    "dept_id": "CHIN",
    "department": "Chinese"
    },
    {
    "dept_id": "CHPH",
    "department": "Chemical Physics"
    },
    {
    "dept_id": "CHSE",
    "department": "Counseling, Higher Education, and Special Education"
    },
    {
    "dept_id": "CINE",
    "department": "Cinema and Media Studies"
    },
    {
    "dept_id": "CLAS",
    "department": "Classics"
    },
    {
    "dept_id": "CLFS",
    "department": "Chemical and Life Sciences"
    },
    {
    "dept_id": "CMLT",
    "department": "Comparative Literature"
    },
    {
    "dept_id": "CMSC",
    "department": "Computer Science"
    },
    {
    "dept_id": "COMM",
    "department": "Communication"
    },
    {
    "dept_id": "CONS",
    "department": "Sustainable Development & Conservation Biology"
    },
    {
    "dept_id": "CPBE",
    "department": "College Park Scholars-Business, Society, and Economy"
    },
    {
    "dept_id": "CPET",
    "department": "College Park Scholars-Environment, Technology & Economy"
    },
    {
    "dept_id": "CPGH",
    "department": "College Park Scholars-Global Public Health"
    },
    {
    "dept_id": "CPJT",
    "department": "College Park Scholars-Justice and Legal Thought"
    },
    {
    "dept_id": "CPMS",
    "department": "College Park Scholars-Media, Self and Society"
    },
    {
    "dept_id": "CPPL",
    "department": "College Park Scholars-Public Leadership"
    },
    {
    "dept_id": "CPSA",
    "department": "College Park Scholars-Arts"
    },
    {
    "dept_id": "CPSD",
    "department": "College Park Scholars-Science, Discovery & the Universe"
    },
    {
    "dept_id": "CPSF",
    "department": "College Park Scholars-Life Sciences"
    },
    {
    "dept_id": "CPSG",
    "department": "College Park Scholars-Science and Global Change"
    },
    {
    "dept_id": "CPSN",
    "department": "College Park Scholars-International Studies"
    },
    {
    "dept_id": "CPSP",
    "department": "College Park Scholars Program"
    },
    {
    "dept_id": "CPSS",
    "department": "College Park Scholars-Science, Technology and Society"
    },
    {
    "dept_id": "DANC",
    "department": "Dance"
    },
    {
    "dept_id": "DATA",
    "department": "Data Science and Analytics"
    },
    {
    "dept_id": "EALL",
    "department": "East Asian Languages and Literatures"
    },
    {
    "dept_id": "ECON",
    "department": "Economics"
    },
    {
    "dept_id": "EDCI",
    "department": "Curriculum and Instruction"
    },
    {
    "dept_id": "EDCP",
    "department": "Education Counseling and Personnel Services"
    },
    {
    "dept_id": "EDHD",
    "department": "Education, Human Development"
    },
    {
    "dept_id": "EDHI",
    "department": "Education Leadership, Higher Ed and International Ed"
    },
    {
    "dept_id": "EDMS",
    "department": "Measurement, Statistics, and Evaluation"
    },
    {
    "dept_id": "EDPS",
    "department": "Education Policy Studies"
    },
    {
    "dept_id": "EDSP",
    "department": "Education, Special"
    },
    {
    "dept_id": "EDUC",
    "department": "Education"
    },
    {
    "dept_id": "EMBA",
    "department": "Executive MBA Program"
    },
    {
    "dept_id": "ENAE",
    "department": "Engineering, Aerospace"
    },
    {
    "dept_id": "ENBC",
    "department": "Biocomputational Engineering"
    },
    {
    "dept_id": "ENCE",
    "department": "Engineering, Civil"
    },
    {
    "dept_id": "ENCH",
    "department": "Engineering, Chemical"
    },
    {
    "dept_id": "ENCO",
    "department": "Engineering, Cooperative Education"
    },
    {
    "dept_id": "ENEB",
    "department": "Embedded Systems & Internet of Things"
    },
    {
    "dept_id": "ENEE",
    "department": "Electrical & Computer Engineering"
    },
    {
    "dept_id": "ENES",
    "department": "Engineering Science"
    },
    {
    "dept_id": "ENFP",
    "department": "Engineering, Fire Protection"
    },
    {
    "dept_id": "ENGL",
    "department": "English"
    },
    {
    "dept_id": "ENMA",
    "department": "Engineering, Materials"
    },
    {
    "dept_id": "ENME",
    "department": "Engineering, Mechanical"
    },
    {
    "dept_id": "ENNU",
    "department": "Engineering, Nuclear"
    },
    {
    "dept_id": "ENPM",
    "department": "Engineering, Professional Masters"
    },
    {
    "dept_id": "ENPP",
    "department": "Engineering and Public Policy"
    },
    {
    "dept_id": "ENRE",
    "department": "Reliability Engineering"
    },
    {
    "dept_id": "ENSE",
    "department": "Systems Engineering"
    },
    {
    "dept_id": "ENSP",
    "department": "Environmental Science and Policy"
    },
    {
    "dept_id": "ENST",
    "department": "Environmental Science and Technology"
    },
    {
    "dept_id": "ENTM",
    "department": "Entomology"
    },
    {
    "dept_id": "ENTS",
    "department": "Telecommunications"
    },
    {
    "dept_id": "EPIB",
    "department": "Epidemiology and Biostatistics"
    },
    {
    "dept_id": "EXST",
    "department": "Office of Extended Studies"
    },
    {
    "dept_id": "FGSM",
    "department": "Federal and Global Fellows"
    },
    {
    "dept_id": "FILM",
    "department": "Film Studies"
    },
    {
    "dept_id": "FIRE",
    "department": "First-Year Innovation & Research Experience"
    },
    {
    "dept_id": "FMSC",
    "department": "Family Science"
    },
    {
    "dept_id": "FREN",
    "department": "French"
    },
    {
    "dept_id": "GEMS",
    "department": "Gemstone"
    },
    {
    "dept_id": "GEOG",
    "department": "Geographical Sciences"
    },
    {
    "dept_id": "GEOL",
    "department": "Geology"
    },
    {
    "dept_id": "GERM",
    "department": "Germanic Studies"
    },
    {
    "dept_id": "GREK",
    "department": "Greek"
    },
    {
    "dept_id": "GVPT",
    "department": "Government and Politics"
    },
    {
    "dept_id": "HACS",
    "department": "ACES-Cybersecurity"
    },
    {
    "dept_id": "HDCC",
    "department": "Design Cultures and Creativity"
    },
    {
    "dept_id": "HEBR",
    "department": "Hebrew"
    },
    {
    "dept_id": "HEIP",
    "department": "Entrepreneurship and Innovation"
    },
    {
    "dept_id": "HESI",
    "department": "Higher Ed, Student Affairs, and International Ed Policy"
    },
    {
    "dept_id": "HESP",
    "department": "Hearing and Speech Sciences"
    },
    {
    "dept_id": "HHUM",
    "department": "Honors Humanities"
    },
    {
    "dept_id": "HISP",
    "department": "Historic Preservation"
    },
    {
    "dept_id": "HIST",
    "department": "History"
    },
    {
    "dept_id": "HLMN",
    "department": "Hillman Entrepreneurs Program"
    },
    {
    "dept_id": "HLSA",
    "department": "Health Services Administration"
    },
    {
    "dept_id": "HLSC",
    "department": "Integrated Life Sciences"
    },
    {
    "dept_id": "HLTH",
    "department": "Health"
    },
    {
    "dept_id": "HNUH",
    "department": "University Honors"
    },
    {
    "dept_id": "HONR",
    "department": "Honors"
    },
    {
    "dept_id": "IDEA",
    "department": "Academy for Innovation & Entrepreneurship"
    },
    {
    "dept_id": "IMDM",
    "department": "Immersive Media Design"
    },
    {
    "dept_id": "IMMR",
    "department": "Immigration Studies"
    },
    {
    "dept_id": "INAG",
    "department": "Institute of Applied Agriculture"
    },
    {
    "dept_id": "INFM",
    "department": "Information Management"
    },
    {
    "dept_id": "INST",
    "department": "Information Studies"
    },
    {
    "dept_id": "ISRL",
    "department": "Israel Studies"
    },
    {
    "dept_id": "ITAL",
    "department": "Italian"
    },
    {
    "dept_id": "JAPN",
    "department": "Japanese"
    },
    {
    "dept_id": "JOUR",
    "department": "Journalism"
    },
    {
    "dept_id": "JWST",
    "department": "Jewish Studies"
    },
    {
    "dept_id": "KNES",
    "department": "Kinesiology"
    },
    {
    "dept_id": "KORA",
    "department": "Korean"
    },
    {
    "dept_id": "LACS",
    "department": "Latin American and Caribbean Studies"
    },
    {
    "dept_id": "LARC",
    "department": "Landscape Architecture"
    },
    {
    "dept_id": "LASC",
    "department": "Certificate in Latin American Studies"
    },
    {
    "dept_id": "LATN",
    "department": "Latin"
    },
    {
    "dept_id": "LBSC",
    "department": "Library Science"
    },
    {
    "dept_id": "LGBT",
    "department": "Lesbian Gay Bisexual Transgender Studies"
    },
    {
    "dept_id": "LING",
    "department": "Linguistics"
    },
    {
    "dept_id": "MAIT",
    "department": "Masters in the Mathematics of Advanced Industrial Tech"
    },
    {
    "dept_id": "MATH",
    "department": "Mathematics"
    },
    {
    "dept_id": "MEES",
    "department": "Marine-Estuarine-Environmental Sciences"
    },
    {
    "dept_id": "MIEH",
    "department": "Maryland Institute for Applied Environmental Health"
    },
    {
    "dept_id": "MITH",
    "department": "Maryland Institute for Technology in the Humanities"
    },
    {
    "dept_id": "MLAW",
    "department": "MPower Undergraduate Law Programs"
    },
    {
    "dept_id": "MLSC",
    "department": "MD Language Science Ctr"
    },
    {
    "dept_id": "MOCB",
    "department": "Molecular and Cell Biology"
    },
    {
    "dept_id": "MSBB",
    "department": "MS Business & Management Track"
    },
    {
    "dept_id": "MSMC",
    "department": "Museum Scholarship and Material Culture"
    },
    {
    "dept_id": "MSML",
    "department": "Machine Learning"
    },
    {
    "dept_id": "MUED",
    "department": "Music Education"
    },
    {
    "dept_id": "MUSC",
    "department": "School of Music"
    },
    {
    "dept_id": "MUSP",
    "department": "Music Performance"
    },
    {
    "dept_id": "NACS",
    "department": "Neuroscience & Cognitive Science"
    },
    {
    "dept_id": "NAVY",
    "department": "Navy"
    },
    {
    "dept_id": "NEUR",
    "department": "Neuroscience"
    },
    {
    "dept_id": "NFSC",
    "department": "Nutrition and Food Science"
    },
    {
    "dept_id": "NIAP",
    "department": "National Institute of Aeronautics - Va Tech"
    },
    {
    "dept_id": "NIAS",
    "department": "National Institute of Aeronautics - North Carolina"
    },
    {
    "dept_id": "NIAV",
    "department": "National Institute of Aeronautics - Univ of VA"
    },
    {
    "dept_id": "PEER",
    "department": "Health Center"
    },
    {
    "dept_id": "PERS",
    "department": "Persian"
    },
    {
    "dept_id": "PHIL",
    "department": "Philosophy"
    },
    {
    "dept_id": "PHPE",
    "department": "Philosophy, Politics, and Economics"
    },
    {
    "dept_id": "PHSC",
    "department": "Public Health Science"
    },
    {
    "dept_id": "PHYS",
    "department": "Physics"
    },
    {
    "dept_id": "PLCY",
    "department": "Public Policy"
    },
    {
    "dept_id": "PLSC",
    "department": "Plant Sciences"
    },
    {
    "dept_id": "PORT",
    "department": "Portuguese"
    },
    {
    "dept_id": "PSYC",
    "department": "Psychology"
    },
    {
    "dept_id": "RDEV",
    "department": "Real Estate Development"
    },
    {
    "dept_id": "RELS",
    "department": "Religious Studies"
    },
    {
    "dept_id": "RUSS",
    "department": "Russian"
    },
    {
    "dept_id": "SLAA",
    "department": "Second Language Acquisition and Application"
    },
    {
    "dept_id": "SLLC",
    "department": "School of Languages, Literatures and Cultures"
    },
    {
    "dept_id": "SMLP",
    "department": "Southern Management Leadership Program"
    },
    {
    "dept_id": "SOCY",
    "department": "Sociology"
    },
    {
    "dept_id": "SPAN",
    "department": "Spanish"
    },
    {
    "dept_id": "SPHL",
    "department": "Public Health"
    },
    {
    "dept_id": "STAT",
    "department": "Statistics and Probability"
    },
    {
    "dept_id": "SUMM",
    "department": "Summer"
    },
    {
    "dept_id": "SURV",
    "department": "Survey Methodology"
    },
    {
    "dept_id": "TDPS",
    "department": "Theatre, Dance and Performance Studies"
    },
    {
    "dept_id": "THET",
    "department": "Theatre"
    },
    {
    "dept_id": "TLPL",
    "department": "Teaching and Learning, Policy and Leadership"
    },
    {
    "dept_id": "TLTC",
    "department": "Teaching and Learning Transformation Center"
    },
    {
    "dept_id": "TOXI",
    "department": "Toxicology"
    },
    {
    "dept_id": "UGST",
    "department": "Undergraduate Studies"
    },
    {
    "dept_id": "UMEI",
    "department": "Maryland English Institute"
    },
    {
    "dept_id": "UNIV",
    "department": "University Courses"
    },
    {
    "dept_id": "URSP",
    "department": "Urban Studies and Planning"
    },
    {
    "dept_id": "USLT",
    "department": "Latina/o Studies"
    },
    {
    "dept_id": "VMSC",
    "department": "Veterinary Medical Sciences"
    },
    {
    "dept_id": "WGSS",
    "department": "Women, Gender, and Sexuality Studies"
    },
    {
    "dept_id": "WMST",
    "department": "Women's Studies"
    }
];