<template>
     <el-card>
       <div class="card-content">
       <div class="left">
         <img
          src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
          class="image"
         />
       </div>
       <div class="right">
         <h3><a>关于汉堡的产后护理</a></h3>
          <p>简单描述的文本: 将生成的dist文件夹，放到服务器的html文件夹下。
scp -r dist root@xx.xx.xx.xx:/html
简单描述的文本: 将生成的dist文件夹，放到服务器的html文件夹下。 scp -r dist root@xx.xx.xx.xx:/html  </p>
        <div class="info">
          <div>
          <span><i class="icofont-clock-time"></i>2022/4/18</span>
          <span><i class="icofont-thumbs-up"></i>231</span>
          <span><i class="icofont-eye"></i>231</span>
          <span><i class="icofont-speech-comments"></i>231</span>
          </div>
          <el-button color="#626aef" size="small" round>查看详情</el-button>
        </div>
       </div>

        <!-- <div style="padding: 14px">
          <span>Yummy hamburger</span>
          <div class="bottom">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">Operating</el-button>
          </div>
        </div> -->
        </div>
      </el-card>

</template>

<script>
export default {
    name:"ArticleAbbrevation",
    setup(){
      return {}
    }
}
</script>

<style lang="less" scoped>

.el-card{
  margin:10px 4px;
}
.card-content{
  width: 100%;
  height:160px;
  display: flex;
  justify-content: space-betweens;
  // align-items:;

  > .left{
    width:30%;
    height: 150px;
    box-sizing: border-box;
    padding:10px 10px 6px 10px;
    overflow: hidden;
  }
  > .right{
    width:70%;
    padding: 2px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    h3{
      margin-bottom: 0;
      margin-top:10px;
    }
    p{
      font-family: "Lucida Calligraphy", cursive, serif, sans-serif;
      color:#151515;
      font-size:14px;
      margin-top:6px;
    }
     .info{
      display: flex;
      justify-content: space-between;
      align-items:flex-end;
       span{
         margin-right: 10px;
       }

     }
  }
}
</style>