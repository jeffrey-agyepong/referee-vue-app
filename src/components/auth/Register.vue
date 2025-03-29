<script setup>
import { ref } from "vue";
import { supabase } from "@/supabase";

const email = ref("");
const password = ref("");

const register = async () =>{
    const { error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    });
    if (error) alert(error.message);
    else alert("Check your email to confirm your account.")
}
</script>

<template>
    <div>
        <input v-model="email" placeholder="Email">
        <input v-model="password" type="password" placeholder="Password">
        <button @click="register">Register</button>
    </div>
</template>