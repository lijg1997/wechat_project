// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    msg:'i love you',
    userInfo:{}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('onLoad ---', this.data.msg);
    wx.getUserInfo({
      success: (res) => {
        this.setData({
          userInfo: res.userInfo
        })
      },
      fail: (res) => {
        console.log(res, '获取用户失败')
      }
    })
    setTimeout(()=>{
      this.setData({
        msg: 'i love you soo much'
      })
    },5000);
  },

  handleGetUserInfo(res){
    console.log(res)
    if(res.detail.userInfo && !this.data.userInfo.nickName){
      this.setData({
        userInfo: res.detail.userInfo
      })
    }
  },

  toLogin(){
    wx.navigateTo({
      url: '/pages/login/login'
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    console.log('onReady');
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    console.log('onShow');
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})