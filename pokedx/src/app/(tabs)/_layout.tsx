import { NativeTabs, Icon, Label } from "expo-router/unstable-native-tabs";

const TAB_BAR_ACTIVE = "#E3350D";

export default function TabsLayout() {
  return (
    <NativeTabs
      labelStyle={{ color: TAB_BAR_ACTIVE }}
      tintColor={TAB_BAR_ACTIVE}
    >
      <NativeTabs.Trigger name="index">
        <Label>Pokedex</Label>
        <Icon sf={{ default: "book", selected: "book.fill" }} />
      </NativeTabs.Trigger>

      <NativeTabs.Trigger name="favorites">
        <Label>Favorites</Label>
        <Icon sf={{ default: "heart", selected: "heart.fill" }} />
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}
