<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import InputMask from 'primevue/inputmask';
import MultiSelect from 'primevue/multiselect';
import Textarea from 'primevue/textarea';

const form = ref({
  name: '',
  skills: [],
  phone: '',
  bio: '',
})

function onSubmit() {
  alert(JSON.stringify(form.value, null, 2))
}
</script>

<template>
  <form @submit.prevent="onSubmit" class="p-fluid m-auto w-max">
    <div class="mb-3">
      <label>Name</label>
      <InputText v-model="form.name" required/>
    </div>
    <div class="mb-3">
      <label>Phone</label>
      <InputMask v-model="form.phone" mask="8 (999) 999-99-99" placeholder="8 (999) 999-99-99" />
    </div>
    <div class="mb-3">
      <label>Bio</label>
      <Textarea v-model="form.bio" autoResize/>
    </div>
    <div class="mb-3">
      <label>Skills</label>
      <MultiSelect v-model="form.skills" :options="['JS', 'C#']"/>
    </div>

    <Button label="Submit" type="submit"/>
  </form>
</template>
