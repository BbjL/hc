import ajax from './ajax'

const api = "/api";

// 1、分组获取成员信息
export const reqGroupMems = (group,pageNum=1 , pageSize=100 ) => ajax(api+'/mem/find/group' ,{group,pageNum,pageSize} , 'POST');
// 2、分组获取奖项
export const reqGroupAward = (group,pageNum=1,pageSize=5) => ajax(api+'/award/find/group',{group,pageNum,pageSize} , 'POST')
// 3、分组获取奖项
export const reqAllAward = (pageNum =1,pageSize = 100 ) => ajax(api+'/award/find/all',{pageNum,pageSize} , 'POST')
// 4、获取团队氛围
export const reqSurrounding = (id=32) => ajax(api+'/atm/find/one',{id} , 'POST')
// 5、发送留言
export const uploadMessage = (emailName ,emailAccount ,emailContent ) => ajax(api+'/email/upload',{emailName ,emailAccount ,emailContent} , 'POST')
// 6、获取团队项目
export const reqTeamProjects = (pageNum=1  ,pageSize =1000  ,delFlag=1)=>ajax(api+'/pro/find/status' , {pageNum,pageSize,delFlag} , 'POST');
// 7、根据id获取项目
export const reqProjectById = (id)=>ajax(api+'/pro/find/id' , {id} , 'POST');


//风采
export const reqElegants = (pageNum,pageSize,year) => ajax(api+"/elegant/age",{pageNum,pageSize,year},'POST')  //获取对应年份对应页码的风采列表
export const reqElegantYears = () => ajax(api+"/elegant/ages",{},'POST')  //获取风采年份列表
export const reqElegantDetails = (id) => ajax(api+"/elegant/details",{id},'POST')  //获取风采详情

//视频
export const reqGroups = () => ajax(api+"/group/all",{},'POST')  //获取组别
export const reqGroupsVideos = (group,pageNum,pageSize) => ajax(api+"/video/group",{group,pageNum,pageSize},'POST')  //获取组别视频
export const reqVideos = (pageNum,pageSize,year) => ajax(api+"/video/age",{pageNum,pageSize,year},'POST')  //获取对应年份对应页码的视频列表
export const reqVideoYears = () => ajax(api+"/video/ages",{},'POST')  //获取是视频年份列表
export const reqVideoDetails = (id) => ajax(api+"/video/details",{id},'POST')  //获取视频详情

//获取团队制度
export const reqTeamRegu = ()=>ajax(api+'/insitu/all' ,{} ,'POST');
//获取实验室资源
export const reqTeamSour = ()=>ajax(api+'/res/find/all' ,{} ,'POST');
//获取组别
export const reqTeamGroup = ()=>ajax(api+'/group/all',{}, 'POST');

