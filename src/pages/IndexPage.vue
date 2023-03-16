<template>
  <q-page class="flex flex-center">
    <img
      alt="Quasar logo"
      src="~assets/quasar-logo-vertical.svg"
      style="width: 200px; height: 200px"
    />
  </q-page>
</template>

<script>
import { onMounted } from "vue";
import { createPatient } from "../services/api/patient";

export default {
  name: "IndexPage",
  setup() {
    onMounted(async () => {
      const res = await createPatient({
        clinicId: "2",
        firstName: "myFirstName",
        lastName: "myLastName",
        type: "???",
        birthday: "09/27/1998",
        email: "waynetest1@gmail.com",
        mobile: "0123456789",
        sex: "M",
        isGuardian: true,
        patientUnder: "DRA. Random",
      });
      console.log("res", res);
    });
  },
};
</script>
