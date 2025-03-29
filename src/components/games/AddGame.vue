<script setup>
import { ref } from "vue";
import { supabase } from "@/supabase";

const date = ref("");
const location = ref("");

const addGame = async() =>{
    const { error } = await supabase.from("games").insert([{ date: date.value, location: location.value }]);
    if(!error) alert("Game added!")
}
</script>
<template>
    <div>
        <h2>
            Post a Game
        </h2>
        <input v-model="date" type="date">
        <input v-model="location" placeholder="Location">
        <button @click="addGame">Post Game</button>
    </div>
</template>