var arr = [1, 2, 3];
arr.pop();
console.log(arr);

var obj = {
  name: "Yoyok",
  age: 25
};

obj.brewok = true;

console.log(obj);

var students = [
  {
    name: "Yoyok",
    age: 25
  },
  {
    name: "Fadhil",
    age: 19
  }
];

for (var i = 0; i < students.length; i++) {
    console.log(students[i].name);
  students[i].age++;
}

var newStudent = {
  name: "Jumadi",
  age: 18
};

students.push(newStudent);

console.log(students);

var students = [
  ["Yoyok", 25],
  ["Fadhil", 19],
  ["Jumadi", 18]
];

var fields = ["name", "age"];

var arr = [];

for (var i = 0; i < students.length; i++) {
  var obj = {};
  for (var j = 0; j < fields.length; j++) {
    obj[fields[j]] = students[i][j];
  }
  arr.push(obj);
}

console.log(arr);

var scores = [
  {
    name: "Yoyok",
    score: 100
  },
  {
    name: "Fadhil",
    score: 95
  },
  {
    name: "Jumadi",
    score: 100
  },
  {
    name: "Audrick",
    score: 40
  },
  {
    name: "Ayu",
    score: 55
  }
];

function getScore(input) {
  var obj = {
    passed: [],
    failed: [],
    average: 0
  };
  for (var i = 0; i < input.length; i++) {
    if (input[i].score >= 60) {
      obj.passed.push(input[i].name);
    } else {
      obj.failed.push(input[i].name);
    }
    obj.average += input[i].score;
  }
  obj.average /= input.length;
  return obj;
}

console.log(getScore(scores));

// /**
//  * {
//  *   "passed": ["Yoyok", "Fadhil", "Jumadi"],
//  *   "failed": ["Audrick", "Ayu"],
//  *   "average": sekian
//  * }
//  */

var scores = [
  {
    name: "Fadhil",
    score: 95
  },
  {
    name: "Audrick",
    score: 40
  },
  {
    name: "Yoyok",
    score: 100
  },
  {
    name: "Jumadi",
    score: 100
  },
  {
    name: "Ayu",
    score: 55
  }
];

for (var i = 0; i < scores.length; i++) {
  for (var j = i + 1; j < scores.length; j++) {
    if (scores[j].score > scores[i].score) {
      var temp = scores[j];
      scores[j] = scores[i];
      scores[i] = temp;
    }
  }
}

scores.sort((a, b) => b.score - a.score);

console.log(scores);

var arr = [
  {
    name: "Fadhil",
    scores: [
      {
        week: 3,
        score: 100
      },
      {
        week: 5,
        score: 103
      },
      {
        week: 6,
        score: 200
      }
    ]
  },
  {
    name: "Jumadi",
    scores: [
      {
        week: 3,
        score: 95
      },
      {
        week: 5,
        score: 103
      },
      {
        week: 6,
        score: 103
      }
    ]
  }
];

var arr = [1, 2, 3];
var arr2 = arr;
arr2.push(4);

console.log(arr);
// console.log(arr2);

var obj = {
  name: "Fadhil"
};

var obj2 = {
  name: obj.name
};
obj2.name = "Kholid";

console.log(obj);
console.log(obj2);
