/*
给你两个版本号 version1 和 version2 ，请你比较它们。
版本号由一个或多个修订号组成，各修订号由一个 '.' 连接。每个修订号由 多位数字 组成，可能包含 前导零 。每个版本号至少包含一个字符。修订号从左到右编号，下标从 0 开始，最左边的修订号下标为 0 ，下一个修订号下标为 1 ，以此类推。例如，2.5.33 和 0.1 都是有效的版本号。
比较版本号时，请按从左到右的顺序依次比较它们的修订号。比较修订号时，只需比较 忽略任何前导零后的整数值 。也就是说，修订号 1 和修订号 001 相等 。如果版本号没有指定某个下标处的修订号，则该修订号视为 0 。例如，版本 1.0 小于版本 1.1 ，因为它们下标为 0 的修订号相同，而下标为 1 的修订号分别为 0 和 1 ，0 < 1 。

返回规则如下：

如果 version1 > version2 返回 1，
如果 version1 < version2 返回 -1，
除此之外返回 0。

输入：version1 = "1.01", version2 = "1.001"
输出：0
解释：忽略前导零，"01" 和 "001" 都表示相同的整数 "1"

输入：version1 = "0.1", version2 = "1.1"
输出：-1
解释：version1 中下标为 0 的修订号是 "0"，version2 中下标为 0 的修订号是 "1" 。0 < 1，所以 version1 < version2
*/

/**
 * @param {string} version1
 * @param {string} version2
 * @return {number}
 */
/*
  思路： 
    1.分别将字符串分割为数组 
    2.取两个数组中较大值作为遍历次数，可能会出现 "1.0.1" 和 "1" 比较的情况
    3.在元素不等长的情况下，当元素为 undefined时取0，否则直接使用 parseInt 转数值比较
*/
var compareVersion = function (version1, version2) {
  const ver1Arr = version1.split(".");
  const ver2Arr = version2.split(".");
  let n = Math.max(version1.length, version2.length);
  for (let i = 0; i < n; i++) {
    let item1 = ver1Arr[i] === undefined ? 0 : parseInt(ver1Arr[i]),
      item2 = ver2Arr[i] === undefined ? 0 : parseInt(ver2Arr[i]);

    if (item1 > item2) {
      return 1;
    } else if (item1 < item2) {
      return -1;
    }
  }
  return 0;
};
