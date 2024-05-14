export namespace isDevice {
  export function isMobile() {
    return (
      isBrowser() &&
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    );
  }
  export function isTablet() {
    return isBrowser() && /iPad/i.test(navigator.userAgent);
  }
  export function isDesktop() {
    return isBrowser() && !isMobile() && !isTablet();
  }
}

export namespace isEngine {
  export function isWebKit() {
    return isBrowser() && /AppleWebKit/i.test(navigator.userAgent);
  }
  export function isGecko() {
    return isBrowser() && /Gecko\//i.test(navigator.userAgent);
  }
  export function isPresto() {
    return isBrowser() && /Presto\//i.test(navigator.userAgent);
  }
  export function isTrident() {
    return isBrowser() && /Trident\//i.test(navigator.userAgent);
  }
  export function isBlink() {
    return isBrowser() && /Chrome\//i.test(navigator.userAgent);
  }
  export function isEdgeHTML() {
    return isBrowser() && /Edge\//i.test(navigator.userAgent);
  }
  export function isEdgeChromium() {
    return isBrowser() && /Edg\//i.test(navigator.userAgent);
  }
}

export function isBrowser() {
  return typeof window !== "undefined";
}
export namespace isBrowser {
  export function isChrome() {
    return isBrowser() && /Chrome\//i.test(navigator.userAgent);
  }
  export function isSafari() {
    return isBrowser() && /Safari\//i.test(navigator.userAgent);
  }
  export function isFirefox() {
    return isBrowser() && /Firefox\//i.test(navigator.userAgent);
  }
  export function isOpera() {
    return isBrowser() && /Opera\//i.test(navigator.userAgent);
  }
  export function isIE() {
    return isBrowser() && /MSIE\//i.test(navigator.userAgent);
  }
  export function isEdge() {
    return isBrowser() && /Edge\//i.test(navigator.userAgent);
  }
  export function isEdgeChromium() {
    return isBrowser() && /Edg\//i.test(navigator.userAgent);
  }
  export function isUC() {
    return isBrowser() && /UCBrowser/i.test(navigator.userAgent);
  }
  export function isQQBrowser() {
    return isBrowser() && /QQBrowser/i.test(navigator.userAgent);
  }
  export function isBaiduBrowser() {
    return isBrowser() && /Baidu/i.test(navigator.userAgent);
  }
  export function is360Browser() {
    return isBrowser() && /360/i.test(navigator.userAgent);
  }
  export function isSougouBrowser() {
    return isBrowser() && /MetaSr/i.test(navigator.userAgent);
  }
  export function isLiebaoBrowser() {
    return isBrowser() && /LBBROWSER/i.test(navigator.userAgent);
  }
  export function isMaxthonBrowser() {
    return isBrowser() && /Maxthon/i.test(navigator.userAgent);
  }
  export function is2345Explorer() {
    return isBrowser() && /2345Explorer/i.test(navigator.userAgent);
  }
  export function isCoolpadBrowser() {
    return isBrowser() && /Coolpad/i.test(navigator.userAgent);
  }
}

export namespace isOS {
  export function isWindows() {
    return isBrowser() && /Windows/i.test(navigator.userAgent);
  }
  export function isMacOS() {
    return isBrowser() && /Macintosh/i.test(navigator.userAgent);
  }
  export function isLinux() {
    return isBrowser() && /Linux/i.test(navigator.userAgent);
  }
  export function isAndroid() {
    return isBrowser() && /Android/i.test(navigator.userAgent);
  }
  export function isIOS() {
    return isBrowser() && /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
}

export namespace isApp {
  export function isWeChat() {
    return isBrowser() && /MicroMessenger/i.test(navigator.userAgent);
  }
  export function isAlipay() {
    return isBrowser() && /Alipay/i.test(navigator.userAgent);
  }
  export function isBaidu() {
    return isBrowser() && /Baidu/i.test(navigator.userAgent);
  }
  export function isQQ() {
    return isBrowser() && /QQ/i.test(navigator.userAgent);
  }
  export function isWeibo() {
    return isBrowser() && /Weibo/i.test(navigator.userAgent);
  }
  export function isDingTalk() {
    return isBrowser() && /DingTalk/i.test(navigator.userAgent);
  }
  export function isToutiao() {
    return isBrowser() && /NewsApp/i.test(navigator.userAgent);
  }
  export function isTaobao() {
    return isBrowser() && /AliApp\(TB/i.test(navigator.userAgent);
  }
  export function isTmall() {
    return isBrowser() && /AliApp\(TM/i.test(navigator.userAgent);
  }
  export function isJD() {
    return isBrowser() && /AliApp\(JD/i.test(navigator.userAgent);
  }
  export function isPinduoduo() {
    return isBrowser() && /PDD/i.test(navigator.userAgent);
  }
  export function isMeituan() {
    return isBrowser() && /Meituan/i.test(navigator.userAgent);
  }
  export function isEleme() {
    return isBrowser() && /Eleme/i.test(navigator.userAgent);
  }
  export function isDouyin() {
    return isBrowser() && /Aweme/i.test(navigator.userAgent);
  }
  export function isTikTok() {
    return isBrowser() && /TikTok/i.test(navigator.userAgent);
  }
  export function isKuaishou() {
    return isBrowser() && /Kwai/i.test(navigator.userAgent);
  }
  export function isXigua() {
    return isBrowser() && /News/i.test(navigator.userAgent);
  }
  export function isZhihu() {
    return isBrowser() && /Zhihu/i.test(navigator.userAgent);
  }
  export function isNetEase() {
    return isBrowser() && /Netease/i.test(navigator.userAgent);
  }
  export function isTencentNews() {
    return isBrowser() && /qqnews/i.test(navigator.userAgent);
  }
  export function isSinaNews() {
    return isBrowser() && /SinaNews/i.test(navigator.userAgent);
  }
  export function isSohuNews() {
    return isBrowser() && /SohuNews/i.test(navigator.userAgent);
  }
  export function isIfengNews() {
    return isBrowser() && /IfengNews/i.test(navigator.userAgent);
  }
  export function isTencentVideo() {
    return isBrowser() && /qqlivebrowser/i.test(navigator.userAgent);
  }
  export function isYouku() {
    return isBrowser() && /Youku/i.test(navigator.userAgent);
  }
  export function isTencent() {
    return isBrowser() && /Tencent/i.test(navigator.userAgent);
  }
  export function isBaiduMap() {
    return isBrowser() && /BaiduMap/i.test(navigator.userAgent);
  }
  export function isGaodeMap() {
    return isBrowser() && /GaodeMap/i.test(navigator.userAgent);
  }
  export function isTencentMap() {
    return isBrowser() && /TencentMap/i.test(navigator.userAgent);
  }
  export function isBaiduTieba() {
    return isBrowser() && /tieba/i.test(navigator.userAgent);
  }
  export function isZhihuZhuanlan() {
    return isBrowser() && /ZhihuZhuanlan/i.test(navigator.userAgent);
  }
  export function isWeChatWork() {
    return isBrowser() && /wxwork/i.test(navigator.userAgent);
  }
  export function isDingTalkWork() {
    return isBrowser() && /dingtalk/i.test(navigator.userAgent);
  }
  export function isLark() {
    return isBrowser() && /Lark/i.test(navigator.userAgent);
  }
  export function isWeCom() {
    return isBrowser() && /Wework/i.test(navigator.userAgent);
  }
  export function isQQWork() {
    return isBrowser() && /qqwork/i.test(navigator.userAgent);
  }
  export function isFeishu() {
    return isBrowser() && /Lark/i.test(navigator.userAgent);
  }
  export function isSlack() {
    return isBrowser() && /Slack/i.test(navigator.userAgent);
  }
  export function isTelegram() {
    return isBrowser() && /Telegram/i.test(navigator.userAgent);
  }
  export function isWhatsApp() {
    return isBrowser() && /WhatsApp/i.test(navigator.userAgent);
  }
  export function isFacebook() {
    return isBrowser() && /FBAN/i.test(navigator.userAgent);
  }
  export function isTwitter() {
    return isBrowser() && /Twitter/i.test(navigator.userAgent);
  }
  export function isInstagram() {
    return isBrowser() && /Instagram/i.test(navigator.userAgent);
  }
  export function isLinkedIn() {
    return isBrowser() && /LinkedIn/i.test(navigator.userAgent);
  }
  export function isPinterest() {
    return isBrowser() && /Pinterest/i.test(navigator.userAgent);
  }
  export function isSnapchat() {
    return isBrowser() && /Snapchat/i.test(navigator.userAgent);
  }
  export function isTikTokApp() {
    return isBrowser() && /TikTok/i.test(navigator.userAgent);
  }
  export function isKuaishouApp() {
    return isBrowser() && /Kwai/i.test(navigator.userAgent);
  }
  export function isXiguaApp() {
    return isBrowser() && /News/i.test(navigator.userAgent);
  }
  export function isZhihuApp() {
    return isBrowser() && /Zhihu/i.test(navigator.userAgent);
  }
  export function isNetEaseApp() {
    return isBrowser() && /Netease/i.test(navigator.userAgent);
  }
  export function isTencentNewsApp() {
    return isBrowser() && /qqnews/i.test(navigator.userAgent);
  }
  export function isSinaNewsApp() {
    return isBrowser() && /SinaNews/i.test(navigator.userAgent);
  }
  export function isSohuNewsApp() {
    return isBrowser() && /SohuNews/i.test(navigator.userAgent);
  }
  export function isIfengNewsApp() {
    return isBrowser() && /IfengNews/i.test(navigator.userAgent);
  }
  export function isTencentVideoApp() {
    return isBrowser() && /qqlivebrowser/i.test(navigator.userAgent);
  }
  export function isYoukuApp() {
    return isBrowser() && /Youku/i.test(navigator.userAgent);
  }
  export function isTencentApp() {
    return isBrowser() && /Tencent/i.test(navigator.userAgent);
  }
  export function isBaiduMapApp() {
    return isBrowser() && /BaiduMap/i.test(navigator.userAgent);
  }
  export function isGaodeMapApp() {
    return isBrowser() && /GaodeMap/i.test(navigator.userAgent);
  }
  export function isTencentMapApp() {
    return isBrowser() && /TencentMap/i.test(navigator.userAgent);
  }
  export function isBaiduTiebaApp() {
    return isBrowser() && /tieba/i.test(navigator.userAgent);
  }
  export function isZhihuZhuanlanApp() {
    return isBrowser() && /ZhihuZhuanlan/i.test(navigator.userAgent);
  }
  export function isWeChatWorkApp() {
    return isBrowser() && /wxwork/i.test(navigator.userAgent);
  }
  export function isDingTalkWorkApp() {
    return isBrowser() && /dingtalk/i.test(navigator.userAgent);
  }
  export function isLarkApp() {
    return isBrowser() && /Lark/i.test(navigator.userAgent);
  }
  export function isWeComApp() {
    return isBrowser() && /Wework/i.test(navigator.userAgent);
  }
  export function isQQWorkApp() {
    return isBrowser() && /qqwork/i.test(navigator.userAgent);
  }
  export function isFeishuApp() {
    return isBrowser() && /Lark/i.test(navigator.userAgent);
  }
}
