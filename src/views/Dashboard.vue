<template>
    <div>
        <h1>
            Dashboard
        </h1>
        <AddGame />
        <GameList />
        <Payment />
    </div>
</template>

<script setup>
import AddGame from '@/components/games/AddGame.vue';
import GameList from '@/components/games/GameList.vue';
import Payment from '@/components/Payment.vue';
</script>