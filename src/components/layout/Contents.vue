<template>
    <div>
        <!-- 네비게이션 시작 -->
        <b-navbar toggleable="lg" type="dark" variant="holo">
            <router-link to="/Summary" class="navbar-brand">HeoSeongTae</router-link>
            <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <ul class="navbar-nav">
                    <li class="nav-item">
                        <router-link to="/Summary" class="nav-link">Summary</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Project" class="nav-link">Project</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Stack" class="nav-link">Stack</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Education" class="nav-link">Education</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/History" class="nav-link">History</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Salary" class="nav-link">Salary</router-link>
                    </li>
                    <li class="nav-item">
                        <router-link to="/Contact" class="nav-link">Contact</router-link>
                    </li>
                </ul>
            </b-collapse>
        </b-navbar>
         <!-- Header 시작 -->
        <div class="header">
            <div class="s_container">
                <h1>개발자 <strong>허성태</strong> 포트폴리오</h1>
            </div>
        </div>
        <!-- Header 끝 -->
        <!-- 네비게이션 끝 -->
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    name : "contents",
}

</script>