<template>
    <div class="items">
        <div class="item-value">{{skillName}}</div>
    </div>      
</template>

<script lang="ts" src="./skillListItem.ts"></script>

<style lang="scss" scoped>
    .items{
        position: relative;
    }
    .item-value{
        color:white;
        padding:5px 0 5px 10px; 
    }
</style>

