<!-- 컴포넌트임 -->
<template lang="">
    <div>
        <form action="/action_page.php" class="was-validated">
            <div class="mb-3 mt-3">
                <label for="uname" class="form-label">Userid:</label>
                <input type="text" class="form-control" 
                v-model="userInfo.userid" 
                id="uname" placeholder="Enter username" name="uname" required>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Password:</label>
                <input type="password" 
                v-model="userInfo.password"
                class="form-control" id="pwd" placeholder="Enter password" name="pswd" required>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Please fill out this field.</div>
            </div>
            <div class="form-check mb-3">
                <input class="form-check-input" type="checkbox" id="myCheck" name="remember" required>
                <label class="form-check-label" for="myCheck">I agree on blabla.</label>
                <div class="valid-feedback">Valid.</div>
                <div class="invalid-feedback">Check this checkbox to continue.</div>
            </div>
            <button type="button" class="btn btn-primary" @click="logon">Submit</button>
        </form>
        </div>
</template>

<script>
//ref => 객체도 되고 원시타입(기본타입)
import {ref, reactive} from 'vue';
import {useRouter,useRoute} from 'vue-router'
//페이지 이동은 useRouter 객체
//그동안 이동했던 페이지 정보는 useRoute가 갖고있다.
export default {
    setup(){
        const router = useRouter(); //push 함수 => 이동할 페이지 정보
        const route = useRoute(); //http://localhost:5173/logon?to=/about
                                    //전달하는 정보는 to=/about는 route가 가져옴
                                    //
        //페이지 이동을 하려면 router 사용 필수, 이동하고 있는 라우팅 정보를 저장하는 함수는 router
        const userInfo = reactive({userid:"", password:"", username:""});
        //원래는 백엔드 서버에서 데이터를 가져와야함
        const userList = [
            {userid:"test", password:'1234', username:'홍길동'},
            {userid:"test2", password:'1235', username:'임꺽정'},
            {userid:"test3", password:'1236', username:'강감찬'},
            {userid:"test4", password:'1237', username:'윤관'},
            {userid:"test5", password:'1238', username:'서희'}
        ]

        const logon = () =>{
            let user = userList.find(e=>e.userid == userInfo.userid);
            sessionStorage.setItem("userid", "");
            sessionStorage.setItem("username", "");

            if(user == null){
                alert("해당하는 아이디가 없습니다.");
                return; //함수 종료
            }
            
            if(user.password != userInfo.password){
                alert("패스워드가 일치하지 않습니다");
                return;
            }

            alert("로그온 성공");

            /* 로그온 정보는 세션, 쿠키, 로컬스토리지
            세션 -> 서버에 저장
            쿠키, 로컬스토리지 -> 클라이언트에 저장
            쿠키가 보안문제 때문에 html5에서 로컬스토리지를 만든다.*/
            sessionStorage.setItem("userid", user.userid);
            sessionStorage.setItem("username", user.username);

            //파라미터나 쿼리는 route에 있음
            let path = route.query.to?route.query.to:"/"; //이동할 경호에 대한 정보 등
            // if(path == undefined)
            //     path="/"
            console.log(path);
            router.push({path:path});
        }

        //리턴시켜야 템플릿에서 사용 가능
        return {userInfo, userList,logon};
    }
}
</script>
<style lang="">
    
</style>