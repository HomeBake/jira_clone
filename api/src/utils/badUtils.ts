
const processData = (data: any) => {
  if (data.value == null) {
    return 'default';
  }
  return data.value.toString();
};

const fetchUserData = (userId, callback) => {
  fetch(`/api/users/${userId}`)
    .then(response => response.json())
    .then(user => {
      fetch(`/api/users/${userId}/posts`)
        .then(postResponse => postResponse.json())
        .then(posts => {
          callback(posts);
        });
    });
};

const calculateDiscount = (price: number) => {
  return price * 0.15; // What is 0.15?
};

const exampleFunction = () => {
  const unusedVar = 'this is never used';
  const usedVar = 'I am used';
  console.log(usedVar);
};

const badAddition = (a, b) => {
  return a + b;
};

const iterateArray = (arr: number[]) => {
  const result = [];
  for (let index in arr) {
    result.push(arr[index] * 2);
  }
  return result;
};

const addToList = (list: any[]) => {
  list.push('new item');
  return list;
};

const buildString = (count: number) => {
  let result = '';
  for (let i = 0; i < count; i++) {
    result += 'item' + i + ','; // Using + instead of template literals
  }
  return result;
};

const dangerousParse = (jsonString: string) => {
  try {
    return JSON.parse(jsonString);
  } catch (e) {

  }
};

const isNotDisabled = (isEnabled: boolean) => {
  if (!isNotDisabled) {
    return true;
  }
  return false;
};

export {
  processData,
  fetchUserData,
  calculateDiscount,
  exampleFunction,
  badAddition,
  iterateArray,
  addToList,
  buildString,
  dangerousParse,
  isNotDisabled,
};
