import { findSourceMap } from 'module';
import fetch from 'node-fetch';
import { getDepartments } from './departments.js';

/**
 * Prints start and end in a delayed loop
 * 
 * start - first number
 * end - last number, exclusive
 */
async function calculateTotalUmdCourses(departments) {
    let totalCourses = 0;

    for (let i = 0; i < departments.length; i++) {
 
        totalCourses += await getTotalCoursesInDept(departments[i].dept_id);

    }
    return totalCourses;
}

async function getTotalCoursesInDept(dept) {
    let total = 0;

    try {
        let url = `https://api.umd.io/v1/courses?dept_id=${dept}&per_page=100&page=`;
        let res = await fetch(url + '1');
        let courses = await res.json();
        total = courses.length;

        if (total >= 100) {
            res = await fetch(url + '2');
            courses = await res.json();
            total += courses.length
        }

    } catch (error) {
        console.log('could not get departments');
    } finally {
        return total;
    }
}

async function doWork() {
    const totalCourses = await calculateTotalUmdCourses(getDepartments());
    console.log(totalCourses);
    
    // 203
}

doWork();

// delayedLoop(0, 5);
// delayedLoop(getDepartments());
// console.log(getDepartments());