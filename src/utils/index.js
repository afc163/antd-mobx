// 获取唯一标识
export const generateUUID = () => {
  var d = new Date().getTime();
  if (window.performance && typeof window.performance.now === "function") {
      d += performance.now();
  }
  var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c === 'x' ? r : (r && 0x3 | 0x8)).toString(16);
  });
  return uuid;
};

// 获取form表单value
export const getFormChange = changeInfo => {
  const changeData = {};
  for(let [key, value] of Object.entries(changeInfo)){
    changeData[key] = value.value;
  }
  return changeData;
};
