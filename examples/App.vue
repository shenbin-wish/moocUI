<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Demo/>
    <m-card 
      imgSrc="01.jpeg"
      summary="的的顶顶顶顶顶的点点滴滴  叨叨叨"
    />
    <m-card
      imgSrc="01.jpeg"
      summary="EEEEEE腹股沟管过过咕咕咕咕咕咕过过过过过过过过  嗯嗯嗯"
    >
      <template v-slot:footer>
        <div class="footer">
          <div class="level">中级 $ 54444</div>
          <div class="price">￥299.00</div>
        </div>
      </template> 
    </m-card>
    <m-card imgSrc="02.png" :width="370" :imgHeight="90">
      lalalalaallaallalalalalalaalla
      <template v-slot:footer>
        <div class="footer-spring">
          <div class="level">高级 $ 54444</div>
          <div class="level">￥999.00</div>
        </div>
      </template> 
    </m-card>
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.footer{
  padding: 0 8px;
  font-size: 12px;
  text-align: left;
}
.level{
  color:#9199A1;
  margin-bottom: 8px;
}
.price{
  color:#f01414;
}
.footer-spring{
  display:flex;
  justify-content: space-between;
  padding: 0 8px;
  font-size:12px;
}
</style>
