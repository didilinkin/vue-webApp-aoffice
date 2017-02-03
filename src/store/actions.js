import  Vue      from    'vue'
import  axios    from    'axios'
const   qs = require('qs')
import * as types from './mutations'
// 设置ContentType
// axios.defaults.headers.post['Content-Type'] = 'application/json'
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
    // var params = new URLSearchParams();
    // params.append('cityCode', '3702');
    // params.append('page', '1');
    // axios.post('http://app.aplusoffice.cn/api/index', params)
    // .then(function (response) {
    //     let get_data = response.data.resultData
    //     // console.log('get_data值' + get_data)
    //     // console.dir(get_data)
    //     commit('addState',get_data)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });

    // 使用QS获取数据
    axios.post('http://app.aplusoffice.cn/api/index',qs.stringify({ 'cityCode':3702, 'page': 1 }))
    .then(function (response) {
        let get_data = response.data.resultData
        commit('addState',get_data)
    })
    .catch(function (error) {
        console.log(error)
    });
}

/* 后期将modules 分出 */
// 家居信息
export const getFurnitureInfo = ({commit}) => {
    // 本地数据
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

    // axios跨域解决方案( 原生方法 )
    // var params = new URLSearchParams();
    // params.append('code', 'ig0003');
    // axios.post('http://app.aplusoffice.cn/api/es/getInvestigate', params)
    // .then(function (response) {
    //     let get_ResearchInfoData = response.data.resultData
    //     // console.log(response)
    //     commit('addResearchInfo',get_ResearchInfoData)
    // })
    // .catch(function (error) {
    //     console.log(error);
    // })

    // 使用QS获取数据
    axios.post('http://app.aplusoffice.cn/api/es/getInvestigate',qs.stringify({ 'code': 'ig0003' }))
    .then(function (response) {
        let get_ResearchInfoData = response.data.resultData
        commit('addResearchInfo',get_ResearchInfoData)
    })
    .catch(function (error) {
        console.log(error)
    });
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

    // Axios原生方法传参( 不支持ios )
    // var params = new URLSearchParams();
    // params.append('code',Obj.codeId);
    // axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode', params)
    // .then(function (response) {
    //     let set_CoWorkingInfo = response.data.resultData
    //     commit('addCoWorkingInfo',set_CoWorkingInfo)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // })

    // 使用QS获取数据
    axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode',qs.stringify({ 'code': Obj.codeId }))
    .then(function (response) {
        let set_CoWorkingInfo = response.data.resultData
        commit('addCoWorkingInfo',set_CoWorkingInfo)
    })
    .catch(function (error) {
        console.log(error)
    });
}
//获得 "办公楼详情" - 数据
export const setOfficeBuildingInfo = ({commit},Obj) => {
    // 静态json
    // axios.post( './static/buildingDetails_OfficeBuilding_1.json', {
    //     // code: 'ig0001'
    // })

    // Axios原生方法传参( 不支持ios )
    // var params = new URLSearchParams();
    // params.append('code',Obj.codeId);
    // axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode', params)
    // .then(function (response) {
    //     let set_OfficeBuildingInfo = response.data.resultData
    //     // console.dir(set_OfficeBuildingInfo)
    //     commit('addOfficeBuildingInfo',set_OfficeBuildingInfo)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // })

    // qs方法传参数
    axios.post('http://app.aplusoffice.cn/api/building/getH5BuildingByCode', qs.stringify({
        'code': Obj.codeId
    }))
    .then(function (response) {
        let set_OfficeBuildingInfo = response.data.resultData
        console.log('set_OfficeBuildingInfo值' + set_OfficeBuildingInfo)
        // console.dir(set_OfficeBuildingInfo)
        commit('addOfficeBuildingInfo',set_OfficeBuildingInfo)
    })
    .catch(function (error) {
        console.log(error)
    });
}

// 地图初始数据
export const getRegionPointList = ({commit},Obj) => {
    // Axios原生方法传参( 不支持ios )
    // var params = new URLSearchParams();
    // params.append('cityCode',Obj.cityCode);
    // axios.post('http://app.aplusoffice.cn/api/map/getRegionPointList', params)
    // .then(function (response) {
    //     let set_RegionPointList = response.data.resultData
    //     // console.dir(set_RegionPointList)
    //     commit('addRegionPointList',set_RegionPointList)
    // })
    // .catch(function (error) {
    //     console.log(error)
    // })

    // qs方法传参数
    axios.post('http://app.aplusoffice.cn/api/map/getRegionPointList', qs.stringify({ 'cityCode': Obj.codeId }))
    .then(function (response) {
        let set_RegionPointList = response.data.resultData
        // console.log('set_OfficeBuildingInfo值' + set_OfficeBuildingInfo)
        commit('addRegionPointList',set_RegionPointList)
    })
    .catch(function (error) {
        console.log(error)
    });
}
