
export const EnvironmentType = {
    PRODUCTION: 'PRODUCTION',
    PRESS: 'PRESS',
    TEST246: 'TEST246',
};

export const CodeType = {
    SUCCESS: 0, // 请求成功
    API_KEY_ERROR: 1, // 用户未登录
    INFO_ERROR: 4,
    THIRD_FAILED: 1006,
    OTHER_DEVICE: 1015,
    SESSION_LOSE: 1016,
    AUTH_FAILED: 1007,
};

export const ApiPath = {
    CUSTOMER: '/myhome/api/customer',                // 用户管理
    ROOM: '/myhome/api/room',                        // 房间管理
    ESTATE: '/myhome/api/estate',                    // 公寓管理
    CONTRACT: '/myhome/api/contract',                // 合同管理
    BILL: '/myhome/api/bill',                        // 账单管理
    ORDER: '/myhome/api/order',                      // 订单列表
    CONTROL: '/control/api/control',                 // 客控管理
    MESSAGE: '/myhome/api/message',                  // 消息中心
    PAYMENT: '/myhome/api/payment',                  // 支付管理
    SEARCH: '/myhome/api/search',                    // 搜索
    HOUSE: '/myhome/api/house',                      // 房间详情
    FEEDBACK: '/myhome/api/feedback',                // 意见反馈
    UPLOAD_AVATAR: '/myhome/api/sys/upload/avatar/', // 头像上传
    MARKET: '/myhome/api/market',
    HOME: '/myhome/api/home',                        // 移动首页
    MEMORSHOW: '/myhome/api/memorShow',              // 麦友专访
    LOAN: '/myhome/api/loan',                        // 金融模块
    FOCUS: '/myhome/api/focus',                      // 焦点图
    QUICKPAY: '/myhome/api/quickPay',                // 快捷支付
    INTELLIGENTESTATE: '/myhome/api/intelligentEstate', // 快捷支付
    COUPON: '/myhome/api/coupon',                    // 优惠券
    COREBASE: '/myhome/api/core/base',               //基础信息
};

export const baseUrl = type => {
    switch (type) {
        case EnvironmentType.PRESS:
            return 'http://papi.mdguanjia.com';
        case EnvironmentType.TEST246:
            return 'https://tapi246.mdguanjia.com';
        case EnvironmentType.PRODUCTION:
        default:
            return 'https://api.mdguanjia.com';
    }
};

