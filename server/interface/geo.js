import Router from 'koa-router'
import axios from './utils/axios'
import Menu from '../dbs/models/menu'
import Province from '../dbs/models/province'
import City from '../dbs/models/city'

let router = new Router({
  prefix: '/geo'
})

router.get('/getPosition', async (ctx) => {
  let {
    status,
    data: {
      province,
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/getPosition`)
  if (status === 200) {
    ctx.body = {
      province,
      city
    }
  } else {
    ctx.body = {
      province: '',
      city: ''
    }
  }
})

router.get('/menu', async (ctx) => {
  let {
    status,
    data: {
      menu
    }
  } = await axios.get('http://cp-tools.cn/geo/menu')
  ctx.body = {
    menu: status === 200 ? menu : []
  }
})

router.get('/province', async (ctx) => {
  // 操作本地数据库
  // let province = await Province.find()
  // ctx.body = {
  //   province: province.map(item => {
  //     return {
  //       id: item.id,
  //       name: item.value[0]
  //     }
  //   })
  // }
  let {
    status,
    data: {
      province
    }
  } = await axios.get('http://cp-tools.cn/geo/province')
  ctx.body = {
    province: status === 200 ? province : []
  }
})

router.get('/province/:id', async (ctx) => {
  let {
    status,
    data: {
      city
    }
  } = await axios.get(`http://cp-tools.cn/geo/province${ctx.params.id}`)
  ctx.body = {
    city: status === 200 ? city : []
  }
})

router.get('/city', async (ctx) => {
  // 操作本地数据库
  let city = []
  let result = await City.find()
  result.forEach(item => {
    city = city.concat(item.value)
  })
  ctx.body = {
    code: 0,
    city: city.map(item => {
      return {
        province: item.province,
        name: item.name === '市辖区' || item.name === '省直辖县级行政区划' ? item.province : item.name,
        id: item.id
      }
    })
  }
  // 操作线上数据库
  // let {
  //   status,
  //   data: {
  //     city
  //   }
  // } = await axios.get('http://cp-tools.cn/geo/city')
  // ctx.body = {
  //   city: status === 200 ? city : []
  // }
})


export default router
