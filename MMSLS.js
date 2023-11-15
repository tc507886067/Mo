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
    
    "https://www.maimemo.com/page?sid=411226590bd995ce38cd0b853aa2dad3&uid=14053084&pid=c715ca1d11e18bb9088a8cc495f61933&tid=dc8fa23ec86801255b760d4c1f9ff98d&view_time=1700024374&bind_user=0&create_user=0&tid=dc8fa23ec86801255b760d4c1f9ff98d&sid=411226590bd995ce38cd0b853aa2dad3&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit-EZNAr0bVnRjT-tYvfkL1Q&token=1101ca0ca74c8e699e39bf3537b167fe76f32a4b5677407f698470176772e392&expired_time=2024-11-14T12:59:33%2008:00",
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
