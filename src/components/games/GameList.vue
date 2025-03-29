<script setup>
import { ref, onMounted } from "vue";
import { supabase } from "@/supabase";

const games = ref([]);

const fetchGames = async() => {
    let { data, error } = await supabase.from("games").select("*").is("referee_id", null);
    if(!error) games.value = data;
}

const acceptGame = async(id) => {
    const user = await supabase.auth.getUser();
    const { error } = await supabase.from("games").update({ referee_id: user.id}).eq("id", id);
    if(!error) fetchGames();
};

onMounted(fetchGames);
</script>

<template>
    <div>
        <h2>
            Available Games
        </h2>
        <ul>
            <li v-for="game in games" :key="game.id">
                {{ game.date }} - {{ game.location }}
                <button @click="acceptGame(game.id)">Accept</button>
            </li>
        </ul>
    </div>
</template>