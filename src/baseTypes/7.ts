/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum days{
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday
}

function isWeekend(day: days): boolean{
  if (day === days.saturday || days.sunday) {
    return true;
  } else {
    return false;
  }
}