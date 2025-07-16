//Part1 
const users = [
    { name: 'Alice', balance: 5100 },
    { name: 'Bob', balance: 7000 },
    { name: 'Charlie', balance: 8816 }
  ];
  
const calculateTotalBalance = users => {
    return users.reduce((total, user) => total + user.balance, 0);
  };
  
  console.log(calculateTotalBalance(users));