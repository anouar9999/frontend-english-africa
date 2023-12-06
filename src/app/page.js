import AdmissionsProcess from '@/components/AdmissionsProcess'
import ApplyAdmission from '@/components/ApplyAdmission'
import Banner from '@/components/Banner'
import Courses from '@/components/Courses'
import TeachingQualification from '@/components/TeachingQualification'
import Testimonials from '@/components/Testimonials'
import TimeTable from '@/components/TimeTable'
import WhyChoose from '@/components/WhyChoose'
import { use } from 'react'


async function getTeacherCourses() {
  const res = await fetch(`${process.env.API_URL}/teacher-courses?populate=*&sort[0]=times`,{ cache: 'no-store' });
  return res.json();
  
}
async function getHomePage() {
  const res = await fetch(`${process.env.API_URL}/homepage?populate[0]=header.backgroundImage&populate[1]=CallToAction&populate[2]=TeachingQualification.image&populate[3]=whyChoose.image&populate[4]=whyChoose.keys&populate[5]=TeacherCourse&populate[6]=CulturalCourse&populate[7]=Service.Service.icon&populate[8]=TimeTable&populate[9]=Testimonial`,{ cache: 'no-store' });
  return res.json();
  
}
async function getCulturalCourses() {
  const res = await fetch(`${process.env.API_URL}/cultural-courses?populate=*&sort[0]=times`,{ cache: 'no-store' });
  return res.json();
 
}

const coursesPromise = getTeacherCourses() ,culturalCoursesPromise = getCulturalCourses()
const homepagePromise = getHomePage()
export default  function  Home() {
  const homepage = use(homepagePromise)
  const courses = use(coursesPromise)
  const culturalCourses = use(culturalCoursesPromise)
  return (
   <>
    <Banner  data={homepage.data.attributes.header}/>
    <TeachingQualification  data={homepage.data.attributes.TeachingQualification} />
    <WhyChoose data={homepage.data.attributes.whyChoose} />
    <Courses title={homepage.data.attributes.TeacherCourse.Title} courses={courses} />
    <ApplyAdmission titles={homepage.data.attributes.CallToAction} />  
    <Courses title={homepage.data.attributes.CulturalCourse.Title} courses={culturalCourses} />
    <AdmissionsProcess title={homepage.data.attributes.Service.Title} data={homepage.data.attributes.Service.Service}  />
    <TimeTable title={homepage.data.attributes.TimeTable.Title} />
    <Testimonials  title={homepage.data.attributes.Testimonial.Title}/> 
   </>
  )
}
