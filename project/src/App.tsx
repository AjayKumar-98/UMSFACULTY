import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
const Home = React.lazy(() => import('./pages/Home'));
const Login = React.lazy(() => import('./pages/Login'));
const StudentPortal = React.lazy(() => import('./pages/StudentPortal'));
const StudentDashboard = React.lazy(() => import('./pages/dashboard/StudentDashboard'));
const FacultyDashboard = React.lazy(() => import('./pages/dashboard/FacultyDashboard'));
const AdminDashboard = React.lazy(() => import('./pages/dashboard/AdminDashboard'));

// Faculty Components
const Courses = React.lazy(() => import('./pages/faculty/Courses'));
const Students = React.lazy(() => import('./pages/faculty/Students'));
const Attendance = React.lazy(() => import('./pages/faculty/Attendance'));
const Grades = React.lazy(() => import('./pages/faculty/Grades'));

// About Routes
const Overview = React.lazy(() => import('./pages/about/Overview'));
const History = React.lazy(() => import('./pages/about/History'));
const Leadership = React.lazy(() => import('./pages/about/Leadership'));
const Infrastructure = React.lazy(() => import('./pages/about/Infrastructure'));
const Location = React.lazy(() => import('./pages/about/Location'));
const Alumni = React.lazy(() => import('./pages/about/Alumni'));
const AboutFaculty = React.lazy(() => import('./pages/about/Faculty'));
const ContactInfo = React.lazy(() => import('./pages/about/ContactInfo'));

// Auth Routes
const ForgotPassword = React.lazy(() => import('./pages/ForgotPassword'));
const ResetPassword = React.lazy(() => import('./pages/ResetPassword'));

// Academics Routes
const Programs = React.lazy(() => import('./pages/academics/Programs'));
const Departments = React.lazy(() => import('./pages/academics/Departments'));
const Faculty = React.lazy(() => import('./pages/academics/Faculty'));
const Calendar = React.lazy(() => import('./pages/academics/Calendar'));

// Admissions Routes
const Apply = React.lazy(() => import('./pages/admissions/Apply'));
const Requirements = React.lazy(() => import('./pages/admissions/Requirements'));
const FinancialAid = React.lazy(() => import('./pages/admissions/FinancialAid'));
const International = React.lazy(() => import('./pages/admissions/International'));
const AdmissionProcess = React.lazy(() => import('./pages/admissions/AdmissionProcess'));
const FeeStructure = React.lazy(() => import('./pages/admissions/FeeStructure'));

// Campus Life Routes
const Housing = React.lazy(() => import('./pages/campus-life/Housing'));
const Activities = React.lazy(() => import('./pages/campus-life/Activities'));
const Facilities = React.lazy(() => import('./pages/campus-life/Facilities'));

// Research Routes
const Centers = React.lazy(() => import('./pages/research/Centers'));
const Publications = React.lazy(() => import('./pages/research/Publications'));
const Projects = React.lazy(() => import('./pages/research/Projects'));

// Add this with other lazy imports at the top
const Test = React.lazy(() => import('./pages/Test'));

import './styles/animations.css';

// Loading component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
  </div>
);

// Layout wrapper component
const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const isDashboardRoute = location.pathname.includes('/dashboard/') ||
    location.pathname.includes('/faculty-dashboard/') ||
    location.pathname.includes('/student-portal');

  if (isDashboardRoute) {
    return <>{children}</>;
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      <Navbar />
      <div className="flex-grow">
        {children}
      </div>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <Router>
      <Layout>
        <Suspense fallback={<LoadingFallback />}>
          <div className="pt-20">
            <Routes>
              {/* Test route */}
              <Route path="/test" element={<Test />} />

              {/* Default route redirect to home */}
              <Route path="/" element={<Home />} />

              {/* Authentication */}
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/student-portal" element={<StudentPortal />} />

              {/* Dashboard Routes */}
              <Route path="/dashboard">
                <Route path="student" element={<StudentDashboard />} />
                <Route path="admin" element={<AdminDashboard />} />
              </Route>

              {/* Faculty Dashboard Routes */}
              <Route path="/faculty-dashboard/*" element={<FacultyDashboard />} />

              {/* About Routes */}
              <Route path="/about">
                <Route path="overview" element={<Overview />} />
                <Route path="history" element={<History />} />
                <Route path="leadership" element={<Leadership />} />
                <Route path="infrastructure" element={<Infrastructure />} />
                <Route path="location" element={<Location />} />
                <Route path="alumni" element={<Alumni />} />
                <Route path="faculty" element={<AboutFaculty />} />
                <Route path="contact" element={<ContactInfo />} />
              </Route>

              {/* Academics Routes */}
              <Route path="/academics">
                <Route path="programs" element={<Programs />} />
                <Route path="departments" element={<Departments />} />
                <Route path="faculty" element={<Faculty />} />
                <Route path="calendar" element={<Calendar />} />
              </Route>

              {/* Admissions Routes */}
              <Route path="/admissions">
                <Route path="apply" element={<Apply />} />
                <Route path="process" element={<AdmissionProcess />} />
                <Route path="fees" element={<FeeStructure />} />
                <Route path="requirements" element={<Requirements />} />
                <Route path="financial-aid" element={<FinancialAid />} />
                <Route path="international" element={<International />} />
              </Route>

              {/* Campus Life Routes */}
              <Route path="/campus-life">
                <Route path="housing" element={<Housing />} />
                <Route path="activities" element={<Activities />} />
                <Route path="facilities" element={<Facilities />} />
              </Route>

              {/* Research Routes */}
              <Route path="/research">
                <Route path="centers" element={<Centers />} />
                <Route path="publications" element={<Publications />} />
                <Route path="projects" element={<Projects />} />
              </Route>

              {/* Catch all route - redirect to home */}
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </div>
        </Suspense>
      </Layout>
    </Router>
  );
}

export default App;