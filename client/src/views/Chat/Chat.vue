<template>
  <VContainer class="d-flex align-content-space-between mx-12" fill-height>
    <VRow justify="center">
      <VCol cols="4">
        <VList subheader two-line>
          <VSubheader inset>Users</VSubheader>
          <VListItem>
            <VListItemAvatar>
              <VIcon class="grey lighten-1" dark> mdi-account </VIcon>
            </VListItemAvatar>
            <VListItemContent>
              <VListItemTitle>John Doe</VListItemTitle>
              <VListItemSubtitle>admin</VListItemSubtitle>
            </VListItemContent>
          </VListItem>
          <VListItem>
            <VListItemAvatar>
              <VIcon class="grey lighten-1" dark> mdi-account </VIcon>
            </VListItemAvatar>
            <VListItemContent>
              <VListItemTitle>Martin Schmidt</VListItemTitle>
              <VListItemSubtitle>moderator</VListItemSubtitle>
            </VListItemContent>
          </VListItem>
        </VList>
      </VCol>
      <VCol cols="8">
        <VCard class="pa-3 mb-2" color="purple lighten-4">
          <div>
            <span class="subtitle-2 mr-2">Brad</span>
            <span class="body-2">9:12pm</span>
          </div>
          <div class="caption">
            It is a long established fact that a reader will be distracted by the readable content
          </div>
        </VCard>
        <VCard class="pa-3" color="purple lighten-4">
          <div>
            <span class="subtitle-2 mr-2">Martin</span>
            <span class="body-2">9:19pm</span>
          </div>
          <div class="caption">
            It is a long established fact that a reader will be distracted by the readable content
          </div>
        </VCard>
      </VCol>
    </VRow>
    <VRow justify="center">
      <VCol class="d-flex align-center mb-0" cols="12">
        <VTextField placeholder="Enter a message" outlined dense hide-details />
        <VBtn color="primary" outlined>
          <VIcon class="mr-2"> mdi-cloud-upload </VIcon>
          Send
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useChat } from './Chat';

export default defineComponent({
  setup() {
    const { message } = useChat();
    return {
      message,
    };
  },
});
</script>

<style scoped lang="scss"></style>
