<template>
  <VContainer class="d-flex align-content-space-between mx-12" fill-height>
    <VRow justify="center">
      <VCol cols="4">
        <VList subheader two-line>
          <VSubheader inset>Users</VSubheader>
          <VListItem v-for="user in users" :key="user._id">
            <VListItemAvatar>
              <VIcon class="grey lighten-1" dark> mdi-account </VIcon>
            </VListItemAvatar>
            <VListItemContent>
              <VListItemTitle>{{ user.name }}</VListItemTitle>
              <VListItemSubtitle>{{ user.role }}</VListItemSubtitle>
            </VListItemContent>
          </VListItem>
        </VList>
      </VCol>
      <VCol cols="8">
        <VCard
          v-for="(message, index) in messages"
          :key="index"
          class="pa-3 mb-2"
          color="purple lighten-4"
        >
          <div>
            <span class="subtitle-2 mr-2">{{ message.userName || 'Admin' }}</span>
            <span class="body-2 font-italic">{{ formatDate(message.time) }}</span>
          </div>
          <div class="caption">
            {{ message.text }}
          </div>
        </VCard>
      </VCol>
    </VRow>
    <VRow justify="center">
      <VCol class="d-flex align-center mb-0" cols="12">
        <VTextField v-model="message" placeholder="Enter a message" outlined dense hide-details />
        <VBtn class="ml-2" color="primary" outlined @click="sendMessage">
          <VIcon class="mr-2"> mdi-cloud-upload </VIcon>
          Send
        </VBtn>
        <VBtn class="ml-2" color="warning" outlined @click="clearAllMessages">
          <VIcon class="mr-2"> mdi-delete-variant </VIcon>
          Clear
        </VBtn>
      </VCol>
    </VRow>
  </VContainer>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';
import { useChat } from './Chat';

export default defineComponent({
  setup(props, { root }) {
    const { message, messages, sendMessage, formatDate, users, clearAllMessages } = useChat(
      root.$socket.client
    );
    return {
      message,
      messages,
      sendMessage,
      formatDate,
      users,
      clearAllMessages,
    };
  },
});
</script>

<style scoped lang="scss"></style>
