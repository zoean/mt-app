<template>
  <div class="page-detail">
    <el-row>
      <el class="col"
          :span="24">
        <crumbs :type="type"
                :keyword="keyword" />
      </el>
    </el-row>
    <el-row>
      <el class="col"
          :span="24">
        <summa :meta="product" />
      </el>
    </el-row>
    <el-row class="m-title">
      <el class="col"
          :span="24">
        <h1>商家团购及优惠</h1>
      </el>
    </el-row>
    <el-row v-if="canOrder || !login">
      <el class="col"
          :span="24">
        <list v-if="login"
              :list="list" />
        <div v-else
             class="deal-need-login">
          <img src="//p0.meituan.net/codeman/56a7d5abcb5ce3d90fc91195e5b5856911194.png"
               alt="登录查看">
          <span>请登录后查看详细团购优惠</span>
          <el-button type="primary"
                     round>
            <a href="/login">立即登录</a>
          </el-button>
        </div>
      </el>
    </el-row>
  </div>
</template>
<script>
import Crumbs from '@/components/detail/crumbs.vue'
import Summa from '@/components/detail/summary.vue'
import List from '@/components/detail/list.vue'
export default {
  components: {
    Crumbs,
    Summa
  },
  computed: {
    canOrder: function () {
      return this.list.filter(item => item.photo.length).length
    }
  },
  async asyncData (ctx) {
    let { keyword, type } = ctx.query;
    let { status, data: { product, more: list, login } } = await ctx.$axios.get('/search/products', {
      params: {
        keyword,
        type,
        city: ctx.store.state.geo.position.city
      }
    })
    if (status === 200) {
      return {
        keyword,
        product,
        type,
        list,
        login
      }
    } else {
      return {
        keyword,
        product: {},
        type,
        list: [],
        login: false
      }
    }
  }
}
</script>
<style lang="scss">
@import "@/assets/css/detail/index.scss";
</style>