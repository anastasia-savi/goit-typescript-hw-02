/*
  Є функція getPromise(), яка повертає проміс, що дозволяється в масив, що містить рядки та числа. 
  Доповніть цю функцію, використовуючи generics, щоб вона повертала правильний тип.
*/

function getPromise<T>(): Promise<T> {
  const promise: Promise<T> = new Promise((resolve) => {
    resolve(["Text", 50] as unknown as T);
  });
  return promise;
}

getPromise <Array<string|number>>()
.then((data) => {
  console.log(data);
});

export {};