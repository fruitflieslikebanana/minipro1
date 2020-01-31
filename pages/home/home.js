// pages/home/home.js
Page({
  data:{
    name:'Teletubbies',
    age: 18,
    student:[
      {id: 1, name:'dingding',color:'purple'},
      {id: 2, name:'dixi',color:'green'},
      {id: 3, name:'lala',color:'yellow'},
      {id: 4, name:'paul',color:'red'}
    ],
    counter:0
  },
  handleBtnClick(){
    this.setData({
      counter:this.data.counter +1
    })
  },
  handleSubstraction(){
    this.setData({
      counter: this.data.counter -1
    })
  }
})