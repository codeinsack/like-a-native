<template>
  <VApp>
    <VRow>
      <VCol cols="3">
        <VNavigationDrawer
          absolute
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          width="20%"
          permanent
        >
          <VList>
            <VListItem v-for="[icon, text, link] in items" :key="link" :to="{ name: link }" link>
              <VListItemIcon>
                <VIcon>{{ icon }}</VIcon>
              </VListItemIcon>
              <VListItemContent>
                <VListItemTitle>{{ text }}</VListItemTitle>
              </VListItemContent>
            </VListItem>
          </VList>
        </VNavigationDrawer>
      </VCol>
      <VCol cols="9">
        <RouterView />
      </VCol>
    </VRow>
  </VApp>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import PartOfSpeechChip from '@/components/PartOfSpeechChip/PartOfSpeechChip.vue';
import { useTraining } from './Training';

export default defineComponent({
  data: () => ({
    items: [
      ['mdi-email', 'My Words', 'myWords'],
      ['mdi-account-supervisor-circle', 'Collect Word', 'collectWord'],
      ['mdi-clock-start', 'Guess Word', 'guessWord'],
    ],
  }),
  components: {
    PartOfSpeechChip,
  },
  setup() {
    const { temp } = useTraining();
    return {
      temp,
    };
  },
});
</script>

<style scoped lang="scss"></style>
