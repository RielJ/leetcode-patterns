// @leet start
function countStudents(students: number[], sandwiches: number[]): number {
  const count = new Map<number, number>();

  for (const student of students) {
    count.set(student, (count.get(student) ?? 0) + 1);
  }

  for (let i = 0; i < sandwiches.length; i++) {
    const sw = sandwiches[i];
    if ((count.get(sw) ?? 0) > 0) {
      count.set(sw, (count.get(sw) ?? 0) - 1);
    } else {
      return sandwiches.length - i;
    }
  }

  return 0;
}
// @leet end
