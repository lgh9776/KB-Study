import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta:{requireAuth:true}
      //meta 속성에 로그온이 필요한 경우를 지정한다
    },
    {//url => 특정 컴포넌트를 연결시키는 객체가 라우터
      path: '/logon', //http://localhost:5173/logon
      name: 'logon',
      component: () => import('../views/LogonView.vue')
    },
    { //404 에러 띄우기
      path:"/:pathMatch(.*)*", //정규식을 이용해서 위에서 처리하지 않는 url들은 모두 여기서 처리
      redirect:"/notFound" //redirect -> 전부 다른 곳으로 보냄
    },
    {
      path:"/notFound", //RouteLink to="/notFound"  단순하게 보낼 때
      name:"notFound", //RouteLink :to={name:"/notFound"} 보낼 정보가 따로 있을 때
      component:() => import('../views/NotFound.vue')
    },
    {
      path:"/slot",
      name:"/slot",
      component:() => import('../views/SlotView.vue')
    },
    {
      path:"/board/list/:page", //http://localhost:5173/board/list/1
      name:"BoardList",
      component:()=>import('../views/BoardListView.vue')
    },
    {
      path:"/loading", // http://localhost:5173/board/list/1 
      name:"VueLoadig",
      component:()=>import('../views/VueLoding.vue')
    },
    {
      path:"/score/list",
      name:"ScoreView1",
      component:() => import('../views/ScoreView.vue')
    },
    {
      path:"/score/create",
      name:"ScoreView2",
      component:() => import('../views/ScoreView.vue')
    },
    {
      path:"/todo/list",
      namr: "todoList",
      component:() => import('../components/todo/TodoList.vue')
    },
    {
      path:"/todo/view/:id",
      name:"todoView",
      component:() => import('../components/todo/TodoView.vue')
    },
    {
      path:"/todo/create",
      name:"todoCreate",
      component:() => import('../components/todo/TodoCreate.vue')
    }
  ]
})

/*
//about 컴포넌트가 로그온을 해야 들어갈 수 있도록 하자
//반드시 로그온을 해야할 라우터들을 추가 해야 한다
const needLogin = ['/about']

//네비게이션 => 보안장치, 라우터를 제어할 수 있다.
//특정 동작을 수행한 후 라우팅에 들어갈 수 있다

router.beforeEach((to, from) => {
  //라우터 링크를 하면 이동 전에 여기를 먼저 지나간다
  console.log(`router : ${from.path} ===> ${to.path}`);
  //needLogin에 지정한 url만
  let userid = sessionStorage.getItem("userid");

  if(needLogin.includes(to.path) && !userid){
    return { path:"/logon", query:{to:to.path}};
    //path : 이동한 정보
    //query : 로그인 후 다시 호출한 페이지 정보를 줘서 /about로 이동하게
    //1. /about ==> 보안때문에 /logon ==> 다시 /about으로 이동해야한다
    //http://localhost:5173/logon?to=/about
  }

})
*/

router.beforeEach((to, from) => {
  //라우터 링크를 하면 이동 전에 여기를 먼저 지나간다
  console.log(`router : ${from.path} ===> ${to.path}`);
  //needLogin에 지정한 url만
  let userid = sessionStorage.getItem("userid");

  if(to.meta.requireAuth && !userid){
    return { path:"/logon", query:{to:to.path}};
    //path : 이동한 정보
    //query : 로그인 후 다시 호출한 페이지 정보를 줘서 /about로 이동하게
    //1. /about ==> 보안때문에 /logon ==> 다시 /about으로 이동해야한다
    //http://localhost:5173/logon?to=/about
  }

})

export default router;
