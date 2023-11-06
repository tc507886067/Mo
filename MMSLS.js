/**
利用随机概率实现多账户运行

填写格式如下：


const MMSLS = [
    
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
    "https://www.maimemo.com/share/page?uid=15249640&pid=afaa99854200461684ec24c45b6aa6e4&tid=57653da5c7394f126d7923c9044b4dc1",
  ]
=====================以上为范例！=====================

=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
=====================请在下面编辑=====================
 */
const MMSLS = [
    
    "https://www.maimemo.com/page?sid=cb7629daa529e73209c85dc4ad7f6165&uid=14053084&pid=ce5858ae11d84ecf539913e7b6e62b16&tid=21e1ceeab47dfde085811ca45d193031&view_time=1699243324&bind_user=0&create_user=0&tid=21e1ceeab47dfde085811ca45d193031&sid=cb7629daa529e73209c85dc4ad7f6165&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit-EZNAr0bVnRjT-tYvfkL1Q&token=0ad890f9648f334b24e33f3acd5530a645d831e8fd1448dcb2f21e4849e0d2f0&expired_time=2024-11-05T12:02:04%2008:00
",
  ]
  /**
   * 生成随机数字
   * @param {number} min 最小值（包含）
   * @param {number} max 最大值（不包含）
   */
  function randomNumber(min = 0, max = 100) {
    return Math.min(Math.floor(min + Math.random() * (max - min)), max);
  }
  const MMSL_random = MMSLS[randomNumber(0, MMSLS.length)];
  
  module.exports = {
    MMSL_random
  }
