//---------------------------------------------------------------------------//
// Credits to konaraddi on GitHub for the parsePrereqs function and 
// use of regex.
//
// https://github.com/konaraddi/umd-course-vis/blob/master/src/parsePrereqs.js
//---------------------------------------------------------------------------//

function parseCourseRelationships(str) {
    // LATER change @param str to @param relationships
    // @param relationships - object with prereqs and coreqs
    // 
    // implement this later
    // const parsedPrereqs = parsePrereqs(relationships.prereqs);
    // const parsedCoreqs = parseCoreqs(relationships.coreqs);
    // 
    // const relationships = {
    //     prereqs: parsedPrereqs,
    //     coreqs: parsedCoreqs
    // }
    //
    // return relationships
    
    const parsedPrereqs = parsePrereqs(str);
    return parsedPrereqs;
}

function parsePrereqs(str) {
    let prereqs = {
        // student must take these courses
        mustTake: [],

        // student must take ONE of several prerequisites
        pickOneFromEach: [],

        // student must take TWO of several prerequisites
        pickTwoFromEach: []
    };

    /**
     * There are strings passed in where it contains the term '2 courses from'. This conflicts with
     * the regex statement below, str.includes("from"), since its made to populate
     * pickOneFromSeveral. Furthermore, '2 courses from' must be removed from the string, that is 
     * the remaining string. Furthermore, pickTwoFromEachParsed is checked first before doing the
     * rest.
     */
    let [remaining, pickTwoFromEachParsed] = parsePickTwoFromEach(str);
    str = remaining; // '2 courses from' is now removed, so treat remaining as the main str to parse
    prereqs.pickTwoFromEach = pickTwoFromEachParsed;

    prereqs.mustTake = str.match(/[A-Z]{4}[0-9]{3}[A-Z]?/g);
  
    if (str.includes("from")  || str.includes("or equivalent programming experience")) {
      const regex = /from \(([A-Z|0-9|,| ]*)\)/g;
      let pickOneFrom;
  
      while ((pickOneFrom = regex.exec(str)) !== null) {
        prereqs.pickOneFromEach.push(pickOneFrom[1].split(", "));
      }
  
      for (let i = 0; i < prereqs.pickOneFromEach.length; i++) {
        prereqs.mustTake = prereqs.mustTake.filter(
          course => !prereqs.pickOneFromEach[i].includes(course)
        );
      }
    }
  
    if (prereqs.mustTake == null) {
      prereqs.mustTake = [];
    }

    if (prereqs.pickTwoFromEach.length > 0) {
      let temp = prereqs.mustTake;

      prereqs.mustTake = [];
      prereqs.pickOneFromEach = [];
      prereqs.pickOneFromEach.push(temp);
    }
  
    return prereqs;
}

function parsePickTwoFromEach(str) {
  let remaining = str;
  let pickTwoFromEach = [];

  let start = str.indexOf('2 courses from');
  if (start !== -1) {
      let end = str.indexOf(';', start);

      let strSnippet = str.slice(start + 16, end - 1);
      strSnippet = strSnippet.replace('or ', '');

      pickTwoFromEach = strSnippet.split(", ");
      remaining = str.slice(0, start - 8) + str.slice(end - 1);
  }

  return [remaining, pickTwoFromEach];
}

export default parseCourseRelationships;