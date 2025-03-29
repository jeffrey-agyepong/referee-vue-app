<script setup>
import { ref } from "vue";
import { supabase  } from "@/supabase";
import { useRouter } from "vue-router";

const router = useRouter();
const email = ref("");
const password = ref("");

const login = async() =>{
    const { error } = await supabase.auth.signInWithPassword({
        email: email.value,
        password: password.value,
    });
    if(error) alert(error.message);
    else router.push("/dashboard");
};
</script>

<template>
    <div>
        <input v-model="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="login">Login</button>
    </div>
</template>