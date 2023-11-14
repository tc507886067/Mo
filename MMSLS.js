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
    
    "https://www.maimemo.com/page?sid=e706df3271420551d5153c731ec388d6&uid=14053084&pid=ecb08be95727e206e629213092e90262&tid=e76038ca2dbe8d431d8d1554bf556d21&view_time=1699937958&bind_user=0&create_user=0&tid=e76038ca2dbe8d431d8d1554bf556d21&sid=e706df3271420551d5153c731ec388d6&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit-EZNAr0bVnRjT-tYvfkL1Q&token=b12a658008baf42da24c40e1460694084ad535a9d9d843c7a4e718311e3dc7ff&expired_time=2024-11-13T12:59:18%2008:00",
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
