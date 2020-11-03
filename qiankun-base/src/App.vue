<template>
    <div>
        <!--  基座中可以放自己的路由  -->
        <el-menu :router="true" mode="horizontal">
            <el-menu-item index="/">Home</el-menu-item>
            <el-menu-item index="/vue">vue应用</el-menu-item>
            <el-menu-item index="/react">react应用</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <!--  也可以放其他子应用  -->


        <div id="vue"></div>
        <div id="react"></div>
    </div>
</template>
