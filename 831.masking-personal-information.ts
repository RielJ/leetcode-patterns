// @leet start
function maskPII(s: string): string {
  const atIndex = s.indexOf("@");

  if (atIndex !== -1)
    return (s[0] + "*****" + s.slice(atIndex - 1)).toLowerCase();

  const cleanNumber = s.replace(/[+\-() ]/g, "");
  const ccLength = cleanNumber.length % 10;
  const cc = "+" + "*".repeat(ccLength) + "-";

  return (
    (ccLength ? cc : "") +
    "***-***-" +
    cleanNumber.slice(cleanNumber.length - 4)
  );
}
// @leet end
