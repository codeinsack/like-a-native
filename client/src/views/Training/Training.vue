<template>
  <VApp>
    <VRow>
      <VCol class="pa-0" cols="3">
        <VNavigationDrawer
          absolute
          dark
          src="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
          width="20%"
          permanent
        >
          <VList>
            <VListItem v-for="[icon, text, link] in tabs" :key="link" :to="{ name: link }" link>
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
      <VCol class="pa-0" cols="9">
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
  components: {
    PartOfSpeechChip,
  },
  setup() {
    const { tabs } = useTraining();
    return {
      tabs,
    };
  },
});
</script>

<style scoped lang="scss"></style>
