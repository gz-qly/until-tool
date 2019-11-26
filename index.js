
/**
 * 检查 `value` 是否是空值，包括：`undefined`、`null`、`''`、`false`、`true`、`[]`、`{}`。
 *
 * @param value 要检查的值
 * @returns 是（true）或否（false）
 */
function isEmpty(value) {
  return [undefined, null, '', false, true].some(function (item) { return item === value; })
    || (Array.isArray(value) && value.length === 0)
    || (isPlainObject(value) && (function () {
      for (var _ in value) {
        return false;
      }
      return true;
    })());
}
exports.isEmpty = isEmpty;
