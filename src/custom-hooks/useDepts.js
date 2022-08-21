import { useState, useEffect } from 'react';
import getDepartmentsObj from '../data/sortedDb.js';
const useDepts = (letter) => {
    // State
    const departmentsObj = getDepartmentsObj();

    const [departments, setDepartments] = useState(departmentsObj['startsWith' + letter]);
    const colNamesForDepts = ['Dept. Id', 'Department'];
    
    useEffect(() => {
        let currentKey = 'startsWith' + letter; 
        setDepartments(departmentsObj[currentKey]);
    }, [letter]);

    return { departments, colNamesForDepts };
}

export default useDepts;