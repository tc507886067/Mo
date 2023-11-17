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
    
    "https://www.maimemo.com/page?sid=6198a47c5fb945f749646eff71a93b58&uid=14053084&pid=1bf25d8bf75c3fa500a13ed9b6cc7793&tid=ce9a8b703ec35d8f6749388656183914&view_time=1700184312&bind_user=0&create_user=0&tid=ce9a8b703ec35d8f6749388656183914&sid=6198a47c5fb945f749646eff71a93b58&oauth=wechat_wx6a4680fa1ef1b496&unionid=o6IDit-EZNAr0bVnRjT-tYvfkL1Q&token=1c2fbef33d02116d5db94871db1a2355c1b035983dae310c7230853ded818036&expired_time=2024-11-16T09:25:12%2008:00",
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
