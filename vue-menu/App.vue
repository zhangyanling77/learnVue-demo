<template>
  <div>
    <Menu :data="data"></Menu>
  </div>
</template>
<script>
import zfMenu from "./components/zf-menu";
import zfMenuItem from "./components/zf-menu-item";
import zfSubmenu from "./components/zf-submenu";
import Menu from "./menu";
export default {
  data() {
    return {
      data: [
        {
          name: "导航一",
          id: 1,
          children: [
            {
              name: "导航1.1",
              id: 1.1,
              children: [
                { name: "导航1.1.1", id: 1.3 },
                {
                  name: "导航1.1.1",
                  id: 1.4,
                  children: [
                    { name: "导航1.1.5", id: 1.5 },
                    { name: "导航1.1.6", id: 1.6 }
                  ]
                }
              ]
            },
            { name: "导航1.2", id: 1.2 }
          ]
        },
        { name: "导航二", id: 2 },
        { name: "导航三", id: 3 },
        { name: "导航三", id: 4 }
      ]
    };
  },
  components: {
    zfMenu,
    Menu,
    zfMenuItem,
    zfSubmenu
  }
};
</script>
