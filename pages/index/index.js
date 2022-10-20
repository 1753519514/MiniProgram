// index.js
// 获取应用实例
const app = getApp()

// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 1,
    list: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {
    let that = this
    wx.request({
      url: 'http://localhost:3000/data',
      success(res) {
        that.setData({
          list: res.data.hot
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },

  /**
   * 改变数字
   */
  changeNum(options) {
    this.setData({ num: options.target.dataset.num })
  },

  /**
   * 进入细节页面
   */
  toDetail() {
    wx.navigateTo({
      url: '/pages/detail/detail'
    })
  },
})