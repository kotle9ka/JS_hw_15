//Part1 
const users1 = [
    { name: 'Alice', balance: 5100 },
    { name: 'Bob', balance: 7000 },
    { name: 'Charlie', balance: 8816 }
  ];
  
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users1));
  //Part2
  const users = [
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Goldie Gentry"]
    },
    {
      name: "Sheree Anthony",
      friends: ["Briana Decker", "Elma Head"]
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Sheree Anthony"]
    },
    {
      name: "Carey Barr",
      friends: ["Elma Head"]
    }
  ];
  
  const getUsersWithFriend = (users, friendName) => {
    return users
      .filter(user => user.friends.includes(friendName))
      .map(user => user.name);
  };
  
  console.log(getUsersWithFriend(users, 'Briana Decker')); 

  
  console.log(getUsersWithFriend(users, 'Goldie Gentry')); 

  //Part3
  const users2 = [
    {
      name: "Moore Hensley",
      friends: ["Sharron Pace"],
    },
    {
      name: "Sharlene Bush",
      friends: ["Briana Decker", "Goldie Gentry"],
    },
    {
      name: "Elma Head",
      friends: ["Goldie Gentry", "Aisha Tran"],
    },
    {
      name: "Carey Barr",
      friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
    },
    {
      name: "Blackburn Dotson",
      friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
    },
    {
      name: "Sheree Anthony",
      friends: ["Goldie Gentry", "Briana Decker", "Sharlene Bush", "Elma Head"],
    },
    {
      name: "Ross Vazquez",
      friends: [
        "Marilyn Mcintosh",
        "Padilla Garrison",
        "Naomi Buckner",
        "Goldie Gentry",
        "Aisha Tran",
      ],
    },
  ];
  
  const getNamesSortedByFriendsCount = users2 => {
    return [...users2] 
      .sort((a, b) => a.friends.length - b.friends.length) 
      .map(user => user.name);
  };
  
  console.log(getNamesSortedByFriendsCount(users2));
  
  //Part4
  const users3 = [
    {
      name: "Moore Hensley",
      skills: ["ipsum", "lorem"],
    },
    {
      name: "Sharlene Bush",
      skills: ["tempor", "mollit", "commodo", "veniam", "ipsum"],
    },
    {
      name: "Elma Head",
      skills: ["adipisicing", "irure", "velit"],
    },
    {
      name: "Carey Barr",
      skills: ["ut", "ex", "laborum", "mollit"],
    },
    {
      name: "Blackburn Dotson",
      skills: ["non", "amet", "ipsum"],
    },
    {
      name: "Sheree Anthony",
      skills: ["lorem", "veniam", "culpa"],
    },
    {
      name: "Ross Vazquez",
      skills: ["nulla", "anim", "proident", "nostrud"],
    },
  ];
  
  const getSortedUniqueSkills = users3 => {
    return users3
      .flatMap(user => user.skills)     
      .filter((skill, index, arr) => arr.indexOf(skill) === index)
      .sort(); 
  };
  
  console.log(getSortedUniqueSkills(users3));
  