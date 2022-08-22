import { useState, useEffect } from "react";

const useCourses = (department, deptConfirmed, setIsPending) => {
    const [courses, setCourses] = useState(null);
    const colNamesForCourses = ['Course Id', 'Course'];
    const courseId = 'course_id';


    useEffect(() => {
        async function getCourses() {
            const url = `https://api.umd.io/v1/courses?dept_id=${department}&per_page=100&page=`;
            let tempCourses = [];
            try {
                let res;
                let coursesInDepartment;
        
                for (let page = 1; page <= 2; page++) {
                    res = await fetch(url + page);
                    coursesInDepartment = await res.json();
                    tempCourses.push(
                        ...coursesInDepartment.map(
                            ({course_id, name}) => ({course_id, name})
                        ));
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsPending(false);
            }

            setCourses(tempCourses);
        }

        if (deptConfirmed) {
            getCourses();
        }
    }, [deptConfirmed])

    return { courses, colNamesForCourses, courseId };
}

export default useCourses;