import Link from 'next/link';
import Head from 'next/head';
import { useRouter } from 'next/router';

const siteDatabase = [
  { slug: "examino", name: "Examino", category: "AI Grading & Essay Analysis", desc: "Grades physical, handwritten papers directly from a smartphone scan - analyzing the logic of math proofs, diagrams, and essays with remarkable accuracy." },
  { slug: "gradescope", name: "Gradescope", category: "AI Grading & Essay Analysis", desc: "Uses AI to cluster similar student answers together, enabling rapid, consistent rubric-based grading at scale across large classes." },
  { slug: "cograder", name: "CoGrader", category: "AI Grading & Essay Analysis", desc: "Automates rubric-based feedback on essays and quizzes with seamless integrations for Google Classroom and Canvas." },
  { slug: "kangaroos-ai", name: "Kangaroos AI", category: "AI Grading & Essay Analysis", desc: "Offers high-volume bulk uploading for essay grading and pairs it with an integrated AI lesson plan generator for curriculum prep." },
  { slug: "magicschool-ai", name: "MagicSchool AI", category: "AI Grading & Essay Analysis", desc: "Provides over 60 AI tools covering lesson planning, grading, and rubric generation - all within a secure, FERPA-compliant platform trusted by educators nationwide." },
  { slug: "markr", name: "Markr", category: "AI Grading & Essay Analysis", desc: "Standardizes grading feedback to ensure fair, consistent evaluations across all students - reducing unconscious bias in manual marking workflows." },
  { slug: "formative-ai", name: "Formative AI", category: "AI Grading & Essay Analysis", desc: "Uses an AI assistant named 'Luna' to automate real-time grading and provide instant feedback to students as they complete assignments." },
  { slug: "smodin", name: "Smodin", category: "AI Grading & Essay Analysis", desc: "A multilingual AI grading and text analysis platform operating in over 50 languages - ideal for global academic programs and multilingual institutions." },
  { slug: "essaygrader", name: "EssayGrader", category: "AI Grading & Essay Analysis", desc: "Used to grade at scale across large classes and LMS platforms like Canvas and Google Classroom." },

  { slug: "edcafe-ai", name: "Edcafe AI", category: "Quiz Generators", desc: "Generates quizzes from YouTube links, websites, or PDFs. Teachers assign them via QR codes with auto-grading and contextual answer explanations." },
  { slug: "quizgecko", name: "QuizGecko", category: "Quiz Generators", desc: "Transforms uploaded documents - PDFs, Word files, PPTs - into auto-graded quizzes and flashcard sets that are instantly shareable." },
  { slug: "wiris-quizzes", name: "WIRIS Quizzes", category: "Quiz Generators", desc: "Built specifically for STEM education - generates advanced algorithmic math and science questions and recognizes handwritten formulas." },
  { slug: "classmarker", name: "ClassMarker", category: "Quiz Generators", desc: "Provides a highly secure online exam environment with AI assistance and the ability to issue custom-branded certificates upon completion." },
  { slug: "toolsaday", name: "Toolsaday", category: "Quiz Generators", desc: "Adapts quizzes with text-to-speech options and AI-generated images, making assessments more accessible and engaging for visual and auditory learners." },
  { slug: "testportal", name: "Testportal", category: "Quiz Generators", desc: "Designed for secure, high-stakes exams with robust anti-cheating controls, AI question creation, and advanced analytics for proctored environments." },
  { slug: "prepai", name: "PrepAI", category: "Quiz Generators", desc: "Optimized for test prep organizations that need to generate hundreds of questions rapidly through bulk AI-powered question generation workflows." },
  { slug: "quizbot", name: "Quizbot", category: "Quiz Generators", desc: "Generates multiple variations of the same test at different difficulty levels - ideal for differentiated instruction and adaptive learning programs." },
  { slug: "quiz-whiz", name: "Quiz Whiz", category: "Quiz Generators", desc: "Quickly processes large texts (up to 3,000 words) to generate straightforward multiple-choice questions with minimal setup time required." },
  { slug: "conker-ai", name: "Conker.ai", category: "Quiz Generators", desc: "Focused on K-12 with accessible, read-aloud quiz generation that exports directly to Google Forms for easy classroom distribution." },
  { slug: "coursebox", name: "Coursebox", category: "Quiz Generators", desc: "Automates quiz creation and grading at scale, making it ideal for large corporate training teams managing hundreds of learners simultaneously." },

  { slug: "classpoint-ai", name: "ClassPoint AI", category: "Gamified Tools", desc: "Integrates directly into PowerPoint to generate quiz questions from your existing slides, allowing students to respond live." },
  { slug: "quizalize", name: "Quizalize", category: "Gamified Tools", desc: "Creates differentiated AI 'Smart Quizzes' that transform into whole-class epic games - including virtual basketball matches." },
  { slug: "kahoot", name: "Kahoot!", category: "Gamified Tools", desc: "Features an AI question generator that turns topics or uploaded PDFs into live, competitive trivia games students love." },
  { slug: "wooclap", name: "Wooclap", category: "Gamified Tools", desc: "Features an AI 'Quiz Wizard' for generating interactive live polls and quizzes designed to engage large university lecture audiences." },
  { slug: "disco", name: "Disco", category: "All-in-One / Community", desc: "An AI-native platform built for training businesses that combines assessment creation with community features and smart workflow automations." },

  { slug: "engageli", name: "Engageli", category: "Corporate L&D", desc: "A multimodal virtual classroom designed for higher ed and corporate L&D that uses AI to generate concise class summaries and features AI tutors." },
  { slug: "linkedin-learning", name: "LinkedIn Learning", category: "Corporate L&D", desc: "Integrates directly with professional profiles and utilizes AI-powered skill assessments to map individual knowledge gaps." },
  { slug: "udemy-business", name: "Udemy Business", category: "Corporate L&D", desc: "Integrates AI-powered course recommendations and personal learning paths into a vast content library." },
  { slug: "pluralsight", name: "Pluralsight", category: "Corporate L&D", desc: "A tech and IT-focused upskilling platform with AI-driven skill assessments, interactive labs, and personalized learning paths." },
  { slug: "udacity", name: "Udacity", category: "Corporate L&D", desc: "Provides industry-partnered 'Nanodegrees' with hands-on projects reviewed by industry experts." },
  { slug: "codecademy", name: "Codecademy", category: "Corporate L&D", desc: "An interactive platform where aspiring developers can write and test code directly in the browser with real-time AI feedback." },

  { slug: "khanmigo", name: "Khan Academy (Khanmigo)", category: "AI Tutors", desc: "Features Khanmigo, an AI tutor built on GPT-4 that uses the Socratic method to guide K-12 and college students through problems step-by-step." },
  { slug: "coursera-coach", name: "Coursera Coach", category: "AI Tutors", desc: "A 24/7 AI companion that reviews assignments and provides personalized tutoring for degree and professional certificate programs." },
  { slug: "edx-xpert", name: "edX Xpert Assistant", category: "AI Tutors", desc: "Helps students navigate graduate-level course materials, clarify complex concepts, and build structured study schedules." },
  { slug: "datacamp", name: "DataCamp", category: "AI Tutors", desc: "An interactive coding-focused platform featuring an AI assistant that provides real-time code reviews, debugging help, and targeted hints." },
  { slug: "brilliant", name: "Brilliant", category: "AI Tutors", desc: "Focuses on STEM education with interactive, AI-guided problem solving that teaches logic, mathematics, and science concepts visually." },

  { slug: "duolingo-max", name: "Duolingo Max", category: "Language Learning", desc: "The world's most popular language app offers a premium tier with AI-powered roleplay scenarios and immersive conversation practice." },
  { slug: "speak", name: "Speak", category: "Language Learning", desc: "A dedicated AI conversation app that allows users to practice speaking out loud with an adaptive AI partner." },
  { slug: "praktika", name: "Praktika", category: "Language Learning", desc: "An adaptive AI conversation app that corrects grammar and pronunciation in real time." },
  { slug: "elsa-speak", name: "ELSA Speak", category: "Language Learning", desc: "An AI-powered language coach exclusively focused on improving English pronunciation through instant phoneme-level feedback." },
  { slug: "memrise", name: "Memrise", category: "Language Learning", desc: "Pairs authentic native-speaker video clips with an AI chatbot feature for practicing real-world conversations." },
  { slug: "babbel", name: "Babbel", category: "Language Learning", desc: "Offers rigorous structured grammar lessons designed by professional linguists - a more academic alternative to gamified apps." },
  { slug: "drops", name: "Drops", category: "Language Learning", desc: "Excellent for visual learners seeking 5-10 minute sessions. Uses beautiful illustrations and rapid word association to build vocabulary." },
  { slug: "hellotalk", name: "HelloTalk", category: "Language Learning", desc: "Connects learners with native speakers worldwide for language exchange via text, voice, and video chat - the world's largest language exchange community." },
  { slug: "tandem", name: "Tandem", category: "Language Learning", desc: "A language exchange app that pairs learners with native speakers for structured conversation practice with built-in translation and correction tools." },
  { slug: "lingopie", name: "Lingopie", category: "Language Learning", desc: "A Netflix-style platform that lets you learn through authentic TV shows and movies with interactive dual-language subtitles." },
  { slug: "yabla", name: "Yabla", category: "Language Learning", desc: "Provides authentic video immersion with interactive dual-language subtitles, slow-down playback, and built-in vocabulary quizzes." },
  { slug: "busuu", name: "Busuu", category: "Language Learning", desc: "Integrates community feedback where native speakers correct exercises in real time, combining AI-powered lessons with authentic human interaction." },

  { slug: "flashrecall", name: "FlashRecall", category: "Study Aids", desc: "Automatically generates spaced-repetition flashcards from images, PDFs, and YouTube links. Lets you literally 'chat with your flashcards'." },
  { slug: "recallify", name: "Recallify", category: "Study Aids", desc: "An AI memory support app that records, transcribes, and summarizes real-life conversations and lectures, then automatically generates active-recall quizzes." },
  { slug: "quizlet", name: "Quizlet", category: "Study Aids", desc: "Offers an AI Study Set Generator that transforms your raw notes into polished flashcard sets and includes a conversational chat-style Q&A." },
  { slug: "perplexity-ai", name: "Perplexity AI", category: "Study Aids", desc: "An AI 'answer engine' purpose-built for students and researchers providing factual, nuanced answers with fully verifiable, cited sources." },
  { slug: "anki", name: "Anki", category: "Study Aids", desc: "The gold standard for long-term memorization using open-source spaced repetition algorithms. Heavily favored by medical and law students." },
  { slug: "photomath", name: "Photomath", category: "Study Aids", desc: "Uses camera scanning to instantly provide step-by-step solutions to complex math problems, from basic arithmetic to calculus." },
  { slug: "brainscape", name: "Brainscape", category: "Study Aids", desc: "Offers a patented 'Confidence-Based Repetition' system where learners rate their own confidence after each flashcard." },
  { slug: "notion", name: "Notion", category: "Study Aids", desc: "A highly customizable AI-powered workspace for organizing notes, research, and study plans - used by millions to build a 'second brain'." },
  { slug: "goodnotes-5", name: "GoodNotes 5", category: "Study Aids", desc: "The leading digital handwriting app for iPad, combines the feel of pen-on-paper with powerful AI search and organization." },
  { slug: "simplemind", name: "SimpleMind", category: "Study Aids", desc: "An intuitive mind-mapping app that helps visual learners organize complex topics, brainstorm ideas, and create structured study plans." },
  { slug: "study-bunny", name: "Study Bunny", category: "Study Aids", desc: "A gamified focus timer app that uses virtual pet mechanics to motivate students to stay off their phones and maintain study streaks." },
  { slug: "focus-tree", name: "Focus Tree", category: "Study Aids", desc: "Uses the Pomodoro technique with a gamified forest-growing mechanic to help students combat procrastination." },
  { slug: "focus-keeper", name: "Focus Keeper", category: "Study Aids", desc: "A clean, minimalist Pomodoro timer app designed to help students and professionals maintain deep focus through structured work intervals." },

  { slug: "askie", name: "Askie", category: "Kids Learning", desc: "A voice-driven AI learning companion designed safely for children aged 4 to 12. Answers big questions and generates educational visuals on demand." },
  { slug: "khan-academy-kids", name: "Khan Academy Kids", category: "Kids Learning", desc: "A free, comprehensive early learning app for ages 2-8 covering reading, math, and social-emotional skills - built on research-backed pedagogy (COPPA compliant)." },
  { slug: "abcmouse", name: "ABCmouse", category: "Kids Learning", desc: "A full early learning curriculum for ages 2-8 with over 10,000 learning activities across reading, math, science, and art." },
  { slug: "mindvalley", name: "Mindvalley", category: "Personal Growth", desc: "Uses AI coaching to build highly personalized daily growth plans bridging the gap between education and holistic self-development." },
  { slug: "elevate", name: "Elevate", category: "Microlearning", desc: "A brain training app with personalized daily workouts targeting writing, speaking, reading, and math skills - adapts difficulty based on performance." },
  { slug: "headway", name: "Headway", category: "Microlearning", desc: "Delivers 15-minute AI-summarized nonfiction book summaries, making it the go-to microlearning app for busy professionals." },
  { slug: "impulse", name: "Impulse", category: "Microlearning", desc: "A cognitive training app using neuroscience-backed mini-games to improve memory, attention, and problem-solving." },

  { slug: "buddyboss", name: "BuddyBoss", category: "Course Creators", desc: "A robust platform that allows educators and brands to build fully customizable, white-labeled online learning communities and mobile apps (integrates with WordPress)." },
  { slug: "freshlearn", name: "FreshLearn", category: "Course Creators", desc: "A no-code platform that lets creators build courses, cohorts, and digital downloads while keeping 100% of their earnings (zero transaction fees)." },
  { slug: "teachable", name: "Teachable", category: "Course Creators", desc: "One of the most popular course creation platforms globally - allows educators to build, market, and sell online courses with built-in payment processing." },
  { slug: "thinkific", name: "Thinkific", category: "Course Creators", desc: "A comprehensive course platform with AI-powered content creation tools, community features, and a robust app store - trusted by 50,000 creators." },
  { slug: "maven", name: "Maven", category: "Course Creators", desc: "A cohort-based course platform purpose-built for live, community-driven learning experiences. Achieves industry-leading completion rates." },
];

function getDetailsBySlug(targetSlug) {
  return siteDatabase.find(item => item.slug === targetSlug) || null;
}

function byCategory(cat) {
  return siteDatabase.filter(x => x.category === cat);
}

function AppCard({ app, basePath }) {
  return (
    <div className="col-md-6 col-lg-4 d-flex">
      <Link href={`${basePath}/directory/${app.slug}`}>
        <a className="pdf-app-card p-4 rounded w-100 text-decoration-none">
          <h5 className="fw-bold text-dark mb-2">{app.name}</h5>
          <p className="text-muted small mb-0">{app.desc}</p>
        </a>
      </Link>
    </div>
  );
}

function HomeView({ basePath }) {
  return (
    <>
      <section className="py-5 bg-light border-bottom">
        <div className="container-fluid px-4 px-lg-5 py-4">
          <h1 className="display-4 fw-bold mb-4" style={{ lineHeight: '1.15' }}>
            Best AI Education Apps in 2026: The Ultimate Guide for Schools &amp; Learners
          </h1>
          <p className="lead text-secondary mb-4">
            Looking for the best AI education apps in 2026? From automated grading and AI tutoring to personalized learning platforms and corporate training software, artificial intelligence is transforming every layer of modern education. Whether you&apos;re a school administrator evaluating EdTech software, an L&amp;D leader building employee training programs, or a student searching for smarter study tools &mdash; this comprehensive directory covers the most impactful AI-powered learning apps available today.
          </p>
          <div className="d-flex flex-wrap gap-2">
            <span className="pdf-tag">ENTERPRISE EDTECH</span>
            <span className="pdf-tag">LEARNER APPS</span>
            <span className="pdf-tag">AI-POWERED</span>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <h2 className="fw-bold mb-4">Table of Contents</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Market Overview</h5>
              <ul className="list-unstyled">
                <li className="mb-2">&bull; <a href="#market-data" className="text-decoration-none">The Educational App Landscape</a></li>
                <li className="mb-2">&bull; <a href="#ai-deep-dive" className="text-decoration-none">How AI Powers EdTech</a></li>
                <li className="mb-2">&bull; <a href="#trends" className="text-decoration-none">Key Trends for 2026</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Enterprise &amp; Institutional</h5>
              <ul className="list-unstyled">
                <li className="mb-2">&bull; <a href="#grading" className="text-decoration-none">AI Grading &amp; Essay Analysis</a></li>
                <li className="mb-2">&bull; <a href="#quiz" className="text-decoration-none">AI Quiz Generators &amp; Assessments</a></li>
                <li className="mb-2">&bull; <a href="#gamified" className="text-decoration-none">Interactive &amp; Gamified Tools</a></li>
                <li className="mb-2">&bull; <a href="#corporate" className="text-decoration-none">Corporate Training &amp; L&amp;D</a></li>
                <li className="mb-2">&bull; <a href="#creators" className="text-decoration-none">Course Creation Platforms</a></li>
              </ul>
            </div>
            <div className="col-md-4">
              <h5 className="fw-bold mb-3">Learner-Facing Apps</h5>
              <ul className="list-unstyled">
                <li className="mb-2">&bull; <a href="#tutors" className="text-decoration-none">AI Tutors &amp; Higher Education</a></li>
                <li className="mb-2">&bull; <a href="#language" className="text-decoration-none">Language Learning &amp; AI Conversation</a></li>
                <li className="mb-2">&bull; <a href="#study" className="text-decoration-none">Study Aids &amp; Spaced Repetition</a></li>
                <li className="mb-2">&bull; <a href="#kids" className="text-decoration-none">Kids &amp; Early Learning</a></li>
                <li className="mb-2">&bull; <a href="#microlearning" className="text-decoration-none">Microlearning &amp; Brain Training</a></li>
              </ul>
            </div>
          </div>
          <p className="text-muted small mt-4 mb-0">
            <em>Updated April 2026 &middot; Covers 50+ AI EdTech apps across enterprise, institutional, and consumer categories</em>
          </p>
        </div>
      </section>

      <section id="market-data" className="py-5 bg-light border-top">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">MARKET DATA</span>
          <h2 className="fw-bold mb-3">The AI Education App Market in 2026: Key Statistics &amp; Data</h2>
          <p className="lead text-secondary mb-5">
            The global education app market has reached unprecedented scale in 2026. Here&apos;s what the latest data tells us about AI adoption in EdTech, app store growth, and the regulatory challenges reshaping the industry.
          </p>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="pdf-stat-card text-center h-100">
                <h2 className="display-4 fw-bold mb-2">183,126</h2>
                <p className="fw-semibold mb-0">Google Play Store Education Apps</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-stat-card text-center h-100">
                <h2 className="display-4 fw-bold mb-2">204,986</h2>
                <p className="fw-semibold mb-1">Apple App Store Education Apps</p>
                <small className="text-muted">188,558 free + 16,428 paid</small>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-stat-card text-center h-100">
                <h2 className="display-4 fw-bold mb-2">520,000+</h2>
                <p className="fw-semibold mb-0">Combined total education apps across all platforms</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-stat-card text-center h-100">
                <h2 className="display-4 fw-bold mb-2">43%</h2>
                <p className="fw-semibold mb-0">AI adoption rate in education apps by end of 2025</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-stat-card text-center h-100">
                <h2 className="display-4 fw-bold mb-2">~40%</h2>
                <p className="fw-semibold mb-1">AI EdTech apps accused of misleading marketing in 2025</p>
                <small className="text-muted">Prompting EU investigations</small>
              </div>
            </div>
          </div>
          <p className="mt-4 text-muted">
            With over half a million educational apps now available across platforms, the AI EdTech market has never been more competitive &mdash; or more scrutinized. The 43% AI adoption rate signals a fundamental shift: AI-powered learning is no longer a premium feature, it&apos;s the baseline expectation for any serious EdTech product.
          </p>
        </div>
      </section>

      <section id="ai-deep-dive" className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">AI DEEP DIVE</span>
          <h2 className="fw-bold mb-3">How AI is Used in Education Apps: Features, Functions &amp; Real Examples</h2>
          <p className="lead text-secondary mb-5">
            43% of commercially active education apps now feature at least one AI-driven functionality &mdash; up from near zero just five years ago. Here&apos;s a comprehensive breakdown of how AI is actually being deployed.
          </p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Automated Grading &amp; Rubric Feedback</h5>
                <p className="text-muted mb-0">AI eliminates manual grading hours by standardizing feedback against custom rubrics. Used by Gradescope, CoGrader, Markr, Kangaroos AI, and EssayGrader to grade at scale across large classes and LMS platforms like Canvas and Google Classroom.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Automated Quiz &amp; Flashcard Generation</h5>
                <p className="text-muted mb-0">Apps read uploaded documents, websites, or videos and instantly generate study materials. Edcafe AI, QuizGecko, Conker.ai, and Quizlet all use this to save educators hours of manual content creation.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Personalized 24/7 AI Tutors</h5>
                <p className="text-muted mb-0">Major platforms use AI to provide continuous support and individualized learning paths. Coursera Coach, edX Xpert Assistant, and DataCamp&apos;s AI assistant provide real-time feedback, code reviews, and structured study scheduling.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Conversational Language Practice</h5>
                <p className="text-muted mb-0">AI provides judgment-free, adaptive dialogue partners that correct pronunciation and grammar in real time. Duolingo Max, Speak, Praktika, and ELSA Speak all offer instant phoneme-level feedback and accent reduction.</p>
              </div>
            </div>
          </div>

          <h3 className="fw-bold mt-5 mb-4">Innovative AI Features in EdTech: Beyond the Basics</h3>
          <div className="row g-4">
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Grading Handwritten Logic &amp; Math</h6>
                <p className="text-muted small mb-0"><strong>Examino</strong> grades physical, handwritten papers directly from a smartphone scan, analyzing the actual logic of hand-drawn math proofs, schemas, and essays.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Socratic Interrogation</h6>
                <p className="text-muted small mb-0"><strong>Khanmigo</strong> (GPT-4) never just gives answers. It asks guiding questions to force students to think critically &mdash; true Socratic tutoring at scale.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">&quot;Chat with Your Flashcards&quot;</h6>
                <p className="text-muted small mb-0"><strong>FlashRecall</strong> lets users literally chat with a specific flashcard &mdash; turning static study cards into interactive tutoring sessions.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Transcribing Real-Life for Active Recall</h6>
                <p className="text-muted small mb-0"><strong>Recallify</strong> records and transcribes real-life conversations and lectures, then auto-generates active-recall quizzes from the personal data.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Safe AI Image Generation for Kids</h6>
                <p className="text-muted small mb-0"><strong>Askie</strong> (ages 4&ndash;12) answers complex questions at a child&apos;s developmental level and instantly generates custom educational images in a fully safe environment.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Live Presentation Interactivity</h6>
                <p className="text-muted small mb-0"><strong>ClassPoint AI</strong> reads the text on a teacher&apos;s PowerPoint slides in real time to generate live quiz questions based on Bloom&apos;s Taxonomy.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Algorithmic STEM Variables</h6>
                <p className="text-muted small mb-0"><strong>WIRIS Quizzes</strong> generates dynamic questions with random variables so no two students get the same numbers, and recognizes handwritten math formulas.</p>
              </div>
            </div>
            <div className="col-md-6 col-lg-4">
              <div className="pdf-feature-card h-100">
                <h6 className="fw-bold mb-2">Multi-Modal Quizzes with AI Imagery</h6>
                <p className="text-muted small mb-0"><strong>Toolsaday</strong> adapts quizzes to different learning styles using text-to-speech and an embedded AI image generator for visual quiz scenarios.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5 bg-light border-top">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">RISKS &amp; CHALLENGES</span>
          <h2 className="fw-bold mb-3">AI EdTech Risks &amp; Pitfalls: What Schools and Developers Must Avoid in 2026</h2>
          <p className="lead text-secondary mb-5">
            Integrating AI into education apps comes with significant risks. Here are the most critical pitfalls associated with AI-powered educational technology in 2026.
          </p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-risk-card h-100">
                <h5 className="fw-bold mb-3">Factually Incorrect Content (Hallucinations)</h5>
                <p className="text-muted mb-0">Large language models can &quot;hallucinate,&quot; generating factually incorrect educational material. Platforms that inadequately validate AI-generated instructional content face severe reputational and liability risks.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-risk-card h-100">
                <h5 className="fw-bold mb-3">Eroding Critical Thinking &amp; Overreliance</h5>
                <p className="text-muted mb-0">Over 70% of teachers worry that AI weakens students&apos; critical thinking and research skills. A major mistake is designing AI that simply provides immediate answers rather than guiding the learning process.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-risk-card h-100">
                <h5 className="fw-bold mb-3">Data Privacy, Security &amp; Compliance Failures</h5>
                <p className="text-muted mb-0">Apps that fail to embed compliance-by-design for GDPR, COPPA, or FERPA face massive fines and a complete loss of user trust.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-risk-card h-100">
                <h5 className="fw-bold mb-3">Loss of Human Connection</h5>
                <p className="text-muted mb-0">Over half of students agree that AI in the classroom makes them feel less connected to their teachers. AI should assist educators, not replace human motivation and socio-emotional support.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-risk-card h-100">
                <h5 className="fw-bold mb-3">Failing on Handwritten or Analog Work</h5>
                <p className="text-muted mb-0">Many general AI grading tools demand clean, typed text and fail to process handwritten assignments or complex math diagrams &mdash; forcing teachers to digitize everything manually first.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-risk-card h-100">
                <h5 className="fw-bold mb-3">Bias &amp; Unfair Treatment</h5>
                <p className="text-muted mb-0">AI in schools carries the real risk of treating students unfairly if algorithms carry inherent biases or evaluate diverse learners against rigid, flawed metrics.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">ENTERPRISE &amp; INSTITUTIONAL</span>
          <h2 className="fw-bold mb-3">Best Enterprise EdTech Software in 2026: AI Tools for Schools &amp; Businesses</h2>
          <p className="lead text-secondary mb-5">
            These AI-powered enterprise EdTech platforms are purpose-built to scale institutional operations &mdash; automating grading, streamlining assessments, and empowering educators across K&ndash;12, higher education, and corporate learning.
          </p>

          <h3 id="grading" className="fw-bold mt-4 mb-3">Best AI Grading Software &amp; Essay Analysis Tools (2026)</h3>
          <p className="text-muted mb-4">Manual grading is one of the most time-intensive tasks educators face. These platforms apply AI to deliver faster, rubric-aligned feedback at scale.</p>
          <div className="row g-4 mb-5">
            {byCategory("AI Grading & Essay Analysis").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="quiz" className="fw-bold mt-5 mb-3">Best AI Quiz Generators &amp; Online Assessment Platforms (2026)</h3>
          <p className="text-muted mb-4">From STEM algorithmic questions to secure high-stakes exams, these platforms eliminate the manual burden of test creation.</p>
          <div className="row g-4 mb-5">
            {byCategory("Quiz Generators").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="gamified" className="fw-bold mt-5 mb-3">Best Gamified EdTech &amp; Interactive Classroom Tools (2026)</h3>
          <p className="text-muted mb-4">Engagement is the cornerstone of effective learning. These AI-powered tools transform passive lessons into participatory experiences.</p>
          <div className="row g-4 mb-5">
            {byCategory("Gamified Tools").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
            {byCategory("All-in-One / Community").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="corporate" className="fw-bold mt-5 mb-3">Best AI Corporate Training &amp; Learning &amp; Development (L&amp;D) Platforms (2026)</h3>
          <p className="text-muted mb-4">Corporate training is the fastest-growing EdTech segment in 2026, projected to expand at an 18.6% CAGR through 2034.</p>
          <div className="row g-4 mb-5">
            {byCategory("Corporate L&D").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>
        </div>
      </section>

      <section id="creators" className="py-5 bg-light border-top">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">COURSE CREATORS &amp; COMMUNITY BUILDERS</span>
          <h2 className="fw-bold mb-3">Best Course Creation &amp; Community Building Platforms for Educators (2026)</h2>
          <p className="lead text-secondary mb-5">
            Educators, consultants, and training businesses are using white-label platforms to build their own branded learning apps, online courses, and learning communities &mdash; keeping 100% of their revenue and owning their audience.
          </p>
          <div className="row g-4">
            {byCategory("Course Creators").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <div className="row g-4 mt-4 text-center">
            <div className="col-md-4">
              <div className="pdf-stat-card h-100">
                <h3 className="display-5 fw-bold mb-2">85&ndash;95%</h3>
                <p className="small text-muted mb-0">Cohort-based completion rate on platforms like Disco &amp; Maven</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pdf-stat-card h-100">
                <h3 className="display-5 fw-bold mb-2">15%</h3>
                <p className="small text-muted mb-0">Average completion rate for traditional self-paced online courses</p>
              </div>
            </div>
            <div className="col-md-4">
              <div className="pdf-stat-card h-100">
                <h3 className="display-5 fw-bold mb-2">45&ndash;60%</h3>
                <p className="small text-muted mb-0">Hybrid model completion rate &mdash; the scalable sweet spot</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">LEARNER-FACING APPS</span>
          <h2 className="fw-bold mb-3">Best AI Learning Apps for Students in 2026: Tutors, Language &amp; Study Tools</h2>
          <p className="lead text-secondary mb-5">
            Designed for students, self-directed learners, and lifelong learners of all ages, these AI-powered learning apps deliver hyper-personalized, on-demand education experiences.
          </p>

          <h3 id="tutors" className="fw-bold mt-4 mb-3">Best AI Tutoring Apps for Higher Education &amp; Skill Building (2026)</h3>
          <div className="row g-4 mb-5">
            {byCategory("AI Tutors").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="language" className="fw-bold mt-5 mb-3">Best AI Language Learning Apps &amp; Conversation Practice Tools (2026)</h3>
          <div className="row g-4 mb-5">
            {byCategory("Language Learning").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="study" className="fw-bold mt-5 mb-3">Best AI Study Apps: Flashcards, Spaced Repetition &amp; Research Tools (2026)</h3>
          <div className="row g-4 mb-5">
            {byCategory("Study Aids").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="kids" className="fw-bold mt-5 mb-3">Best AI Learning Apps for Kids &amp; Early Childhood Education (2026)</h3>
          <div className="row g-4 mb-5">
            {byCategory("Kids Learning").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
            {byCategory("Personal Growth").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>

          <h3 id="microlearning" className="fw-bold mt-5 mb-3">Best Microlearning &amp; Brain Training Apps for Adults (2026)</h3>
          <div className="row g-4 mb-5">
            {byCategory("Microlearning").map(app => <AppCard key={app.slug} app={app} basePath={basePath} />)}
          </div>
        </div>
      </section>

      <section id="trends" className="py-5 bg-light border-top">
        <div className="container-fluid px-4 px-lg-5">
          <span className="pdf-tag mb-3 d-inline-block">2026 OUTLOOK</span>
          <h2 className="fw-bold mb-3">EdTech Trends 2026: The Future of AI in Education Apps</h2>
          <p className="lead text-secondary mb-5">
            What do the latest data and market signals tell us about the future of AI in education? Here are the biggest EdTech trends shaping AI-powered learning platforms in 2026 and beyond.
          </p>
          <div className="row g-4">
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Cohort-Based Learning is Winning</h5>
                <p className="text-muted mb-0">Platforms like Disco and Maven that combine AI with live, community-driven cohorts report completion rates of 85&ndash;95%, compared to just 15% for traditional self-paced courses.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Microlearning is the New Default</h5>
                <p className="text-muted mb-0">Busy professionals are adopting 5&ndash;15 minute learning bursts. Apps like Headway, Elevate, and Impulse are growing rapidly by fitting learning into commutes, breaks, and downtime.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Data Privacy is Non-Negotiable</h5>
                <p className="text-muted mb-0">With AI deeply embedded in education, FERPA, COPPA, and GDPR compliance are now baseline requirements for every serious EdTech platform.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Offline &amp; Low-Bandwidth Access</h5>
                <p className="text-muted mb-0">Top platforms are optimizing for offline learning &mdash; a foundational trend for reaching global and emerging markets where connectivity is inconsistent.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">Micro-Credentials Are Replacing Degrees</h5>
                <p className="text-muted mb-0">Nanodegrees and verified certificates from Google, Udacity, and Coursera are increasingly accepted by tech employers as equivalent to traditional qualifications.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="pdf-feature-card h-100">
                <h5 className="fw-bold mb-3">The Rise of the Creator Economy in EdTech</h5>
                <p className="text-muted mb-0">Educators, consultants, and training businesses are increasingly building their own white-label learning apps and communities using platforms like BuddyBoss and FreshLearn.</p>
              </div>
            </div>
          </div>

          <div className="mt-5 p-4 border-start border-primary border-4 bg-white rounded">
            <p className="mb-0 fw-semibold">
              Corporate training is the fastest-growing end-user segment in EdTech. Failing to address employee upskilling leaves out a massive portion of the 2026 market.
            </p>
            <small className="text-muted">&mdash; 2026 EdTech Market Analysis</small>
          </div>
        </div>
      </section>

      <style jsx global>{`
        .pdf-tag {
          display: inline-block;
          background: #efeaff;
          color: #5b3fdc;
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 0.75rem;
          font-weight: 700;
          letter-spacing: 0.6px;
        }
        .pdf-stat-card {
          background: #fff;
          border: 1px solid #eef0f5;
          border-radius: 12px;
          padding: 2rem 1.5rem;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .pdf-stat-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(16, 24, 40, 0.08);
        }
        .pdf-feature-card {
          background: #f7f5ff;
          border-radius: 14px;
          padding: 1.75rem;
          border: 1px solid #eae4ff;
        }
        .pdf-risk-card {
          background: #fff;
          border-radius: 14px;
          padding: 1.75rem;
          border: 1px solid #eee;
        }
        .pdf-app-card {
          background: #fff;
          border: 1px solid #eef0f5;
          transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;
          display: block;
        }
        .pdf-app-card:hover {
          border-color: #5b3fdc;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(91, 63, 220, 0.08);
        }
        .pdf-app-card h5 { color: #1a1a1a; }
        .pdf-app-card:hover h5 { color: #5b3fdc; }
      `}</style>
    </>
  );
}

function DetailsView({ slug, basePath }) {
  const data = getDetailsBySlug(slug);

  if (!data) {
    return (
      <div className="container-fluid px-4 px-lg-5 py-5 text-center">
        <h1 className="text-danger fw-bold">404 - Entry Not Found</h1>
        <p>The item &quot;{slug}&quot; is not currently in the 2026 directory.</p>
        <Link href={basePath}><a className="btn btn-primary mt-3">Return Home</a></Link>
      </div>
    );
  }

  return (
    <div className="container-fluid px-4 px-lg-5 py-5">
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link href={basePath}><a className="text-decoration-none">Home</a></Link></li>
          <li className="breadcrumb-item"><Link href={basePath}><a className="text-decoration-none">Directory</a></Link></li>
          <li className="breadcrumb-item active" aria-current="page">{data.name}</li>
        </ol>
      </nav>

      <div className="row g-5">
        <div className="col-lg-8">
          <div className="mb-4">
            <span className="badge bg-primary px-3 py-2 rounded-pill mb-3">{data.category}</span>
            <h1 className="fw-bold display-4 text-dark mb-3">{data.name}</h1>
            <div className="lead text-dark fs-4 p-4 bg-light rounded border-start border-primary border-4 shadow-sm">
              &quot;{data.desc}&quot;
            </div>
          </div>

          <hr className="my-5" />

          <h3 className="fw-bold mb-3">2026 Market Context</h3>
          <p className="text-muted" style={{ lineHeight: '1.8' }}>
            As of April 2026, the global education app market has reached an unprecedented scale of over 520,000 apps.
            The 43% AI adoption rate signals a fundamental shift: AI-powered learning is no longer a premium feature,
            it&apos;s the baseline expectation for any serious EdTech product. Whether evaluating {data.name} for
            institutional adoption or personal learning, verify compliance with major data privacy frameworks (FERPA, GDPR, COPPA).
          </p>
        </div>

        <div className="col-lg-4">
          <div className="card shadow-sm border-0 bg-light p-3">
            <div className="card-body">
              <h5 className="card-title fw-bold mb-4">Listing Info</h5>
              <ul className="list-group list-group-flush bg-transparent">
                <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
                  <span className="text-muted">Slug Path</span>
                  <span className="fw-medium">/{data.slug}</span>
                </li>
                <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
                  <span className="text-muted">Classification</span>
                  <span className="fw-medium text-end">{data.category}</span>
                </li>
                <li className="list-group-item bg-transparent px-0 d-flex justify-content-between">
                  <span className="text-muted">Last Updated</span>
                  <span className="fw-medium">April 2026</span>
                </li>
              </ul>
              <button className="btn btn-outline-primary w-100 mt-4 fw-bold py-2 shadow-sm">Share Listing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function EdTechDirectory({ basePath }) {
  const router = useRouter();
  const slugArray = Array.isArray(router.query.slug) ? router.query.slug : [];

  let content;
  if (slugArray.length === 0) {
    content = <HomeView basePath={basePath} />;
  } else if (slugArray[0] === 'directory' && slugArray[1]) {
    content = <DetailsView slug={slugArray[1]} basePath={basePath} />;
  } else {
    content = (
      <div className="container-fluid px-4 px-lg-5 py-5 text-center">
        <h1 className="fw-bold">Path Not Found</h1>
        <p>Navigated to: /{slugArray.join('/')}</p>
        <Link href={basePath}><a className="btn btn-primary mt-3">Go Home</a></Link>
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Best AI Education Apps in 2026: The Ultimate Guide for Schools &amp; Learners</title>
        <meta name="description" content="Comprehensive 2026 directory of AI-powered educational apps: grading, quizzes, tutors, language learning, study aids, creator platforms, and more." />
      </Head>
      <div className="min-vh-100 bg-white" style={{ paddingTop: '80px' }}>
        <main>{content}</main>
      </div>
    </>
  );
}
