// 项目所有API
import requests from './request';


// 三级联动接口

export const reqCategoryList = () => requests({
    url: '/product/getBaseCategoryList',
    method: 'get'
});