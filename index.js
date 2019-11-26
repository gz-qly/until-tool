
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
