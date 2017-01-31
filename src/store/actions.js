import  Vue      from    'vue'
import  axios    from    'axios'
const   qs = require('qs')
import * as types from './mutations'
// 设置ContentType
axios.defaults.headers.post['Content-Type'] = 'application/json'
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

// 设置token
// axios.defaults.headers.common['x-auth-token'] = 'x-auth-token';
// axios.defaults.headers.common['x-requested-from'] = 'apiHttpRequest';

// 免费测试接口 GET方式 :
// https://jsonplaceholder.typicode.com/users
// http://www.punesubji.com/store/rest/products

export const addState = ({commit}) => {
    // 本地JSON
    // axios.post('./static/data.json')

    // 未使用QS方法
    var params = new URLSearchParams();
    params.append('cityCode', '3702');
    params.append('page', '1');
    axios.post('http://app.aplusoffice.cn/api/index', params)
    .then(function (response) {
        let get_data = response.data.resultData
        // console.log('get_data值' + get_data)
        // console.dir(get_data)
        commit('addState',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });

    // 使用QS获取数据
    // axios.post('http://app.aplusoffice.cn/api/index',qs.stringify({ 'cityCode':3702, 'page': 1 }))
    // .then(function (response) {
    //     let get_data = response.data.resultData
    //     // console.log('get_data值' + get_data)
    //     // console.dir(get_data)
    //     commit('addState',get_data)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // });
}

// 后期将modules 分出
export const getFurnitureInfo = ({commit}) => {
    axios.post('./static/furnitureInfo_1.json', {
    // axios.post('http://192.168.1.30:8282/aoffice_app/api/es/getInvestigate?icode=ig0001' , {
        // icode: 'ig0001'
    })
    .then(function (response) {
        let get_data = response.data.resultData
        commit('addFurnitureInfo',get_data)
    })
    .catch(function (error) {
        console.log(error);
    });
}

//获得 "外出详情" - 数据
export const getResearchInfo = ({commit}) => {
    //  // 静态json
    // axios.post( './static/researchInfo_1.json', {
    //     // code: 'ig0001'
    // })
    // .then(function (response) {
    //     let get_ResearchInfoData = response.data.resultData
    //     // console.log(response)
    //     commit('addResearchInfo',get_ResearchInfoData)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })

    // http://app.aplusoffice.cn/api

    // axios跨域解决方案( 测试成功 )
    var params = new URLSearchParams();
    params.append('code', 'ig0003');
    axios.post('http://app.aplusoffice.cn/api/es/getInvestigate', params)
    .then(function (response) {
        let get_ResearchInfoData = response.data.resultData
        console.log(response)
        commit('addResearchInfo',get_ResearchInfoData)
    })
    .catch(function (error) {
        console.log(error);
    })
}

//获得 "联合办公" - 数据
export const setCoWorkingInfo = ({commit},Obj) => {
     // 静态json
    // axios.post( './static/buildingDetails_CoWorking_1.json', {
    //     // code: 'ig0001'
    // })
    // .then(function (response) {
    //     let set_CoWorkingInfo = response.data.resultData
    //     commit('addCoWorkingInfo',set_CoWorkingInfo)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })

    // 动态
    var params = new URLSearchParams();
    // console.log(Obj.codeId)
    params.append('code',Obj.codeId);
    axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode', params)
    .then(function (response) {
        let set_CoWorkingInfo = response.data.resultData
        commit('addCoWorkingInfo',set_CoWorkingInfo)
    })
    .catch(function (error) {
        console.log(error)
    })
}
//获得 "办公楼详情" - 数据
// ({ dispatch }, username)
export const setOfficeBuildingInfo = ({commit},Obj) => {
    // 静态json
    // axios.post( './static/buildingDetails_OfficeBuilding_1.json', {
    //     // code: 'ig0001'
    // })

    // 动态
    var params = new URLSearchParams();
    // console.log(Obj.codeId)
    params.append('code',Obj.codeId);
    axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode', params)
    .then(function (response) {
        let set_OfficeBuildingInfo = response.data.resultData
        // console.dir(set_OfficeBuildingInfo)

        commit('addOfficeBuildingInfo',set_OfficeBuildingInfo)
    })
    .catch(function (error) {
        console.log(error)
    })

    // 使用QS( 未成功 )
    // axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode', qs.stringify({ 'code': 'B000000008' }))
    // .then(function (response) {
    //     let get_data = response.data.resultData
    //     // console.log('get_data值' + get_data)
    //     // console.dir(get_data)
    //     commit('addState',get_data)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // });

    // 测试外部免费接口数据( 参数是否提交成功: 已成功! )
    // axios.get('http://api.jirengu.com/fm/getSong.php/', qs.stringify({
    //     // axios.post('http://localhost:3003/clients', qs.stringify({
    //     'channel': "333"
    // }))
    // .then(function (response) {
    //     let get_data = response
    //     console.log('get_data值' + get_data)
    //     console.dir(get_data)
    //     // commit('addState',get_data)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // });
}
